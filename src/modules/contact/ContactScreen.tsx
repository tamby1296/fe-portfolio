import { useTranslation } from "react-i18next";

const CONTACT_EMAIL = "rftt_tamby@yahoo.com";

const ContactScreen = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const subject = formData.get("subject")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <div className="flex flex-col justify-center px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl uppercase">{t("contact.title")}</h1>
        <p className="text-xl font-light w-3/4 mx-auto">{t("contact.intro")}</p>
      </div>
      <form className="w-3/4 mx-auto flex flex-col items-center gap-5" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-5 w-full">
          <input type="text" placeholder={t("contact.namePlaceholder")} name="name" />
          <input type="email" placeholder={t("contact.emailPlaceholder")} name="email" />
        </div>
        <input type="text" placeholder={t("contact.subjectPlaceholder")} name="subject" />
        <textarea placeholder={t("contact.messagePlaceholder")} rows={5} name="message" />
        <button type="submit" className="text-xl text-kAppBlack bg-kAppYellow px-12 py-2 rounded-lg">{t("contact.submit")}</button>
      </form>
    </div>
  )
}

export default ContactScreen
