"use client"

import { logout } from "@/features/auth/loginSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SidebarOne = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // clear Redux state
    // localStorage.removeItem("token"); // remove token
    window.location.href = "/login"; // redirect to login page
  };


  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/booking.svg",
      title: "Manage Seller",
      links: [
        { title: "All Seller", href: "#" },
        { title: "Add Seller", href: "#" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/booking.svg",
      title: "Manage Buyer",
      links: [
        { title: "All Buyer", href: "#" },
        { title: "Add Buyer", href: "#" },
        { title: "Recovery", href: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <Link
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </Link>
        </div>
        {/* End accordion__item */}

        {sidebarData.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#sidebarItem${index}`}
                >
                  <div className="sidebar__button col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt="image"
                        className="mr-10"
                      />
                      {item.title}
                    </div>
                    <div className="icon-chevron-sm-down text-7" />
                  </div>
                </div>
                <div
                  id={`sidebarItem${index}`}
                  className="collapse"
                  data-bs-parent="#vendorSidebarMenu"
                >
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href} className="text-15">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="sidebar__item">
          <button
            onClick={handleLogout}
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="Logout Icon"
              className="mr-15"
            />
            Logout
          </button>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default SidebarOne;
