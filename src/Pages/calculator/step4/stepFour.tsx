import { useState } from "react";
import { FieldName } from '../index';

interface StepFourProps {
  onCustomerChange: (fieldName: FieldName, value: any, price: number) => void;
}

const durationOptions = [
  {
    value: "less_than_3_months",
    label: "Less than 3 months",
    price: 800,
  },
  {
    value: "between_3_to_6_months",
    label: "Between 3 to 6 months",
    price: 600,
  },
  {
    value: "more_than_6_months",
    label: "More than 6 months",
    price: 400,
  },
  {
    value: "more_than_1_year",
    label: "More than 1 year",
    price: 200,
  },
  // Add more options here
];

export const StepFour: React.FC<StepFourProps> = ({ onCustomerChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  const handleRadioChange = (value: string, price: number) => {
    setSelectedOption(value);
    setSelectedPrice(price);

    if (selectedOption) {
      onCustomerChange('duration', value, price - selectedPrice); // Subtract the previous price
    } else {
      onCustomerChange('duration', value, price);
    }
  };

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h4 className="text-white text-2xl font-bold mb-4" data-aos="fade-left">
        Project Duration
      </h4>
      <p className="text-white text-sm mb-4" data-aos="fade-left">
        Choose the timeline and testing period for your project:
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {durationOptions.map(option => (
          <label
            key={option.value}
            className={`flex items-center cursor-pointer bg-gray-800 p-4 rounded-lg transition-all duration-300 ease-in-out ${
              selectedOption === option.value
                ? "bg-blue-600"
                : "hover:bg-blue-600"
            }`}
          >
            <input
              type="radio"
              name="dilation"
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleRadioChange(option.value, option.price)}
            />
            <span className="ml-3 text-white">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
