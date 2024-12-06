import { cva } from "class-variance-authority"
import { Link, useLocation } from "react-router-dom"

const NavigationVariant = cva("w-full inline-block text-xl text-center uppercase", {
  variants: {
    active: {
      true: "text-kAppYellow before:content-['<'] before:mr-2 after:content-['/>'] after:ml-2"
    }
  }
})

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col justify-between items-center h-[100vh] w-1/4 flex-shrink-0 py-4 bg-kAppBlack">
      <h2 className="text-center text-[3.438rem] text-kAppYellow">TIA</h2>
      <ul className="flex flex-col gap-[30px]">
        <li>
          <Link to="/" className={NavigationVariant({ active: pathname === '/' })}>
          Home
          </Link>
        </li>
        <li>
          <Link to="/about-me" className={NavigationVariant({ active: pathname === '/about-me' })}>
          About me
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={NavigationVariant({ active: pathname === '/portfolio' })}>
          Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={NavigationVariant({ active: pathname === '/contact' })}>
          Contact
          </Link>
        </li>
      </ul>
      <p className="text-xs font-extralight">&copy; 2024 Tamby Razafindralambo</p>
    </nav>
  )
}

export default Navigation