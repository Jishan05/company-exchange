'use client'

import { hotelsData } from "../../../data/hotels";
import Link from "next/link";

// 🎨 tag color mapping
const tagColors = {
  "breakfast included": "bg-dark-1 text-white",
  "best seller": "bg-blue-1 text-white",
  "-25% today": "bg-brown-1 text-white",
  "top rated": "bg-yellow-1 text-dark-1",
};

const HotelProperties = () => {
  return (
    <>
      {hotelsData.slice(0, 7).map((item) => {
        // pick a class for badge
        const tagClass =
          tagColors[item?.tag?.toLowerCase()] || "bg-light text-dark-1";

        return (
          <div className="col-12" key={item?.id}>
            <div className="border-top-light pt-30">
              <div className="row x-gap-20 y-gap-20">
                
                {/* Middle Content */}
                <div className="col-md">
                  <div className="col-md-4">
                     {/* ✅ Tag Badge Above Title */}
                  {item?.tag && (
                    <div
                      className={`mb-10 inline-block py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${tagClass}`}
                    >
                      {item?.tag}
                    </div>
                  )}
                  </div>
                 

                  <h3 className="text-18 lh-16 fw-500">
                    {item?.title}
                    <br className="lg:d-none" /> {item?.location}
                    <div className="d-inline-block ml-10">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="icon-star text-10 text-yellow-2"
                        ></i>
                      ))}
                    </div>
                  </h3>

                  <div className="text-14 lh-15 mt-20">
                    <div className="fw-500">Objects</div>
                    <div className="text-light-1">Manufacturing</div>
                  </div>

                  <div className="text-14 text-green-2 lh-15 mt-10">
                    <div className="fw-500">ROC - Uttar Pradesh / Delhi</div>
                    <div>Start the operation before - 31/03/2024</div>
                  </div>

                  <div className="row x-gap-10 y-gap-10 pt-20">
                    {["GST", "ROC", "IT Returns"].map((label, i) => (
                      <div className="col-auto" key={i}>
                        <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End .col-md */}

                {/* Right Column */}
                <div className="col-md-auto text-right md:text-left mt-30">
                  <div>
                    <div className="text-22 lh-12 fw-600 mt-5">Budget</div>
                    <div className="text-14 text-light-1 mt-5">
                      Depend Upon Company
                    </div>

                    <Link
                      href="#"
                      className="button -md -dark-1 bg-blue-1 text-white mt-24"
                    >
                      Get Availability{" "}
                      <div className="icon-arrow-top-right ml-15"></div>
                    </Link>
                  </div>
                </div>
                {/* End .col-md-auto */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HotelProperties;
