"use client";

import { useEffect } from "react";
import { hotelsData } from "../../../data/hotels";
import Link from "next/link";
import { Item } from "react-photoswipe-gallery";

// 🎨 tag color mapping
const tagColors = {
  "breakfast included": "bg-dark-1 text-white",
  "best seller": "bg-blue-1 text-white",
  "-25% today": "bg-brown-1 text-white",
  "top rated": "bg-yellow-1 text-dark-1",
};

const HotelProperties = ({ list }) => {
  useEffect(() => {
    alert(JSON.stringify(list, null, 2));
  }, [list]);

  return (
    <>
      {list.length === 0 ? (
        <div>
          <h1>No Data found.</h1>
        </div>
      ) : (
        list.map((data) => (
          <div
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: 1 }}>
              {/* Title */}
              <h3
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#222",
                }}
              >
                {data.company}
              </h3>

              {/* Incorporation */}
              <p
                style={{ margin: "0 0 6px 0", fontSize: "14px", color: "#555" }}
              >
                <strong>Incorporated:</strong>{" "}
                {new Date(data.incorporation).toLocaleDateString()}
              </p>

              {/* ROC + Activity */}
              <p
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "14px",
                  color: "#28a745",
                }}
              >
                ROC - {data.roc_state}
              </p>
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                Activity: <strong>{data.activity}</strong>
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {data.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      border: "1px solid #ddd",
                      padding: "4px 10px",
                      fontSize: "12px",
                      borderRadius: "20px",
                      color: "#444",
                      background: "#fafafa",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div style={{ textAlign: "right" }}>
              <h4
                style={{ margin: "0 0 6px 0", fontSize: "16px", color: "#333" }}
              >
                Budget
              </h4>
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "14px",
                  color: "#777",
                }}
              >
                {/* price for seller */}
                {data.price &&
                  (data.price === "0"
                    ? "Depend Upon Company"
                    : `₹${Number(data.price).toLocaleString()}`)}

                {/* budget for buyer */}
                {data.budget &&
                  (data.budget === ""
                    ? "Depend Upon Company"
                    : `₹${data.budget}`)}
              </p>
              <button
                style={{
                  backgroundColor: "#2c62d6",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Get Availability →
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default HotelProperties;

// {list.lenght === 0 ? (
//         <div>
//           <h1>No Data found.</h1>
//         </div>
//       ) : (
//         list.map((item) => (
//           <div>
//             <h1>
//               {item.company}
//             </h1>
//           </div>
//         ))
//       )}

// {
//   hotelsData.slice(0, 7).map((item) => {
//     // pick a class for badge
//     const tagClass =
//       tagColors[item?.tag?.toLowerCase()] || "bg-light text-dark-1";

//     return (
//       <div className="col-12" key={item?.id}>
//         <div className="border-top-light pt-30">
//           <div className="row x-gap-20 y-gap-20">
//             {/* Middle Content */}
//             <div className="col-md">
//               <div className="col-md-4">
//                 {/* ✅ Tag Badge Above Title */}
//                 {/* {item?.tag && (
//                     <div
//                       className={`mb-10 inline-block py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${tagClass}`}
//                     >
//                       {item?.tag}
//                     </div>
//                   )} */}
//               </div>

//               <h3 className="text-18 lh-16 fw-500">
//                 {item?.title}
//                 <br className="lg:d-none" /> {item?.location}
//                 <div className="d-inline-block ml-10">
//                   {[...Array(5)].map((_, i) => (
//                     <i key={i} className="icon-star text-10 text-yellow-2"></i>
//                   ))}
//                 </div>
//               </h3>

//               <div className="text-14 lh-15 mt-20">
//                 <div className="fw-500">Objects</div>
//                 <div className="text-light-1">Manufacturing</div>
//               </div>

//               <div className="text-14 text-green-2 lh-15 mt-10">
//                 <div className="fw-500">ROC - Uttar Pradesh / Delhi</div>
//                 <div>Start the operation before - 31/03/2024</div>
//               </div>

//               <div className="row x-gap-10 y-gap-10 pt-20">
//                 {["GST", "ROC", "IT Returns"].map((label, i) => (
//                   <div className="col-auto" key={i}>
//                     <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
//                       {label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* End .col-md */}

//             {/* Right Column */}
//             <div className="col-md-auto text-right md:text-left mt-30">
//               <div>
//                 <div className="text-22 lh-12 fw-600 mt-5">Budget</div>
//                 <div className="text-14 text-light-1 mt-5">
//                   Depend Upon Company
//                 </div>

//                 <Link
//                   href="#"
//                   className="button -md -dark-1 bg-blue-1 text-white mt-24"
//                 >
//                   Get Availability{" "}
//                   <div className="icon-arrow-top-right ml-15"></div>
//                 </Link>
//               </div>
//             </div>
//             {/* End .col-md-auto */}
//           </div>
//         </div>
//       </div>
//     );
//   });
// }
