import Image from "next/image";
import Link from "next/link";

const SidebarOne = () => {
  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/booking.svg",
      title: "Manage Post",
      links: [
        { title: "Seller Post", href: "/admin/dashboard/post-status/seller" },
        { title: "Buyer Post", href: "/admin/dashboard/post-status/buyer" },
      ],
    },
    // {
    //   icon: "/img/dashboard/sidebar/booking.svg",
    //   title: "Manage Buyer",
    //   links: [
    //     { title: "All Buyer", href: "/admin/dashboard/manage-buyer/all" },
    //     { title: "Add Buyer", href: "/admin/dashboard/manage-buyer/add" },
    //     { title: "Recovery", href: "/admin/dashboard/manage-buyer/recovery" },
    //   ],
    // },
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        {/* Dashboard Link */}
        <div className="sidebar__item ">
          <Link
            href="/admin/dashboard"
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
                        <Link href={link.href} className="text-15">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Logout Link */}
        <div className="sidebar__item ">
          <Link
            href="/"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </Link>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default SidebarOne;
