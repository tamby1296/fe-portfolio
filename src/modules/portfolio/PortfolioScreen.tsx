import { useTranslation } from "react-i18next";
import { PortfolioCard } from "../../components/PortfolioCard";
import eCommerceCover from "../../assets/e-commerce.jpg";
import ePOSCover from "../../assets/food-epos.jpg";

const PortfolioScreen = () => {
  const { t } = useTranslation();

  const PORTFOLIO = [
    {
      img: eCommerceCover,
      title: t("portfolio.items.eCommerce.title"),
      description: t("portfolio.items.eCommerce.description"),
      link: "https://fe-e-commerce.web.app/",
    },
    {
      img: ePOSCover,
      title: t("portfolio.items.epos.title"),
      description: t("portfolio.items.epos.description"),
      link: "https://food-epos.web.app/",
    },
  ];

  return (
    <div className="px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl uppercase">{t("portfolio.title")}</h1>
        <p className="text-xl font-light w-3/4 mx-auto">
          {t("portfolio.intro1")}
        </p>
        <br />
        <p className="text-xl font-light w-3/4 mx-auto">
          {t("portfolio.intro2")}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {PORTFOLIO.map((p, i) => (
          <PortfolioCard key={`${p.title}-${i}`} {...p} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioScreen;
