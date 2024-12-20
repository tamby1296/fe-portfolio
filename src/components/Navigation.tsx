import { cva } from "class-variance-authority"
import { Link, useLocation } from "react-router-dom"

import { useState } from "react";

const NavigationVariant = cva("w-full inline-block text-xl text-center uppercase", {
  variants: {
    active: {
      true: "text-kAppYellow before:content-['<'] before:mr-2 after:content-['/>'] after:ml-2"
    }
  }
})

const MenuVariant = cva("fixed lg:translate-x-0 flex flex-col justify-between items-center h-[100vh] w-[75%] lg:w-1/4 flex-shrink-0 py-4 bg-kAppBlack transition-width duration-500", {
  variants: {
    collapsed: {
      true: "translate-x-0",
      false: "-translate-x-[100%]"
    }
  }
})

const Navigation = () => {
  const { pathname } = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <button className="block lg:hidden fixed top-4 left-4 z-10" onClick={() => setMenuToggle(prev => !prev)}>
        <div className="w-8 h-8 flex flex-col justify-around z-10">
          <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
          <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
          <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
        </div>
      </button>
      <nav className={MenuVariant({ collapsed: menuToggle })}>
        <h2 className="text-center text-[3.438rem] text-kAppYellow">TIA</h2>
        <ul className="flex flex-col gap-[30px]">
          <li>
            <Link to="/" className={NavigationVariant({ active: pathname === '/' })} onClick={ () => setMenuToggle(false)}>
            Home
            </Link>
          </li>
          <li>
            <Link to="/about-me" className={NavigationVariant({ active: pathname === '/about-me' })} onClick={ () => setMenuToggle(false)}>
            About me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={NavigationVariant({ active: pathname === '/portfolio' })} onClick={ () => setMenuToggle(false)}>
            Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={NavigationVariant({ active: pathname === '/contact' })} onClick={ () => setMenuToggle(false)}>
            Contact
            </Link>
          </li>
        </ul>
        <p className="text-xs font-extralight">&copy; 2024 Tamby Razafindralambo</p>
      </nav>
      <div className="w-1/4 flex-shrink-0 hidden lg:block"></div>
    </>
  )
}

export default Navigation