import { useTranslation } from "react-i18next";

const ErrorScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center gap-2 text-center">
      <h1 className="text-3xl uppercase text-kAppYellow">{t("error.title")}</h1>
      <p className="text-3xl">{t("error.message")}</p>
      <a href="/" className="text-xl text-kAppYellow underline">
        {t("error.backHome")}
      </a>
    </div>
  )
}

export default ErrorScreen
