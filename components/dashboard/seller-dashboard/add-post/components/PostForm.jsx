import FileUploader from "./FileUploader";
import DateSearch from "@/components/activity-list/common/DateSearch";

const PostForm = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
  
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Mobile Number
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Company Name
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Email ID
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
             <select required >
                <option value="" disabled selected>ROC State</option>
                <option value="mp">ROC Ahmedabad – Gujarat</option>
                <option value="up">ROC Ahmedabad – Dadra & Nagar Haveli</option>
                <option value="mh">ROC Ahmedabad – Daman & Diu</option>
                <option value="mh">ROC Bangalore – Karnataka</option>
                <option value="mh">ROC Chandigarh – Chandigarh</option>
                <option value="mh">ROC Chandigarh – Haryana</option>
                <option value="mh">ROC Chandigarh – Himachal Pradesh</option>
                <option value="mh">ROC Chandigarh – Punjab</option>
                <option value="mh">ROC Chennai – Tamil Nadu (except Coimbatore region)</option>
                <option value="mh">ROC Chennai – Andaman & Nicobar Islands</option>
                <option value="mh">ROC Coimbatore – Tamil Nadu (Coimbatore region)</option>
                <option value="mh">ROC Cuttack – Odisha</option>
                <option value="mh">ROC Delhi – Delhi</option>
                <option value="mh">ROC Ernakulam – Kerala</option>
                <option value="mh">ROC Ernakulam – Lakshadweep</option>
                <option value="mh">ROC Goa – Goa</option>
                <option value="mh">ROC Gwalior – Madhya Pradesh</option>
                <option value="mh">ROC Gwalior – Chhattisgarh</option>
                <option value="mh">ROC Hyderabad – Andhra Pradesh</option>
                <option value="mh">ROC Hyderabad – Telangana</option>
                <option value="mh">ROC Jaipur – Rajasthan</option>
                <option value="mh">ROC Jammu – Jammu & Kashmir</option>
                <option value="mh">ROC Jammu – Ladakh</option>
                <option value="mh">ROC Kanpur – Uttar Pradesh</option>
                <option value="mh">ROC Kanpur – Uttarakhand</option>
                <option value="mh">ROC Kolkata – West Bengal</option>
                <option value="mh">ROC Kolkata – Sikkim</option>
                <option value="mh">ROC Mumbai – Maharashtra (Mumbai region)</option>
                <option value="mh">ROC Pune – Maharashtra (Pune region)</option>
                <option value="mh">ROC Patna – Bihar</option>
                <option value="mh">ROC Patna – Jharkhand</option>
                <option value="mh">ROC Shillong – Arunachal Pradesh</option>
                <option value="mh">ROC Shillong – Assam</option>
                <option value="mh">ROC Shillong – Manipur</option>
                <option value="mh">ROC Shillong – Meghalaya</option>
                <option value="mh">ROC Shillong – Mizoram</option>
                <option value="mh">ROC Shillong – Nagaland</option>
                <option value="mh">ROC Shillong – Tripura</option>
              </select>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <select required>
                <option value="" disabled selected>Business Activity</option>
                <option value="mp">Manufacturing</option>
                <option value="up">Trading & Distribution</option>
                <option value="mh">Information Technology & Software</option>
                <option value="mh">Financial Services</option>
                <option value="mh">Real Estate</option>
                <option value="mh">Infrastructure & Construction</option>
                <option value="mh">Logistics & Warehousing</option>
                <option value="mh">Hospitality, Travel & Tourism</option>
                <option value="mh">Healthcare & Life Sciences</option>
                <option value="mh">Education & Training</option>
                <option value="mh">Energy & Utilities</option>
                <option value="mh">Agriculture & Food Processing</option>
                <option value="mh">Media, Entertainment & Professional Services</option>
                <option value="mh">others</option>
              </select>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Expected Price
            </label>
          </div>
        </div>
        {/* End col-6 */}
    
         <div className="col-md-4">
          


      <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">GST Registered</div>
        </div>
        {/* End .col-12 */}

      
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="form-input">
              <select required  style={{ height: "50px" }}>
                <option value="" disabled selected>Please Select</option>
                <option value="mp">Yes</option>
                <option value="up">No</option>
                <option value="mh">NA</option>
              </select>
           </div>
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}

      </div>
      {/* End .row */}


        </div>
        {/* End col-4 */}


         <div className="col-md-4">
          
  <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">Compliance Status</div>
        </div>
        {/* End .col-12 */}

      
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="form-input">
              <select required  style={{ height: "50px" }}>
                <option value="" disabled selected>Please Select</option>
                <option value="mp">Updated Not</option>
                <option value="mh">NA</option>
              </select>
           </div>
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}

      </div>

        </div>
        {/* End col-6 */}




         <div className="col-md-4">
          


  <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">Year of Incorporation </div>
        </div>
        {/* End .col-12 */}

         <div className="row y-gap-15">
            <div className="col-12">
               <input
                  type="date"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "16px",
                  }}
                />
            </div>
            {/* End .col-10 */}
          </div>
          {/* End .row */}

     
      </div>
      {/* End .row */}

        </div>
        {/* End col-6 */}


         <div className="col-12 mt-30">
        <div className="form-input ">
          <textarea required rows={5} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">Free Text Notes </label>
        </div>
      </div>
      {/* End Content */}


  <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">Interested in these Tags :</div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-2 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="name" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Docs Ready</div>
              </div>
            </div>
            {/* End .col-12 */}

          </div>
          {/* End .row */}
        </div>
        {/* End .col-3 */}
        <div className="col-lg-2 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="name" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Fast Transfer</div>
              </div>
            </div>
            {/* End .col-12 */}

            
          </div>
          {/* End .row */}
        </div>
        {/* End .col-3 */}
        <div className="col-lg-2 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="name" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Negotiable</div>
              </div>
            </div>
            {/* End .col-12 */}

          </div>
          {/* End .row */}
        </div>
        {/* End .col-3 */}
       <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="name" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Clean ROC Filings</div>
              </div>
            </div>
            {/* End .col-12 */}

          </div>
          {/* End .row */}
        </div>
        {/* End .col-3 */}
      </div>
      {/* End .row */}
    


 <div className="mt-30">
          <div className="fw-500">Upload Files</div>
          <FileUploader />
        </div>
        {/* End FeaturedUploader */}

        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>

    </div>

    
  );
};

export default PostForm;
