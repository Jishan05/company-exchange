import Image from "next/image";
import Link from "next/link";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const CategoriesMegaMenu = ({setIsActiveParent}) => {
  const pathname = usePathname();
  const [activeNestedMenu, setActiveNestedMenu] = useState(0)

  const itemList = [
    "Hotel",
    "Tour",
    "Activity",
    "Holiday Rentals",
    "Car",
    "Cruise",
    "Flights",
  ];


 useEffect(() => {

  categorieMegaMenuItems.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{
      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true) 
            setActiveNestedMenu(megaMenu.id - 1)           
          } 
                
        })
      }))
    }))
  }))
   
 }, [])
 
  return (
    <div className="tabs -underline-2 js-tabs">
      <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
        {itemList.map((item, i) => (
          <div className="col-auto" key={i} onClick={()=>setActiveNestedMenu(i)}>
            <button className={`tabs__button text-light-1 fw-500 js-tabs-button ${activeNestedMenu == i ? 'nested-menu-active':'nested-menu-inactive'} `}>
              {item}
            </button>
          </div>
        ))}
      </div>
      {/* End tab-controls */}

      <div className="tabs__content js-tabs-content">
      
          <div className={'react-tabs__tab-panel--selected'}>
            {categorieMegaMenuItems[activeNestedMenu]?.menuCol?.map((megaCol, i) => (
              <ul className="mega__content" key={i}>
                <li className="mega__grid">
                  {megaCol?.menuItems?.map((item) => (
                    <div className="mega__item" key={item.id}>
                      <div className="text-15 fw-500">{item.title}</div>
                      <div className="y-gap-5 text-15 pt-5">
                        {item?.menuList?.map((list, i) => (
                          <div
                            key={i}
                            className={
                              isActiveLink(list.routePath, pathname)
                                ? "current"
                                : ""
                            }
                          >
                            <Link href={list.routePath}>{list.name}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </li>
                {/* End mega menu list left */}

                <li className="mega__image d-flex relative">
                  <Image
                    width={270}
                    height={300}
                    src={megaCol?.megaBanner}
                    alt="image"
                    className="rounded-4 js-lazy"
                  />

                  <div className="absolute w-full h-full px-30 py-24">
                    <div className="text-22 fw-500 lh-15 text-white">
                      {megaCol?.title}
                    </div>
                    <Link
                      href={megaCol?.btnRoute}
                      className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                    >
                      {megaCol?.btnText}
                    </Link>
                  </div>
                </li>
                {/* End mega menu right images */}
              </ul>
            ))}
          </div>

      </div>
      {/* End tab_content */}
    </div>
  );
};

export default CategoriesMegaMenu;
