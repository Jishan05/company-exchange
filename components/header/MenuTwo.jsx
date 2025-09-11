import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";

import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuTwo = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/home_11">
            <span className="mr-10">Home</span>
          </a>
        </li>
        {/* End home page menu */}

        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current":'menu-item-has-children -has-mega-menu'}>
          <a href="/about">
            <span className="mr-10">About Us</span>
          </a>
         
        </li>
        {/* End categories menu items */}


        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTwo;
