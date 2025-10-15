import { useState } from "react";
import AmenitiesFilter from "./AminitesFilter";
import GuestRatingFilters from "./GuestRatingFilters";
import PirceSlider from "./PirceSlider";

const Sidebar = ({ onSearch }) => {
  const [price, setPrice] = useState({ min: 5000, max: 100000 });
  const [compliance, setCompliance] = useState(null);
  const [ages, setAges] = useState([]);

  const handleAgeChange = (name, checked) => {
    setAges((prev) =>
      checked
        ? [...prev, name.replace("+ Years Old", "").trim()]
        : prev.filter((item) => item !== name)
    );
  };

  const handleSearch = () => {
    const filters = {
      minPrice: price.min,
      maxPrice: price.max,
      compliance,
      ages: ages.join(","), // "2,3,4"
    };

    onSearch && onSearch(filters);
  };

  return (
    <div className="sidebar__item -no-border mt-40 mr-20">
      <div
        style={{ backgroundColor: "white" }}
        className="px-20 py-20 rounded-2"
      >
        <h5 className="text-18 fw-500 mb-10">Search Companies</h5>

        <div className="row y-gap-20 pt-20">
          {/* Company Budget */}
          <div className="sidebar__item pb-30">
            <h5 className="text-18 fw-500 mb-10">Company Budget</h5>
            <PirceSlider onChange={(val) => setPrice(val)} />
          </div>

          {/* Available Company With Age */}
          <div className="sidebar__item">
            <h5 className="text-18 fw-500 mb-10">Available Company With Age</h5>
            <div className="sidebar-checkbox">
              <AmenitiesFilter onChange={handleAgeChange} />
            </div>
          </div>

          {/* Compliances */}
          <div className="sidebar__item">
            <h5 className="text-18 fw-500 mb-10">Compliances</h5>
            <div className="sidebar-checkbox">
              <GuestRatingFilters onChange={(val) => setCompliance(val)} />
            </div>
          </div>

          {/* Search btn */}
          <div className="col-12">
            <div className="button-item h-full">
              <button
                className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white"
                onClick={handleSearch}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
