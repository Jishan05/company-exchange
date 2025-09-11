const WhyChooseUs = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Verified Listings Only",
      text: `Every company is manually checked`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "No Middlemen",
      text: `Direct seller-to-buyer contact`,
      delayAnim: "300",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Pan-India Reach ",
      text: `From Tier 1 cities to remote ROCs`,
      delayAnim: "500",
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/7.svg",
      title: "Trusted by Professionals",
      text: `Used by CA/CS, founders & investors`,
      delayAnim: "500",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChooseUs;
