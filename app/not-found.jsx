import dynamic from "next/dynamic";
// import CallToActions from "@/components/common/CallToActions";
import CallToActions from "../components/common/CallToActions";

// import DefaultHeader from "@/components/header/default-header";
import DefaultHeader from "../components/header/dashboard-header";

// import DefaultFooter from "@/components/footer/default";
import DefaultFooter from "../components/footer/default";

// import NotFound from "@/components/common/NotFound";
import NotFound from "../components/common/NotFound";

export const metadata = {
  title: "CompanyXchange - Buy or Sell Companies — Fast, Direct, and Verified",
  description: "Company Xchange - Buy or Sell Companies — Fast, Direct, and Verified",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
