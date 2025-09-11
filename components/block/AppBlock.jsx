import Link from "next/link";

const AppBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15 fw-600">How It Works</h2>

      {/* Sellers Section */}
      <div className="mt-30">
        <h3 className="text-20 fw-600">For Sellers:</h3>
        <ul className="mt-15 list-disc pl-20 text-dark-1">
          <li>Share basic details of your company</li>
          <li>Our team verifies and posts it</li>
          <li>Buyers contact you directly — no commission</li>
        </ul>
      </div>

      {/* Buyers Section */}
      <div className="mt-30">
        <h3 className="text-20 fw-600">For Buyers:</h3>
        <ul className="mt-15 list-disc pl-20 text-dark-1">
          <li>Filter listings by state, business type, GST, etc.</li>
          <li>Get verified contact details instantly</li>
          <li>Connect, negotiate, and close the deal</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-40">
    <Link
    href="#"
    className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20" 
    style={{ backgroundColor: "#1db67a", width: "250px", color: "#fff", border: "2px solid #1db67a", fontWeight: "bold" }}
  >
    Start Now — It’s Free
  </Link>
      </div>
    </>
  );
};

export default AppBlock;
