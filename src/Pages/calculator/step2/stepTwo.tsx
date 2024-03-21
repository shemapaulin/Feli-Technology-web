import { useState } from 'react';
import { FieldName } from '../index';
import { softwareDepartment } from '@/dataBase/services';

interface StepTwoProps {
  onCustomerChange: (fieldName: FieldName, value: any) => void;
}

export const StepTwo:  React.FC<StepTwoProps> = ({ onCustomerChange }) => {
  const [selectedType, setSelectedType] = useState<number | null>(null);

  // const handleRadioChange = (value: number) => {
  //   setSelectedType(value);
  // };

  const handleDepartmentChange = (departmentId: number) => {
    const selectedDepartment = softwareDepartment.find(item => item.id === departmentId);
    if (selectedDepartment) {
      onCustomerChange('department', selectedDepartment.name);
    }
    setSelectedType(departmentId);
  };

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h4 className="text-white text-2xl font-bold ml-4" data-aos="fade-left">
        Software Product
      </h4>
      <p className="text-white text-sm mb-4 ml-4" data-aos="flip-up">
        Here you can select the software product you want!
      </p>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <div className="grid grid-cols-1 gap-2">
          {softwareDepartment.map((type, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              <input
                type="radio"
                name="type"
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
                value={type.id}
                checked={selectedType === type.id}
                // onChange={() => handleRadioChange(type.id)}
                onChange={() => handleDepartmentChange(type.id)}
              />
              <span className="ml-3">{type.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
