"use client";

import SidebarOne from "@/components/dashboard/seller-dashboard/add-post/components/Sidebar";
import Footer from "@/components/dashboard/dashboard/common/Footer";
import UserHeaderDashboard from "../../../components/user-dashboard/common/UserHeaderDashBoard";

export default function UserDashboardLayout({ children }) {
  return (
    <div className="dashboard">
      {/* Persistent Header */}
      <UserHeaderDashboard />

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
