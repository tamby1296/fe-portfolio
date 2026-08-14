import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Toast from "../../components/Toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactFormValues = { name: "", email: "", subject: "", message: "" };

const ContactScreen = () => {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required(t("contact.errors.required")),
    email: Yup.string().email(t("contact.errors.emailInvalid")).required(t("contact.errors.required")),
    subject: Yup.string().required(t("contact.errors.required")),
    message: Yup.string().required(t("contact.errors.required")),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    setSubmitError(false);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...values }, { publicKey: PUBLIC_KEY });
      setShowToast(true);
      resetForm();
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl uppercase">{t("contact.title")}</h1>
        <p className="text-xl font-light w-3/4 mx-auto">{t("contact.intro")}</p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, touched, errors }) => (
          <Form className="w-3/4 mx-auto flex flex-col items-center gap-5" noValidate>
            <div className="flex justify-between gap-5 w-full">
              <div className="w-full">
                <Field
                  type="text"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  className={clsx(touched.name && errors.name && "border-kAppRed")}
                />
                <ErrorMessage name="name" component="p" className="text-kAppRed text-sm mt-1" />
              </div>
              <div className="w-full">
                <Field
                  type="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className={clsx(touched.email && errors.email && "border-kAppRed")}
                />
                <ErrorMessage name="email" component="p" className="text-kAppRed text-sm mt-1" />
              </div>
            </div>
            <div className="w-full">
              <Field
                type="text"
                name="subject"
                placeholder={t("contact.subjectPlaceholder")}
                className={clsx(touched.subject && errors.subject && "border-kAppRed")}
              />
              <ErrorMessage name="subject" component="p" className="text-kAppRed text-sm mt-1" />
            </div>
            <div className="w-full">
              <Field
                as="textarea"
                name="message"
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                className={clsx(touched.message && errors.message && "border-kAppRed")}
              />
              <ErrorMessage name="message" component="p" className="text-kAppRed text-sm mt-1" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-xl text-kAppBlack bg-kAppYellow px-12 py-2 rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? t("contact.sending") : t("contact.submit")}
            </button>
            {submitError && <p className="text-kAppRed">{t("contact.error")}</p>}
          </Form>
        )}
      </Formik>
      <Toast
        message={t("contact.success")}
        show={showToast}
        variant="success"
        onDismiss={() => setShowToast(false)}
      />
    </div>
  )
}

export default ContactScreen
