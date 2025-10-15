import { Briefcase, BarChart3, FileText, Building2, CheckCircle } from "lucide-react";

const ElementTwo = () => {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-40 justify-between items-center">
          
          {/* Left Column - Who Uses Us */}
          <div className="col-xl-5 col-lg-6">
            <h2 className="text-30 fw-600">Who Uses Us</h2>

            <div className="mt-30 space-y-20">
              <div className="d-flex items-start bg-light-3 rounded-12 p-20 hover:shadow-md transition">
                <Briefcase className="text-blue-600 w-6 h-6 mr-15" />
                <p className="fw-500 text-dark-1">
                  Startup Founders looking for clean exits
                </p>
              </div>

              <div className="d-flex items-start bg-light-3 rounded-12 p-20 hover:shadow-md transition">
                <BarChart3 className="text-green-600 w-6 h-6 mr-15" />
                <p className="fw-500 text-dark-1">
                  Investors buying dormant or shell companies
                </p>
              </div>

              <div className="d-flex items-start bg-light-3 rounded-12 p-20 hover:shadow-md transition">
                <FileText className="text-orange-600 w-6 h-6 mr-15" />
                <p className="fw-500 text-dark-1">
                  CA & CS professionals managing client transitions
                </p>
              </div>

              <div className="d-flex items-start bg-light-3 rounded-12 p-20 hover:shadow-md transition">
                <Building2 className="text-purple-600 w-6 h-6 mr-15" />
                <p className="fw-500 text-dark-1">
                  Acquirers needing ready ROC-compliant entities
                </p>
              </div>
            </div>
          </div>
          {/* End Left Column */}

          {/* Right Column - How They Help */}
          <div className="col-xl-5 col-lg-6">
            <div className="p-40 rounded-16 shadow-4 bg-gradient-to-r from-indigo-50 to-blue-100">
              <h3 className="text-24 fw-600 mb-25 text-dark-1">
                How They Help
              </h3>

              <div className="space-y-20">
                <div className="d-flex items-start">
                  <CheckCircle className="text-blue-600 w-6 h-6 mr-15" />
                  <p className="text-dark-1">
                    Buyers instantly spot listings that are worth acting on
                  </p>
                </div>

                <div className="d-flex items-start">
                  <CheckCircle className="text-green-600 w-6 h-6 mr-15" />
                  <p className="text-dark-1">
                    Sellers can attract more interest by highlighting readiness or flexibility
                  </p>
                </div>

                <div className="d-flex items-start">
                  <CheckCircle className="text-orange-600 w-6 h-6 mr-15" />
                  <p className="text-dark-1">
                    Your platform looks more transparent and efficient
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default ElementTwo;
