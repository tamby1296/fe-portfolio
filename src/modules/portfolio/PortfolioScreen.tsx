import { PortfolioCard } from '../../components/PortfolioCard'
import eCommerceCover from "../../assets/e-commerce.jpg";

const PORTFOLIO = [
  {
    "img": eCommerceCover,
    "title": "E-Commerce",
    "description": "UI template for an e-commerce website. Including; Home, Products list, Product detail and Cart pages",
    "link": "https://fe-e-commerce.web.app/",
  }
]

const PortfolioScreen = () => {
  return (
    <div className="py-20 px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl">PORTFOLIO</h1>
        <p className="text-xl font-light w-3/4 mx-auto">
        I've worked closely with designers to translate Figma mockups into pixel-perfect interfaces and collaborated with back-end teams to integrate RESTful and GraphQL APIs. Projects include e-commerce platforms, financial dashboards, internal tools, and mobile-first web apps—each demanding a strong focus on user experience, code quality, and maintainability.
        </p>
        <br />
        <p className="text-xl font-light w-3/4 mx-auto">
        Below is an highlight of a few projects and past experience:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
      {
        PORTFOLIO.map( (p, i) => <PortfolioCard key={`${p.title}-${i}`} {...p}/>)
      }
      </div>
    </div>
  )
}

export default PortfolioScreen