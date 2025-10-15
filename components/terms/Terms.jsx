'use client'

const TermsOfUse = () => {
  return (
    <section className="container py-50">
      <div className="row justify-center">
        <div className="col-lg-10">
          <div className="tabs__content js-tabs-content" data-aos="fade">
            <h1 className="text-30 fw-600 mb-20">Terms of Use</h1>
            
            <p className="text-15 text-dark-1 mb-20">
              Welcome to <strong>CompanyXchange</strong>. By using this platform, 
              you agree to the following terms:
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">1. Platform Purpose</h2>
            <p className="text-15 text-dark-1 mb-20">
              Our platform connects buyers and sellers of active, inactive, or 
              ROC-compliant/Non-Compliant companies across India. We provide verified 
              listings and facilitate contact but do not act as legal brokers or advisors.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">2. User Responsibilities</h2>
            <p className="text-15 text-dark-1 mb-20">
              Users must:
              <ul className="mt-10 list-disc pl-20">
                <li>Submit only true and accurate information</li>
                <li>Verify any company or contact before entering a deal</li>
                <li>Not post fraudulent, illegal, or misleading content</li>
                <li>Not use this platform for spam, scraping, or unethical activity</li>
              </ul>
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">3. No Guarantees</h2>
            <p className="text-15 text-dark-1 mb-20">
              We do not guarantee a successful sale, purchase, or response. 
              We simply help surface verified listings and connect interested parties.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">4. Intellectual Property</h2>
            <p className="text-15 text-dark-1 mb-20">
              All content on this website (text, logo, layout) is the property 
              of CompanyXchange and may not be copied without permission.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">5. Termination</h2>
            <p className="text-15 text-dark-1 mb-20">
              We reserve the right to remove any listing or user account if we 
              believe our terms are violated or misuse is detected.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">6. Limitation of Liability</h2>
            <p className="text-15 text-dark-1 mb-20">
              We are not liable for any direct or indirect losses resulting from 
              transactions or communications initiated on this platform. 
              Always perform your own due diligence.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">7. Contact</h2>
            <p className="text-15 text-dark-1 mb-20">
              For any questions about these terms, email us at{" "}
              <a href="mailto:support@companyXchange.in" className="text-blue-1 underline">
                support@companyXchange.in
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
