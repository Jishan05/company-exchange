import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
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
          <a href="#">
            <span className="mr-10">Seller Posting</span>
          </a>
        </li>
        {/* End home page menu */}

 <li className={pathname === "#" ? "current" : ""}>
          <Link href="#">Buyer Posting</Link>
        </li>
       
        {/* End categories menu items */}

        <li className={pathname === "#" ? "current" : ""}>
          <Link href="#">Post Status</Link>
        </li>
        {/* End Destinatinos single menu */}


        <li className={pathname === "#" ? "current" : ""}>
          <Link href="#">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
