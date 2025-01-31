import React from "react";

interface IPortfolioCardProps {
  img: string;
  link: string;
  title: string;
  description?: string;
}

export const PortfolioCard: React.FC<IPortfolioCardProps> = ({ img, link, title, description}) => {
  return (
    <div className="lg:w-1/3 flex-shrink p-2 relative overflow-hidden">
      <a href={link} target="_blank" rel="noreferer noopener" className="group w-full">
        <img src={img} alt={title} className="w-full h-full rounded-xl flex-grow object-cover" />
        <div className="translate-y-[100%] transition duration-500 group-hover:translate-y-0 text-center mx-auto absolute top-0 bg-kAppGrey bg-opacity-80 w-full h-full p-2">
          <h1 className="text-2xl text-kAppYellow">{title}</h1>
          <p className="text-xl font-light">{description}</p>
        </div>
      </a>
    </div>
  )
}
