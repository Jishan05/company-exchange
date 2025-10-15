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
} from "../../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/admin/dashboard">
            <span className="mr-10">Dashboard</span>
          </Link>
        </li>

        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/admin/post">
            <span className="mr-10">Seller Post</span>
          </Link>
        </li>
        {/* End home page menu */}

        <li
          className={
            isActiveParent
              ? "menu-item-has-children -has-mega-menu current"
              : "menu-item-has-children -has-mega-menu"
          }
        >
          <Link href="/admin/post/buyer">
            <span className="mr-10">Buyer Post</span>
          </Link>
        </li>
        {/* End categories menu items */}
      </ul>
    </nav>
  );
};

export default MainMenu;
