"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import InputRange from "react-input-range";

// -------------------- Main Page --------------------
export default function Page() {
  const [filters, setFilters] = useState({});

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <div style={{ width: "25%" }}>
        <Sidebar onSearch={setFilters} />
      </div>
      <HotelsList filters={filters} />
    </div>
  );
}

// -------------------- Sidebar --------------------
const Sidebar = ({ onSearch }) => {
  const [searchCompany, setSearchCompany] = useState("");
  const [rocState, setRocState] = useState("");
  const [activity, setActivity] = useState("");
  const [gst, setGst] = useState("");
  const [compliance, setCompliance] = useState("");
  const [document, setDocument] = useState([]);
  const [companyAge, setCompanyAge] = useState(""); // in years
  const [priceRange, setPriceRange] = useState({ min: 5000, max: 100000 }); // default price range

  const handleSearch = () => {
    onSearch({
      searchCompany,
      rocState,
      activity,
      gst,
      compliance,
      document,
      companyAge,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  };

  const selectStyle = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: 8,
    border: "1px solid #ccc",
    outline: "none",
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    transition: "0.3s",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "16px 16px",
    cursor: "pointer",
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = "#3554d1";
    e.target.style.boxShadow = "0 2px 8px rgba(53, 84, 209, 0.2)";
  };

  const blurStyle = (e) => {
    e.target.style.borderColor = "#ccc";
    e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  };

  // Handle checkbox selection for Documents
  const handleDocumentChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDocument([...document, value]);
    } else {
      setDocument(document.filter((item) => item !== value));
    }
  };

  return (
    <div className="sidebar__item -no-border mt-40 mr-20">
      <div
        className="px-20 py-20 rounded-2"
        style={{ backgroundColor: "white" }}
      >

        {/* Search by Company Name */}
        <div className=" pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Search Company</h5>
          <input
            type="search"
            placeholder="Search Company"
            value={searchCompany}
            onChange={(e) => setSearchCompany(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 15px",
              borderRadius: 8,
              border: "1px solid #ccc",
              outline: "none",
              fontSize: 16,
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3554d1")}
          />
        </div>

        {/* Price Slider */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Price Range</h5>
          <PirceSlider
            onChange={(value) =>
              setPriceRange({ min: value.min, max: value.max })
            }
          />
        </div>

        {/* ROC State */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">ROC State</h5>
          <select
            value={rocState}
            onChange={(e) => setRocState(e.target.value)}
            name="rocState"
            style={selectStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          >
            <option value="">Select ROC State</option>
            <option value="Ahmedabad – Dadra & Nagar Haveli">
              Ahmedabad – Dadra & Nagar Haveli
            </option>
            <option value="Ahmedabad – Daman & Diu">
              Ahmedabad – Daman & Diu
            </option>
            <option value="Bangalore – Karnataka">Bangalore – Karnataka</option>
            <option value="Chandigarh – Chandigarh">
              Chandigarh – Chandigarh
            </option>
            <option value="Chandigarh – Haryana">Chandigarh – Haryana</option>
            <option value="Chandigarh – Himachal Pradesh">
              Chandigarh – Himachal Pradesh
            </option>
            <option value="Chandigarh – Punjab">Chandigarh – Punjab</option>
            <option value="Chennai – Tamil Nadu (except Coimbatore)">
              Chennai – Tamil Nadu (except Coimbatore)
            </option>
            <option value="Chennai – Andaman & Nicobar">
              Chennai – Andaman & Nicobar
            </option>
            <option value="Coimbatore – Tamil Nadu (Coimbatore region)">
              Coimbatore – Tamil Nadu (Coimbatore region)
            </option>
            <option value="Cuttack – Odisha">Cuttack – Odisha</option>
            <option value="Delhi – Delhi">Delhi – Delhi</option>
            <option value="Ernakulam – Kerala">Ernakulam – Kerala</option>
            <option value="Ernakulam – Lakshadweep">
              Ernakulam – Lakshadweep
            </option>
            <option value="Goa – Goa">Goa – Goa</option>
            <option value="Gwalior – Madhya Pradesh">
              Gwalior – Madhya Pradesh
            </option>
            <option value="Gwalior – Chhattisgarh">
              Gwalior – Chhattisgarh
            </option>
            <option value="Hyderabad – Andhra Pradesh">
              Hyderabad – Andhra Pradesh
            </option>
            <option value="Hyderabad – Telangana">Hyderabad – Telangana</option>
            <option value="Jaipur – Rajasthan">Jaipur – Rajasthan</option>
            <option value="Jammu – Jammu & Kashmir">
              Jammu – Jammu & Kashmir
            </option>
            <option value="Jammu – Ladakh">Jammu – Ladakh</option>
            <option value="Kanpur – Uttar Pradesh">
              Kanpur – Uttar Pradesh
            </option>
            <option value="Kanpur – Uttarakhand">Kanpur – Uttarakhand</option>
            <option value="Kolkata – West Bengal">Kolkata – West Bengal</option>
            <option value="Kolkata – Sikkim">Kolkata – Sikkim</option>
            <option value="Mumbai – Maharashtra (Mumbai region)">
              Mumbai – Maharashtra (Mumbai region)
            </option>
            <option value="Pune – Maharashtra (Pune region)">
              Pune – Maharashtra (Pune region)
            </option>
            <option value="Patna – Bihar">Patna – Bihar</option>
            <option value="Patna – Jharkhand">Patna – Jharkhand</option>
            <option value="Shillong – Arunachal Pradesh">
              Shillong – Arunachal Pradesh
            </option>
            <option value="Shillong – Assam">Shillong – Assam</option>
            <option value="Shillong – Manipur">Shillong – Manipur</option>
            <option value="Shillong – Meghalaya">Shillong – Meghalaya</option>
            <option value="Shillong – Mizoram">Shillong – Mizoram</option>
            <option value="Shillong – Nagaland">Shillong – Nagaland</option>
            <option value="Shillong – Tripura">Shillong – Tripura</option>
          </select>
        </div>

        {/* Business Category */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Business Category</h5>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            name="activity"
            style={selectStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          >
            <option value="">Select Business Activity</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Trading & Distribution">
              Trading & Distribution
            </option>
            <option value="IT & Software">IT & Software</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Infrastructure & Construction">
              Infrastructure & Construction
            </option>
            <option value="Logistics & Warehousing">
              Logistics & Warehousing
            </option>
            <option value="Hospitality, Travel & Tourism">
              Hospitality, Travel & Tourism
            </option>
            <option value="Healthcare & Life Sciences">
              Healthcare & Life Sciences
            </option>
            <option value="Education & Training">Education & Training</option>
            <option value="Energy & Utilities">Energy & Utilities</option>
            <option value="Agriculture & Food Processing">
              Agriculture & Food Processing
            </option>
            <option value="Media, Entertainment & Professional Services">
              Media, Entertainment & Professional Services
            </option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* company ages */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Company Age</h5>
          <select
            value={companyAge}
            onChange={(e) => setCompanyAge(e.target.value)}
            name="companyAge"
            style={selectStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          >
            <option value="">Select Age</option>
            <option value="2">2+ Years</option>
            <option value="5">5+ Years</option>
            <option value="10">10+ Years</option>
          </select>
        </div>

        {/* GST */}
        {/* <div className="sidebar__item pb-30">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: "10px",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: 16 }}>GST</label>
            <div style={{ display: "flex", gap: 20 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <input
                  type="radio"
                  name="gst"
                  value="yes"
                  checked={gst === "yes"}
                  onChange={(e) => setGst(e.target.value)}
                />
                Yes
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <input
                  type="radio"
                  name="gst"
                  value="no"
                  checked={gst === "no"}
                  onChange={(e) => setGst(e.target.value)}
                />
                No
              </label>
            </div>

            {gst && (
              <p style={{ marginTop: 10 }}>
                Selected: <strong>{gst.toUpperCase()}</strong>
              </p>
            )}
          </div>
        </div> */}

        {/* Compliance */}
        {/* <div className="sidebar__item pb-30">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: "10px",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: 16 }}>
              Compliance
            </label>
            <div style={{ display: "flex", gap: 20 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <input
                  type="radio"
                  name="compliance"
                  value="yes"
                  checked={compliance === "yes"}
                  onChange={(e) => setCompliance(e.target.value)}
                />
                Yes
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <input
                  type="radio"
                  name="compliance"
                  value="no"
                  checked={compliance === "no"}
                  onChange={(e) => setCompliance(e.target.value)}
                />
                No
              </label>
            </div>

            {compliance && (
              <p style={{ marginTop: 10 }}>
                Selected: <strong>{compliance.toUpperCase()}</strong>
              </p>
            )}
          </div>
        </div> */}

        {/* Documents */}
        {/* <div className="sidebar__item pb-30">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: 16 }}>
              Documents
            </label>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {["Docs Ready", "Fast Transfer", "Negotiable"].map((option) => (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: document.includes(option)
                      ? "2px solid #2563eb"
                      : "1px solid #d1d5db",
                    background: document.includes(option)
                      ? "#eff6ff"
                      : "#f9fafb",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={document.includes(option)}
                    onChange={handleDocumentChange}
                    style={{ accentColor: "#2563eb", width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: 14, color: "#111827" }}>
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {document.length > 0 && (
              <p style={{ marginTop: 12, fontSize: 14, color: "#374151" }}>
                Selected:{" "}
                <strong style={{ color: "#2563eb" }}>
                  {document.map((d) => d.toUpperCase()).join(", ")}
                </strong>
              </p>
            )}
          </div>
        </div> */}

        {/* Search Button */}
        <div className="row y-gap-20 pt-20">
          <div className="col-12">
            <button
              className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white"
              onClick={handleSearch}
            >
              <i className="icon-search text-20 mr-10" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----- price slider -----
const PirceSlider = ({ onChange }) => {
  const [price, setPrice] = useState({
    value: { min: 5000, max: 100000 },
  });

  const handleOnChange = (value) => {
    setPrice({ value });
    onChange && onChange(value); // send updated price to parent
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">Rs{price.value.min}</span> -
          <span className="js-upper mx-1">Rs{price.value.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={() => ``}
          minValue={0}
          maxValue={300000}
          value={price.value}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

// -------------------- Hotels List --------------------
const HotelsList = ({ filters }) => {
  const [sellers, setSellers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetchData(currentPage, filters);
    // alert(JSON.stringify(filters));
  }, [currentPage, filters]);

  const fetchData = async (page, filters = {}) => {
    try {
      const query = new URLSearchParams({
        page,
        limit: itemsPerPage,
        searchCompany: filters.searchCompany || "",
        rocState: filters.rocState || "",
        activity: filters.activity || "",
        gst: filters.gst || "",
        compliance: filters.compliance || "",
        document: filters.document || "",
        companyAge: filters.companyAge || "",
        minPrice: filters.minPrice || 0,
        maxPrice: filters.maxPrice || 1000000000,
      }).toString();

      const res = await fetch(
        `http://localhost:5000/api/sellers/getApprovedSellers?${query}`
      );
      const data = await res.json();
      setSellers(data?.data || []);
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching sellers:", error);
    }
  };

  return (
    <div style={{ flex: 1 }} className="mt-40">
      {!sellers.length ? (
        <p style={{ textAlign: "center", padding: 20, color: "#666" }}>
          No items found
        </p>
      ) : (
        sellers.map((item) => <SellerItem key={item.id} item={item} />)
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

// -------------------- Seller Item --------------------
const SellerItem = ({ item }) => (
  <div className="col-12 border-top-light pt-30">
    <div className="row x-gap-20 y-gap-20">
      <div className="col-md">
        <h3 className="text-18 lh-16 fw-500">
          Company: {item?.company} <br className="lg:d-none" /> ROC State{" "}
          {item?.roc_state}
        </h3>
        <p className="text-14 pt-10">{item?.location}</p>

        <div className="d-flex flex-wrap mt-15 gap-20">
          <InfoBlock title="Mobile" value={item?.mobile} />
          <InfoBlock title="GST" value={item?.gst} />
          <InfoBlock title="Category" value={item?.activity} />
        </div>

        <div className="text-14 text-green-2 lh-15 mt-10">
          <div className="fw-500">Description</div>
          <div>{item?.notes}</div>
        </div>

        {item?.tags && (
          <div className="row x-gap-10 y-gap-10 pt-20 mb-20">
            {JSON.parse(item?.tags || "[]").map((tag, index) => (
              <div
                key={index}
                className="mr-5 mt-1 col-auto border-light rounded-100 py-5 px-20 text-14 lh-14"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-md-auto text-right md:text-left">
        <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
          <div className="col-auto">
            <div className="text-14 lh-14 fw-500">Email</div>
            <div className="text-14 lh-14 text-light-1">{item?.email}</div>
          </div>
          <div className="col-auto">
            <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
              IN
            </div>
          </div>
        </div>

        <div>
          <div className="text-22 lh-12 fw-600 mt-5">{item?.price}/- Rs</div>
          <Link
            href={`/hotel-single-v2/${item?.id}`}
            className="button -md -dark-1 bg-blue-1 text-white mt-24"
          >
            See Availability <div className="icon-arrow-top-right ml-15"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// -------------------- Info Block --------------------
const InfoBlock = ({ title, value }) => (
  <div className="text-14 lh-15 mr-15">
    <div className="fw-500">{title}</div>
    <div className="text-light-1">{value}</div>
  </div>
);

// -------------------- Pagination --------------------
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="border-top-light mt-30 pt-30">
    <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
      <div className="col-auto md:order-1">
        <button
          className="button -blue-1 size-40 rounded-full border-light"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <i className="icon-chevron-left text-12" />
        </button>
      </div>

      <div className="col-md-auto md:order-3">
        <div className="row x-gap-20 y-gap-20 items-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              key={i + 1}
              className={`size-40 flex-center rounded-full cursor-pointer ${
                currentPage === i + 1 ? "bg-dark-1 text-white" : ""
              }`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="col-auto md:order-2">
        <button
          className="button -blue-1 size-40 rounded-full border-light"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <i className="icon-chevron-right text-12" />
        </button>
      </div>
    </div>
  </div>
);
