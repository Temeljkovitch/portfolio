import { links } from "../data";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const themes = {
  light: "light",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === light ? dark : light;
    console.log(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav>
      <div className="mx-auto max-w-7xl pr-6 navbar align-element">
        <div className="navbar-start">
          <h2 className="hidden lg:flex text-3xl font-bold text-sky-600">
            Web&nbsp;<span className="text-sky-600">Dev</span>
          </h2>
          {/* Dropdown menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="h-8 w-8" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a className="capitalize text-lg" href={link.href}>
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="capitalize text-lg font-semibold"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate hover:scale-110 hover:text-sky-600 duration-300">
            <input type="checkbox" onChange={handleTheme} />
            <FaSun className="swap-on h-7 w-7" />
            <FaMoon className="swap-off h-7 w-7" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
