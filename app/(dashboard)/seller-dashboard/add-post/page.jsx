import React from "react";
import SidebarOne from "@/components/dashboard/seller-dashboard/add-post/components/Sidebar";
import Footer from "@/components/dashboard/dashboard/common/Footer";
import HeaderDashBoardTwo from "@/components/header/dashboard-header-two";
import PostForm from "@/components/dashboard/seller-dashboard/add-post/components/PostForm";

export const metadata = {
  title: "Vendor Add Post || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <HeaderDashBoardTwo />      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <SidebarOne />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Seller Posting</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
             <PostForm />
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
}
