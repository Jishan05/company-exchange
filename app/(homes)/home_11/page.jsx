import dynamic from "next/dynamic";



import WhyChooseUs from "@/components/home/home-11/WhyChoose";
import DefaultFooter from "@/components/footer/default";
import Testimonial from "@/components/home/home-2/Testimonial";
import TestimonialRating from "@/components/home/home-2/TestimonialRating";
import Header12 from "@/components/header/header-12";
import Hero1 from "@/components/hero/hero-1";
import CallToActions from "@/components/common/CallToActions";
import AppBanner from "@/components/home/home-6/AppBanner";
import ElementOne from "@/components/home/home-11/ElementOne";
import ElementTwo from "@/components/home/home-11/ElementTwo";

export const metadata = {
  title: "Home-1 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Home_11 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header12 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      <section className="">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Why Use Company Sell Purchase?
                </h2>
              </div>
            </div>
          </div>
          {/* End .row  */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="mt-30 mb-60">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <WhyChooseUs />
          </div>
        </div>
      </section>
      <ElementOne />
      <ElementTwo />
      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <AppBanner />

      {/* End testimonial Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_11), { ssr: false });
