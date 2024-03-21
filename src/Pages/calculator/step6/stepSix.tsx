import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FieldName, CustomerInput } from '../index';
import styles from '../calculator.module.scss';

interface StepSixProps {
  onCustomerChange: (fieldName: FieldName, value: any) => void;
  customerData: CustomerInput;
  onHandleNext: () => void;
}

export const StepSix: React.FC<StepSixProps> = (props) => {
  const { onCustomerChange, customerData, onHandleNext } = props;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('customerData:', customerData);

    if(form.current){
      emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_CALCULATOR_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        onHandleNext();
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
        throw new Error(error.text);
      });
      (e.target as HTMLFormElement).reset(); // Casting 'e.target' to 'HTMLFormElement'
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onCustomerChange(name as FieldName, value);
  };

  return (
    <>
    <div>
      <h3 className="text-white" data-aos="fade-right">
        Customer Suggestion
      </h3>
      <form ref={form} onSubmit={sendEmail} className={styles.input}>
        <div className={styles.input} data-aos="fade-right">
          <input
            type="text"
            id='username'
            name="username"
            placeholder="Full Name"
            autoComplete="username"
            required
            data-aos="zoom-in-right"
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_field} data-aos="fade-left">
          <input
            id='phoneNumber'
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            autoComplete="tel"
            required
            data-aos="zoom-in-left"
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_field} data-aos="fade-right">
          <input
            id='email'
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            data-aos="zoom-in-right"
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_field} data-aos="fade-left">
          <input
            type="text"
            name="address"
            placeholder="Country  -  City"
            autoComplete="country"
            required
            data-aos="zoom-in-left"
            onChange={handleChange}
          />
        </div>
        <div className="hidden">
          <input type="text" name="service" value={customerData.service} required placeholder="Email" autoComplete="" />
          <input type="text" name="department" value={customerData.department} required placeholder="Department" autoComplete="" />
          <input type="text" name="features" value={customerData.features} required placeholder="Features" autoComplete="" />
          <input type="text" name="duration" value={customerData.duration} required placeholder="Duration" autoComplete="" />
          <input type="text" name="paymentMethod" value={customerData.paymentMethod} required placeholder="PaymentMethod" autoComplete="" />
          <input type="text" name="budget" value={customerData.budget} required placeholder="Budget" autoComplete="" />
        </div>
        <div className={` ${styles.next_btn} flex` }>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};
