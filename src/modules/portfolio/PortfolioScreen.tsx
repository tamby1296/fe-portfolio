import { PortfolioCard } from '../../components/PortfolioCard'
import eCommerceCover from "../../assets/e-commerce.jpg";

const PORTFOLIO = [
  {
    "img": eCommerceCover,
    "title": "E-Commerce",
    "link": "https://fe-e-commerce.web.app/",
  }
]

const PortfolioScreen = () => {
  return (
    <div className="py-20 px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl">PORTFOLIO</h1>
        <p className="text-xl font-light w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet laboriosam ipsa quibusdam fuga architecto perspiciatis voluptas, iste animi quo enim recusandae provident possimus corporis repellat qui. Eligendi, sit quibusdam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque labore aperiam excepturi dignissimos officia ipsa. Iure aut illo rerum ducimus maiores, dolore omnis, facere itaque odit magni esse dolores sequi!</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
      {
        PORTFOLIO.map( (p, index) => <PortfolioCard key={index} {...p}/>)
      }
      </div>
    </div>
  )
}

export default PortfolioScreen