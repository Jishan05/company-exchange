import { Phone, Mail, MessageCircle } from "lucide-react";

const HomeBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15 fw-600">
        Trusted Support, Every Step of the Way
      </h2>

      <p className="mt-20 text-dark-1 leading-7">
        Our team helps verify listings, answer queries, and ensure a smooth
        transaction — professionally and confidentially.
      </p>

      <div className="flex items-center gap-2 mt-25 text-dark-1">
        
       <h5><Phone size={18} /> <span>Have questions? We're just a message away.</span></h5> 
      </div>

      <div className="flex items-center gap-6 mt-20">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-1 hover:text-green-600"
        >
          <MessageCircle size={18} className="text-green-600" />
          <span>WhatsApp</span>
        </a>
<br />
        <a
          href="mailto:support@companyxchange.in"
          className="flex items-center gap-2 text-dark-1 hover:text-blue-600"
        >
          <Mail size={18} className="text-blue-600" />
          <span>support@companyxchange.in</span>
        </a>
      </div>
    </>
  );
};

export default HomeBlock;
