import DealsFilter from "../sidebar/DealsFilter";
import Map from "../sidebar/Map";
import SearchBox from "../sidebar/SearchBox";
import PopularFilters from "../sidebar/PopularFilters";
import AminitesFilter from "../sidebar/AminitesFilter";
import RatingsFilter from "../sidebar/RatingsFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import StyleFilter from "../sidebar/StyleFilter";
import NeighborhoddFilter from "../sidebar/NeighborhoddFilter";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "../hotel-list-v2/MainFilterSearchBox";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Companies</h5>

          <div className="row y-gap-20 pt-20">
            {/* Company Budget */}
            <div className="sidebar__item pb-30">
              <h5 className="text-18 fw-500 mb-10">Company Budget</h5>
              <div className="row x-gap-10 y-gap-30">
                <div className="col-12">
                  <PirceSlider />
                </div>
              </div>
            </div>

            {/* Available Company With Age  */}
            <div className="sidebar__item">
              <h5 className="text-18 fw-500 mb-10">
                Available Company With Age
              </h5>
              <div className="sidebar-checkbox">
                <AminitesFilter />
              </div>
              {/* End Sidebar-checkbox */}
            </div>

            {/* Compliances */}
            <div className="sidebar__item">
              <h5 className="text-18 fw-500 mb-10">Compliances</h5>
              <div className="sidebar-checkbox">
                <GuestRatingFilters />
              </div>
            </div>

            {/* search btn */}
            <div className="col-12">
              <div className="button-item h-full">
                <button className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white">
                  <i className="icon-search text-20 mr-10" />
                  Search
                </button>
              </div>
              {/* End search button_item */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
