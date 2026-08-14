import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Toast from "../../components/Toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const ContactScreen = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [showToast, setShowToast] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);

  const handleInvalid = () => setWasValidated(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setWasValidated(true);
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus("success");
      setShowToast(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col justify-center px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl uppercase">{t("contact.title")}</h1>
        <p className="text-xl font-light w-3/4 mx-auto">{t("contact.intro")}</p>
      </div>
      <form
        className={`w-3/4 mx-auto flex flex-col items-center gap-5${wasValidated ? " was-validated" : ""}`}
        onSubmit={handleSubmit}
        onInvalidCapture={handleInvalid}
      >
        <div className="flex justify-between gap-5 w-full">
          <input type="text" placeholder={t("contact.namePlaceholder")} name="name" required />
          <input type="email" placeholder={t("contact.emailPlaceholder")} name="email" required />
        </div>
        <input type="text" placeholder={t("contact.subjectPlaceholder")} name="subject" required />
        <textarea placeholder={t("contact.messagePlaceholder")} rows={5} name="message" required />
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-xl text-kAppBlack bg-kAppYellow px-12 py-2 rounded-lg disabled:opacity-50"
        >
          {status === "sending" ? t("contact.sending") : t("contact.submit")}
        </button>
        {status === "error" && <p className="text-red-600">{t("contact.error")}</p>}
      </form>
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
