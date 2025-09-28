"use client";

import CompanyXchangeHeader from "@/components/companyXchange/common/CompanyXchangeHeader";
import ComapnyXchangeFooter from "@/components/companyXchange/common/Footer";

export default function UserDashboardLayout({ children }) {
  return (
    <div className="">
      {/* Persistent Header */}
      <CompanyXchangeHeader />
      <div className="">
        <div className="dashboard__content bg-light-2">
          {children}
          <ComapnyXchangeFooter />
        </div>
      </div>
    </div>
  );
}

