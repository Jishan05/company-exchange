import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Image from "next/image";
import PrivacyPolicy from "@/components/privacy/Privacy";
import Header12 from "@/components/header/header-12";

export const metadata = {
  title: "Company Sell Purchase || Buy or Sell Companies — Fast, Direct, and Verified",
  description: "Buy or Sell Companies — Fast, Direct, and Verified",
};

const Privacy = () => {
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
                      Privacy Policy
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

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
           <PrivacyPolicy />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Privacy), { ssr: false });
