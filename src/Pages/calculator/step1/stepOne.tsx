import { useState } from 'react';
import { FieldName } from '../index';
import { services } from "@/dataBase/services";

interface StepOneProps {
  onCustomerChange: (fieldName: FieldName, value: any) => void;
}

export const StepOne: React.FC<StepOneProps> = ({ onCustomerChange }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  console.log('selectedService:', selectedService)

  const handleServiceChange = (serviceId: number) => {
    const selectedService = services.find(item => item.id === serviceId);
    if (selectedService) {
      // console.log('serviceId:', serviceId);
      onCustomerChange('service', selectedService.name);
    }
    setSelectedService(serviceId);
  };

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h4 className="text-white text-2xl font-bold ml-4" data-aos="fade-left">
        Our Services
      </h4>
      <p className="text-white text-sm mb-4 ml-4" data-aos="flip-up">
        We have many services that we can offer to you, please select the one you want!
      </p>
      <div className="space-y-4">
        {services.map((item, index) => (
          <div key={index} data-aos="fade-left">
            <input
              id={`service-${index}`}
              name="services"
              type="radio"
              value={item.name}
              className="hidden"
              checked={selectedService === item.id}
              // onChange={() => setSelectedService(item.id)}
              onChange={() => handleServiceChange(item.id)}
            />
            <label
              htmlFor={`service-${index}`}
              className={`block cursor-pointer px-4 py-3 rounded-lg text-white font-medium transition-colors duration-300 ${
                selectedService === item.id ? 'bg-gray-800' : 'bg-gray-900 hover:bg-nav-color'
              }`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
