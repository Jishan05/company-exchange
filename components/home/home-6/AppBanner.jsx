import HomeBlock from "@/components/block/HomeBlock";

const AppBanner = () => {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-6">
            <img src="/img/app/st-1.png" alt="image" />
          </div>
          {/* End .col for image left */}

          <div className="col-xl-5">
            <HomeBlock />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default AppBanner;
