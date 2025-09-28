
import React from "react";
import DashboardPage from "../../../../components/admin/list-of-companies";

export const metadata = {
  title: "Admin || Company Xchange",
  description: "Company Xchange - Admin Dashboard ",
};

export default function page() {
  return (
    <>
      <DashboardPage />
    </>
  );
}