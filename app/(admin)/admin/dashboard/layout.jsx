"use client";

import Footer from "@/components/dashboard/dashboard/common/Footer";
import SidebarOne from "@/components/admin/common/SidebarOne";
import HeaderDashBoardTwo from "../../../../components/admin/common/HeaderDashBoardTwo";

export default function UserDashboardLayout({ children }) {
  return (
    <div className="dashboard">
      {/* Persistent Header */}
      <HeaderDashBoardTwo />

      <div className="dashboard__sidebar bg-white scroll-bar-1">
        <SidebarOne />
      </div>

      <div className="dashboard__main">
        <div className="dashboard__content bg-light-2">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
