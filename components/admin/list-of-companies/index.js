import SidebarOne from "@/components/dashboard/seller-dashboard/add-post/components/Sidebar";
import HeaderDashBoardTwo from "@/components/header/dashboard-header-two";
import Footer from "@/components/dashboard/dashboard/common/Footer";
import BookingTable from "./components/BookingTable";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-light-2">
        {/* Page Header */}
        <div className="row y-gap-20 justify-between items-end mt-30 pb-30 lg:pb-30 md:pb-30">
          <div className="col-auto">
            <h1 className="text-30 lh-14 fw-600">Admin Company List</h1>
            <div className="text-15 text-light-1">
              Below is the complete list of companies registered on CompanyXchange.
              You can review company details, verify their status, and manage their access.
              This dashboard provides admins full control to monitor, approve or restrict
              company profiles for a secure and smooth platform experience.
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto"></div>
        </div>
        {/* End .row */}

        {/* Company Table Section */}
        <div className="mt-20" style={{height: '100vh'}}>
          {/* <BookingTable /> */}
        </div>
      </div>
    </>
  );
};

export default Index;
