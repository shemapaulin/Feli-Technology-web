import { useState } from 'react';
import { FieldName } from '../index';
import { softwareFeatures } from '@/dataBase/services';

interface StepOneProps {
  onCustomerChange: (fieldName: FieldName, value: any, price: number) => void;
}

export const StepThree: React.FC<StepOneProps> = ({ onCustomerChange }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleCheckboxChange = (name: string) => {
    setSelectedFeatures((prevSelected) => {
      const updatedSelected = prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name];

        const featurePrice = updatedSelected.reduce((acc, curr) => {
          const feature = softwareFeatures.find((item) => item.name === curr);  
          if (feature) {
            acc += feature.price;
          }
          return acc;
        }, 0);

      onCustomerChange('features', updatedSelected, featurePrice);

      return updatedSelected;
    });
  };

  // Create an array with only the names of the features for rendering checkboxes
  const selectedSoftwareFeatures = softwareFeatures.map((feature) => feature.name).slice(0, 16);

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h4 className="text-white text-2xl font-bold ml-4" data-aos="fade-left">
        Project Features
      </h4>
      <p className="text-white text-sm mb-4 ml-4" data-aos="flip-up">
        The project must have the project document that shows us how the structure of the website, Web App, or mobile application.
      </p>
      <div>
        <div className="grid grid-cols-2 gap-4 my-8">
          {selectedSoftwareFeatures.map((position, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300 dark:bg-gray-800 dark:border-gray-600"
                value={position}
                checked={selectedFeatures.includes(position)}
                onChange={() => handleCheckboxChange(position)}
              />
              <span className="ml-3 text-white truncate">{position}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
