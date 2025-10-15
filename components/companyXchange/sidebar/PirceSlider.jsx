'use client'

import { useState } from "react";
import InputRange from "react-input-range";

const PirceSlider = ({ onChange }) => {
  const [price, setPrice] = useState({
    value: { min: 5000, max: 100000 },
  });

  const handleOnChange = (value) => {
    setPrice({ value });
    onChange && onChange(value); // send updated price to parent
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">Rs{price.value.min}</span> -
          <span className="js-upper mx-1">Rs{price.value.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={() => ``}
          minValue={0}
          maxValue={300000}
          value={price.value}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

export default PirceSlider;
