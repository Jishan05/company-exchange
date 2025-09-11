'use client'

import { Mail, Phone, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="container py-50">
      <div className="row justify-center">
        <div className="col-lg-10">
          <div className="tabs__content js-tabs-content" data-aos="fade">
            <h1 className="text-30 fw-600 mb-20">About Us</h1>
            <p className="text-15 text-dark-1 mb-20">
              <strong>Company Sell Purchase</strong> is India’s trusted platform for buying 
              and selling ready-to-operate companies. We help real sellers connect directly 
              with serious buyers — without middlemen, delays, or unnecessary friction.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">Our Vision</h2>
            <p className="text-15 text-dark-1 mb-20">
              To become the go-to platform in India for seamless company transfers — empowering 
              entrepreneurs, investors, and professionals to unlock opportunity in every 
              underutilized business.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">Our Mission</h2>
            <p className="text-15 text-dark-1 mb-20">
              To simplify and streamline the transfer of companies by building a platform that 
              is transparent, trustworthy, and easy to use. We believe there is untapped value 
              in underutilized companies — and we’re here to help unlock it.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">Who We Are</h2>
            <p className="text-15 text-dark-1 mb-20">
              We’re a team of finance and compliance professionals, backed by technology 
              enablers who understand the Indian business landscape. With deep domain expertise 
              and a dedicated support team, we make sure every company listed is verified and 
              every inquiry is handled with care — honestly, reliably, and without middlemen.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">Why We Started</h2>
            <p className="text-15 text-dark-1 mb-20">
              The current system of selling companies is slow, unorganized, and often dependent 
              on brokers and unverified intermediaries. Sellers struggle to get visibility. Buyers 
              don’t get clarity. We set out to fix this — with a platform that puts transparency 
              and trust first.
            </p>

            <h2 className="text-20 fw-600 mt-35 mb-10">Who Uses Company Sell Purchase</h2>
            <ul className="mt-10 list-disc pl-20 text-15 text-dark-1 mb-20">
              <li>Entrepreneurs looking for clean, ready-made companies</li>
              <li>Founders exiting dormant startups or restructuring assets</li>
              <li>Investors acquiring ROC-compliant shells for new ventures</li>
              <li>CA/CS professionals managing client company transitions</li>
              <li>Business acquirers needing companies with existing bank accounts, GST, or licenses</li>
            </ul>

            <h2 className="text-20 fw-600 mt-35 mb-10">What Sets Us Apart</h2>
            <ul className="mt-10 list-disc pl-20 text-15 text-dark-1 mb-20">
              <li>✅ Verified Listings Only – Every submission is checked manually</li>
              <li>✅ No Middlemen – We connect real sellers with real buyers</li>
              <li>✅ Buyer-Friendly Filters – Easy to find the right kind of company</li>
              <li>✅ Seller Support – Our team assists you through the process</li>
              <li>✅ Confidential – Your data is handled with care and discretion</li>
            </ul>

            <h2 className="text-20 fw-600 mt-35 mb-10">Get in Touch</h2>
            <p className="text-15 text-dark-1 mb-20">
              Have questions? Want to list your company or explore current opportunities?
            </p>

            <ul className="mt-10 space-y-3 text-15 text-dark-1">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" /> 
                <a href="#" className="text-blue-1 underline"> WhatsApp: Click to Chat</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600" /> 
                <a href="mailto:support@companyxchange.in" className="text-blue-1 underline">
                   support@companyxchange.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-700" /> 
                 Based in India | Serving PAN India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
