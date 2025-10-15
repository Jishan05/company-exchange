const GuestRatingFilters = ({ onChange }) => {
  const options = [
    { label: "GST", value: "GST", count: 92 },
    { label: "ROC", value: "ROC", count: 45 },
    { label: "ITR Filed", value: "ITR", count: 21 },
  ];

  const handleChange = (value) => {
    onChange && onChange(value);
  };

  return (
    <>
      {options.map((option, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-radio">
              <div className="radio d-flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={option.value}
                  onChange={() => handleChange(option.value)}
                />
                <div className="radio__mark">
                  <div className="radio__icon" />
                </div>
                <div className="ml-10">{option.label}</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{option.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GuestRatingFilters;
