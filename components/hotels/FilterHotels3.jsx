"use client";

import React, { useState } from "react";
import FilterHotelsTabs from "./filter-tabs/FilterHotelsTabs";
import FilterHotels from "./FilterHotels";

export default function FilterHotels3() {
  const [filterOption, setFilterOption] = useState("hotel");
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Best Seller</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Interdum et malesuada fames ac ante ipsum
              </p>
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto tabs -pills-2 ">
            <FilterHotelsTabs
              filterOption={filterOption}
              setFilterOption={setFilterOption}
            />
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="relative overflow-hidden pt-40 sm:pt-20">
          <div className="row y-gap-30">
            <FilterHotels filterOption={filterOption} />
          </div>
        </div>
        {/* End relative */}
      </div>
    </section>
  );
}
