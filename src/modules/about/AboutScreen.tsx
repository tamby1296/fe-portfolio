import { useTranslation } from "react-i18next";

const AboutScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl uppercase">{t("about.title")}</h1>
        <p className="text-xl font-light">{t("about.intro")}</p>
      </div>
      <div className="flex flex-col lg:flex-row mb-14 items-start">
        <img
          src="/img/pp.jpg"
          alt={t("about.name")}
          className="lg:mx-12 rounded-xl flex-grow flex-shrink w-full lg:max-w-[400px]"
        />
        <div className="flex flex-col justify-center items-start w-full lg:w-4/6 pt-10 lg:pt-0 flex-shrink">
          <h2 className="text-2xl text-kAppYellow uppercase mb-5">
            {t("about.name")}
          </h2>
          <h3 className="text-xl uppercase mb-4">{t("about.role")}</h3>
          <p className="text-lg font-light mb-10">
            {t("about.bio")}
            <br className="mb-4" />
            {t("about.bioCta")}
          </p>
          <button
            type="button"
            className="text-xl text-kAppBlack bg-kAppYellow px-4 py-2 rounded-lg"
          >
            <a
              href="https://drive.google.com/file/d/1TOqlXVI1iQE_ts7Je4p0PUWky-1r7YFQ/view"
              target="_blank"
            >
              {t("about.downloadResume")}
            </a>
          </button>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl text-kAppYellow">{t("about.stackTitle")}</h3>
        <div className="flex flex-wrap gap-10 pt-5 [&>img]:max-w-[70px] justify-evenly lg:justify-start">
          <img src="/img/html.png" alt="html-img" />
          <img src="/img/css.png" alt="css-img" />
          <img src="/img/javaScript.png" alt="js-img" />
          <img src="/img/typescript.png" alt="ts-img" />
          <img src="/img/reactJS.png" alt="reactJs-img" />
          <img src="/img/next.png" alt="next-img" />
          <img src="/img/tailwind.png" alt="tailwind-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
