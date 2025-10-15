// import Wrapper from "@/components/layout/Wrapper";
import Wrapper from '../components/layout/Wrapper';
import MainHome from "../app/(homes)/home_11/page";

export const metadata = {
  title: "CompanyXchange - Buy or Sell Companies — Fast, Direct, and Verified",
  description: "Company Xchange - Buy or Sell Companies — Fast, Direct, and Verified",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
