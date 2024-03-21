import { useState } from 'react';
import { FieldName } from '../index';

interface StepFiveProps {
  onCustomerChange: (fieldName: FieldName, value: any) => void;
}

export const StepFive: React.FC<StepFiveProps> = ({ onCustomerChange }) => {
  const paymentMethods = [
    { value: 'MTN', label: 'MTN' },
    { value: 'ATM', label: 'ATM' },
    { value: 'PayPal', label: 'PayPal' },
    { value: 'Hill wallet', label: 'Hill wallet' },
    { value: 'Stripe', label: 'Stripe' },
    { value: 'Other', label: 'Other' },
    // Add more payment methods here
  ];

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    onCustomerChange('paymentMethod', value);
    setSelectedMethod(value);
  };

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h4 className="text-white text-2xl font-bold mb-4" data-aos="fade-left">
        Project Payment
      </h4>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {paymentMethods.map((method) => (
          <label
            key={method.value}
            className={`flex items-center cursor-pointer bg-gray-800 p-4 rounded-lg ${
              selectedMethod === method.value ? 'bg-blue-600' : ''
            }`}
          >
            <input
              type="radio"
              name="payment"
              className="form-radio h-5 w-5 text-blue-600 rounded"
              value={method.value}
              checked={selectedMethod === method.value}
              onChange={() => handleRadioChange(method.value)}
            />
            <span className="ml-3 text-white">{method.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
