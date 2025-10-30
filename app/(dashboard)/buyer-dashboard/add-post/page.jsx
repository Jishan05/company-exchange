"use client";

import React, { useEffect } from "react";
import SidebarOne from "@/components/dashboard/seller-dashboard/add-post/components/Sidebar";
import Footer from "@/components/dashboard/dashboard/common/Footer";
import HeaderDashBoardTwo from "@/components/header/Dashboard-header-two";
import PostForm from "@/components/dashboard/buyer-dashboard/add-post/components/PostForm";
import { useSelector } from "react-redux";



export default function page() {
  const user = useSelector((state) => state.auth.user);

  // Show alert once when user data is available
    useEffect(() => {
      alert(JSON.stringify(user, null, 2)); // Pretty print JSON
    }, [user]);

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
                <h1 className="text-30 lh-14 fw-600">
                  {user ? `Buyer, ${user.fullName}` : "Seller Posting"}
                </h1>
                <div className="text-15 text-light-1">
                  follow the platform’s terms and conditions.
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
