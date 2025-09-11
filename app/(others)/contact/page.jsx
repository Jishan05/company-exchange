import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Header12 from "@/components/header/header-12";
import WhyChoose from "@/components/block/BlockGuide";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import Image from "next/image";


export const metadata = {
  title: "Company Sell Purchase || Buy or Sell Companies — Fast, Direct, and Verified",
  description: "Buy or Sell Companies — Fast, Direct, and Verified",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header12 />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
                    <div className="section-bg__item col-12">
                      <Image
                        width={1920}
                        height={400}
                        src="/img/pages/about/1.png"
                        alt="image"
                        priority
                      />
                    </div>
                    {/* End section-bg__item */}
            
                    <div className="container">
                      <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                          <h1 className="text-40 md:text-25 fw-600 text-white">
                            Contact Us
                          </h1>
                          <div className="text-white mt-15">
                            Buy or Sell Companies — Fast, Direct, and Verified
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .container */}
                  </section>
                  {/* End About Banner Section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182586.0420340798!2d-73.99038430252834!3d40.749936548349346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">Send a message</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Contact Us</div>
            </div>
            {/* End .col */}

            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
