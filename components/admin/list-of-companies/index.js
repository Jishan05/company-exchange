import SidebarOne from "@/components/dashboard/seller-dashboard/add-post/components/Sidebar";
import HeaderDashBoardTwo from "@/components/header/dashboard-header-two";
import Footer from "@/components/dashboard/dashboard/common/Footer";
import BookingTable from "./components/BookingTable";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="">
        <div className="bg-light-2">
          <div className="row y-gap-20 justify-between items-end mt-30 pb-30 lg:pb-30 md:pb-30">
            <div className="col-auto">
              <h1 className="text-30 lh-14 fw-600"> Admin Company List</h1>
              <div className="text-15 text-light-1">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Latest Companies{" "}
                <div className="icon-arrow-top-right ml-15"></div>
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <BookingTable />
            {/* End tabs */}
          </div>

          
        </div>
        {/* End .dashboard__content */}
      </div>
    </>
  );
};

export default index;
