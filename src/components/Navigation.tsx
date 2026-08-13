import { cva } from "class-variance-authority";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

const NavigationVariant = cva(
  "w-full inline-block text-xl text-center uppercase",
  {
    variants: {
      active: {
        true: "text-kAppYellow before:content-['<'] before:mr-2 after:content-['/>'] after:ml-2",
      },
    },
  }
);

const MenuVariant = cva(
  "fixed lg:translate-x-0 flex flex-col justify-between items-center h-[100vh] w-full lg:w-1/4 flex-shrink-0 pt-16 py-4 bg-kAppBlack transition-width duration-500",
  {
    variants: {
      collapsed: {
        true: "translate-x-0",
        false: "-translate-x-[100%]",
      },
    },
  }
);

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/tamby1296",
    icon: (
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 2.86-.39c.97 0 1.95.13 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.65 5.33-5.18 5.61.41.36.77 1.06.77 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tamby-razafindralambo",
    icon: (
      <path d="M6.94 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5v11.75H3.2V8.75Zm6.4 0h3.35v1.6h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.32 4.18 5.34v6.6h-3.5v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1v5.95H9.6V8.75Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:rftt_tamby@yahoo.com",
    icon: (
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.24L19.8 6H4.2ZM20 7.9l-7.4 5.93a1 1 0 0 1-1.2 0L4 7.9v10.6h16V7.9Z" />
    ),
  },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="p-4 lg:hidden fixed top-0 z-10 bg-kAppBlack w-full">
        <button
          className="block"
          onClick={() => setMenuToggle((prev) => !prev)}
        >
          <div className="w-8 h-8 flex flex-col justify-around z-10">
            <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
            <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
            <div className="w-8 h-1 bg-kAppWhite rounded-[10px]"></div>
          </div>
        </button>
      </div>

      <nav className={MenuVariant({ collapsed: menuToggle })}>
        <h2 className="text-center text-[3.438rem] text-kAppYellow">TIA</h2>
        <ul className="flex flex-col gap-[30px]">
          <li>
            <Link
              to="/"
              className={NavigationVariant({ active: pathname === "/" })}
              onClick={() => setMenuToggle(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-me"
              className={NavigationVariant({
                active: pathname === "/about-me",
              })}
              onClick={() => setMenuToggle(false)}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={NavigationVariant({
                active: pathname === "/portfolio",
              })}
              onClick={() => setMenuToggle(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={NavigationVariant({ active: pathname === "/contact" })}
              onClick={() => setMenuToggle(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-5">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-kAppWhite hover:text-kAppYellow transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  {icon}
                </svg>
              </a>
            ))}
          </div>
          <p className="text-xs font-extralight">
            &copy; 2024 Tamby Razafindralambo
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
