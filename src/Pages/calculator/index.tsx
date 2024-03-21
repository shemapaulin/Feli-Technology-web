import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import router from '../../routes/router';
import { StepOne } from './step1/stepOne';
import { StepTwo } from './step2/stepTwo';
import { StepThree } from './step3/stepThree';
import { StepFour } from './step4/stepFour';
import { StepFive } from './step5/stepFive';
import { StepSix } from './step6/stepSix';
import { StepSeven } from './step7/stepSeven';
// import { StepEight } from './step8/stepEight';
// import { StepNine } from './step9/stepNine';
import avatar from '../../assets/img/Saly-10.svg';
import avatar2 from '../../assets/img/Saly-13.svg';
import { BiArrowBack } from 'react-icons/bi';
import styles from './calculator.module.scss';

export type CustomerInput = {
  service: string,
  department: string,
  features: string[],
  duration: string,
  paymentMethod: string,
  username: string,
  email: string,
  phoneNumber: string,
  address: string,
  budget: number,
}

export type FieldName = 'service' | 'department' | 'features' | 'duration' | 'paymentMethod' | 'username' | 'email' | 'phoneNumber' | 'address' | 'budget';

export const Calculator = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);

  const initialeData: CustomerInput = {
    service: '',
    department: '',
    features: [],
    duration: '',
    paymentMethod: '',
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    budget: 0,
  };

  const [customerData, setCustomerData] = useState<CustomerInput>(initialeData);

  const handleNext = () => {
    setActiveStep(prevState => {
      return prevState + 1
    });
    // localStorage.setItem ('activeStep', JSON.stringify(activeStep));
    localStorage.setItem('activeStep', (activeStep + 1).toString());
  };

  const handleBack = () => {
    console.log('handleBack activeStep:', activeStep);
    setActiveStep(prevState => prevState - 1);
    localStorage.setItem('activeStep', (activeStep - 1).toString());
  };

  const handleUpdateData = (fieldName: FieldName, value: any, price?: number) => {
    console.log('fieldName:', fieldName, 'value:', value, 'price:', price);
  
    let updatedBudget = customerData.budget; // Initialize with current budget
  
    if (price) {
      updatedBudget += price; // Add the provided price to the budget
    }
  
    setCustomerData(prevState => ({
      ...prevState,
      [fieldName]: value,
      budget: updatedBudget, // Update the budget with the new value
    }));
  
    console.log('customerData save:', customerData);
  };
  

  useEffect(() => {
    const step: string | null = localStorage.getItem('activeStep') || null;
    // localStorage.setItem('customerProject', JSON.stringify(initialeData));
    if (step) {
      // setActiveStep(parseInt(savedActiveDiv, 10));
      setActiveStep(Number(step));
    }
  }, []);

  console.log('ActiveStep:', activeStep);

  return (
    <section className={styles.calculator_page}>
      <div className={styles.calculator_header}>
        <h3 className='text-white' data-aos="fade-down-left">
          Project calculator
        </h3>
        {activeStep === 0 && (
          <div className={styles.calculator_avatar} data-aos="flip-left">
            <img src={avatar} alt="avatar_calculator" />
          </div>
        )}
        {activeStep > 0 && activeStep < 7  && (
          <div className={styles.calculator_avatar} data-aos="flip-left">
            <img src={avatar2} alt="avatar_calculator" />
          </div>
        )}
      </div>
      <div className={styles.calculator_wrapper}>
        <div className={styles.dotCod} data-aos="zoom-in-up">
          <article>
            {activeStep === 0 && (
              <div>
                <h4 className='text-white' data-aos="fade-left">Welcome to our Project calculator</h4>
                <p className={`${styles.calculator_pagaragh} text-white`} data-aos="flip-up">
                  If you are asking yourself the price of any our or service provided or an idea of any of how many may cost to design and develop your website, application (web, mobile) ...
                  We are the digital system that gives the good service on the time according to the projectyou have and how you can hold on it .
                  Even though we have the part of hosting where we can hosting for you in short way but is concernedthe all detail of project calculator for the whole system.
                  If you are click next.
                </p>
                <p className={`${styles.calculator_pagaragh} text-white`} data-aos="flip-up">
                  <strong>NB:</strong> Are you ready? Click next
                </p>
              </div>
            )}
            {activeStep !== 0 && (
              <>
                <div className="flex justify-between text-center mb-4">
                  <button type='button' title='back' className={styles.back_btn} data-aos="fade-up" onClick={handleBack}>
                    <BiArrowBack />
                  </button>
                  <p className={ `${styles.steps} text-footer-color`}> Step {activeStep}/7</p>
                </div>
                {/* </div> */}
                <div className={styles.content}>
                  {activeStep === 1 && (
                    <StepOne onCustomerChange={handleUpdateData} />
                  )}
                  {activeStep === 2 && (
                    <StepTwo onCustomerChange={handleUpdateData} />
                  )}
                  {activeStep === 3 && (
                    <StepThree onCustomerChange={handleUpdateData} />
                  )}
                  {activeStep === 4 && (
                    <StepFour onCustomerChange={handleUpdateData} />
                  )}
                  {activeStep === 5 && (
                    <StepFive onCustomerChange={handleUpdateData} />
                  )}
                  {activeStep === 6 && (
                    <StepSix onCustomerChange={handleUpdateData} customerData={customerData} onHandleNext={handleNext} />
                  )}
                  {activeStep === 7 && (
                    <StepSeven customerData={customerData}/>
                  )}
                  {/* {activeStep === 8 && (
                    <StepEight />
                  )}
                  {activeStep === 9 && (
                    <StepNine />
                  )} */}
                </div>
              </>
            )}

            <div 
              className={` ${styles.next_btn} flex` }
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="3000"
            >
            {activeStep < 6  && (
              <button type='button' onClick={handleNext} data-aos="flip-left">Next</button>
            )}
            {activeStep === 7 && (
              <button type='button' onClick={() => navigate(router.home)}>Done</button>
            )}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
