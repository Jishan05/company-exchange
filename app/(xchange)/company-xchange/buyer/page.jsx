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
  const [tag, setTag] = useState([]);
  const [companyAge, setCompanyAge] = useState("");
  const [budget, setBudget] = useState("");

  // -------------------- Styles --------------------
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "16px 16px",
    cursor: "pointer",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#3554d1";
    e.target.style.boxShadow = "0 2px 8px rgba(53, 84, 209, 0.2)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#ccc";
    e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  };

  // -------------------- Handlers --------------------
  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) setTag([...tag, value]);
    else setTag(tag.filter((t) => t !== value));
  };

  const handleSearch = () => {
    onSearch({
      searchCompany,
      rocState,
      activity,
      gst,
      tag,
      companyAge,
      budget,
    });
  };

  // -------------------- Options --------------------
  const rocOptions = [
    "Ahmedabad – Dadra & Nagar Haveli",
    "Ahmedabad – Daman & Diu",
    "Bangalore – Karnataka",
    "Chandigarh – Chandigarh",
    "Chandigarh – Haryana",
    "Chandigarh – Himachal Pradesh",
    "Chandigarh – Punjab",
    "Chennai – Tamil Nadu (except Coimbatore)",
    "Chennai – Andaman & Nicobar",
    "Coimbatore – Tamil Nadu (Coimbatore region)",
    "Cuttack – Odisha",
    "Delhi – Delhi",
    "Ernakulam – Kerala",
    "Ernakulam – Lakshadweep",
    "Goa – Goa",
    "Gwalior – Madhya Pradesh",
    "Gwalior – Chhattisgarh",
    "Hyderabad – Andhra Pradesh",
    "Hyderabad – Telangana",
    "Jaipur – Rajasthan",
    "Jammu – Jammu & Kashmir",
    "Jammu – Ladakh",
    "Kanpur – Uttar Pradesh",
    "Kanpur – Uttarakhand",
    "Kolkata – West Bengal",
    "Kolkata – Sikkim",
    "Mumbai – Maharashtra (Mumbai region)",
    "Pune – Maharashtra (Pune region)",
    "Patna – Bihar",
    "Patna – Jharkhand",
    "Shillong – Arunachal Pradesh",
    "Shillong – Assam",
    "Shillong – Manipur",
    "Shillong – Meghalaya",
    "Shillong – Mizoram",
    "Shillong – Nagaland",
    "Shillong – Tripura",
  ];

  const activityOptions = [
    "Manufacturing",
    "Information Technology",
    "Trading & Distribution",
    "IT & Software",
    "Financial Services",
    "Real Estate",
    "Infrastructure & Construction",
    "Logistics & Warehousing",
    "Hospitality, Travel & Tourism",
    "Healthcare & Life Sciences",
    "Education & Training",
    "Energy & Utilities",
    "Agriculture & Food Processing",
    "Media, Entertainment & Professional Services",
    "Others",
  ];

  const companyAgeOptions = [
    { value: "<1", label: "Less than 1 year" },
    { value: "1-3", label: "1–3 years" },
    { value: "3-5", label: "3–5 years" },
    { value: "5+", label: "5+ years" },
  ];

  const tagsList = ["Immediate Deal", "Compliances Done", "Docs Ready"];

  // -------------------- Render --------------------
  return (
    <div className="sidebar__item -no-border mt-40 mr-20">
      <div
        className="px-20 py-20 rounded-2"
        style={{ backgroundColor: "white" }}
      >
        {/* Search by Company Name */}
        <div className=" pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Search Name</h5>
          <input
            type="search"
            placeholder="Search Name"
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
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Budget */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Budget</h5>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={selectStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Budget Range</option>
            <option value="15-50k">₹15,000–₹50,000</option>
            <option value="50-100k">₹50,000–₹1,00,000</option>
          </select>
        </div>

        {/* ROC State */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">ROC State</h5>
          <select
            value={rocState}
            onChange={(e) => setRocState(e.target.value)}
            style={selectStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select ROC State</option>
            {rocOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Business Category */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Business Category</h5>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={selectStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select Business Activity</option>
            {activityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Company Age */}
        <div className="sidebar__item pb-30">
          <h5 className="text-18 fw-500 mb-10 mt-10">Age of Company</h5>
          <select
            value={companyAge}
            onChange={(e) => setCompanyAge(e.target.value)}
            style={selectStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select Age of Company</option>
            {companyAgeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
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
                />{" "}
                Yes
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <input
                  type="radio"
                  name="gst"
                  value="no"
                  checked={gst === "no"}
                  onChange={(e) => setGst(e.target.value)}
                />{" "}
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

        {/* Tags */}
        {/* <div className="sidebar__item pb-30">
          <label style={{ fontWeight: "bold", fontSize: 16 }}>Tags</label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {tagsList.map((option) => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: tag.includes(option)
                    ? "2px solid #2563eb"
                    : "1px solid #d1d5db",
                  background: tag.includes(option) ? "#eff6ff" : "#f9fafb",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={tag.includes(option)}
                  onChange={handleTagChange}
                  style={{ accentColor: "#2563eb", width: 16, height: 16 }}
                />
                <span style={{ fontSize: 14, color: "#111827" }}>{option}</span>
              </label>
            ))}
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
        tag: filters.tag || "",
        compliance: filters.compliance || "",
        document: filters.document || "",
        companyAge: filters.companyAge || "",
        budget: filters.budget || "",
      }).toString();

      const res = await fetch(
        `${BASE_URL}/api/buyers/approved?${query}`
      );

      const data = await res.json();
      setSellers(data?.data || []);
      // alert(JSON.stringify(data?.data));
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching sellers:", error);
      // alert(JSON.stringify(error));
    }
  };

  return (
    <div style={{ flex: 1 }} className="mt-40">
      {!sellers.length ? (
        <p style={{ textAlign: "center", padding: 20, color: "#666" }}>
          No items found
        </p>
      ) : (
        sellers.map((item) => <BuyerItem key={item.id} item={item} />)
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

// -------------------- Buyer Item --------------------
const BuyerItem = ({ item }) => (
  <div className="col-12 border-top-light pt-30">
    <div className="row x-gap-20 y-gap-20">
      <div className="col-md">
        <h3 className="text-18 lh-16 fw-500 ">
          Name: {item?.name} <br className="lg:d-none" /> ROC State:{" "}
          {item?.rocState} <br className="lg:d-none" /> Age Of Company:{" "}
          {item?.ageOfCompany} {"year"}
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
            {(item?.tags || []).map((tag, index) => (
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
          <div className="text-22 lh-12 fw-600 mt-5">{item?.budget}/- Rs</div>
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
