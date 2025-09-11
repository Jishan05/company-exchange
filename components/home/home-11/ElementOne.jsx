import AppBlock from "../../block/AppBlock";

const ElementOne = () => {
  return (
    <section
      className="section-bg pt-80 pb-80 md:pt-40 md:pb-40 animated"
      data-aos="fade-up"
    >
      <div className="section-bg__item -w-1500 rounded-4 bg-blue-2"></div>
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-5 col-lg-6">
            <AppBlock />
          </div>
          {/* End .col */}

          <div className="col-lg-6">
            <img src="/img/app/st-5.png" alt="image" />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default ElementOne;
