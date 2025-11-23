import MainFilterSearchBox from "./MainFilterSearchBox";
import Link from "next/link";

const index = () => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/bg.webp" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center mt-60">
              <h1
                className="text-40 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                Buy or Sell Companies — Fast, Direct, and Verified
              </h1>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                India’s trusted platform for smooth transfer of active, inactive, or ready-to-operate companies. No brokers. No delays.
              </p>

               {/* Start btn-group */}
               <div className="d-flex justify-center items-center is-menu-opened-hide md:d-none mt-40">
  <Link
    href="/post"
    className="button px-30 fw-400 text-14 -blue-3 bg-dark-4 h-50 text-white"
  >
    List Your Company
  </Link>
  <Link
    href="/company-xchange"
    className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20" 
    style={{ backgroundColor: "#1db67a", color: "#fff", border: "2px solid #1db67a", fontWeight: "bold" }}
  >
    Explore Listings
  </Link>
</div>

                {/* End btn-group */}
            </div>
            {/* End hero title */}

           

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
