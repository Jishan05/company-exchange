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
            <MainFilterSearchBox />
          </div>
        </div>
      </div>

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Search by company name</h5>
        <SearchBox />
      </div>
      {/* End search box */}

      
      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Company Budget</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Available Company With Age</h5>
        <div className="sidebar-checkbox">
          <AminitesFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div>
      {/* End rating filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Compliances</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div>
      {/* End Guest Rating */}



    </>
  );
};

export default Sidebar;
