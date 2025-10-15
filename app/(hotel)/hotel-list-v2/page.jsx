"use client";

import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v2/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/hotel-list-v2/HotelProperties";
import Pagination from "@/components/hotel-list/common/Pagination";
import Sidebar from "@/components/hotel-list/hotel-list-v2/Sidebar";
import { useEffect, useState } from "react";

const index = () => {
  const [activeList, setActiveList] = useState("Seller");
  const [sellerList, setSellerList] = useState([]);
  const [buyerList, setBuyerList] = useState([]);

  const handleClick = (val) => {
    setActiveList(val);
  };

  const fetchSellersData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/sellers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setSellerList(data)
      } else {
        console.log('err', data.error);
        alert(data.error || "Invalid phone number or password");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchBuyersData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/buyers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setBuyerList(data)
      } else {
        alert(data.error || "Invalid phone number or password");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchSellersData()
    fetchBuyersData()
  }, [activeList]);

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Companies
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter list={activeList === 'Seller' ? sellerList : buyerList} onClick={handleClick} />
              <h1>{activeList}</h1>
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <HotelProperties list={activeList === 'Seller' ? sellerList : buyerList} />
              </div>
              {/* End .row */}
              <Pagination />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
