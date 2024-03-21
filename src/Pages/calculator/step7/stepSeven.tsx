import { CustomerInput } from '../index';
import styles from "../calculator.module.scss";

interface StepSevenProps {
  customerData: CustomerInput;
}

export const StepSeven: React.FC<StepSevenProps> = ({ customerData }) => {

  return (
    <div>
      <h3 className="text-white" data-aos="fade-right">
        Customer Suggestion
      </h3>
      <div className={styles.input}>
        <h3 className="text-white">hey <span>{customerData.username}</span></h3>
        <p className="text-white" data-aos="flip-up">
          The cost of you project is cost $<span>{customerData.budget}</span> so let we get started with
          payment so we can drive through you project and we shall give you
          Project to you choice time you will get message to the Email you have
          give to us keep in touch .Thank you
        </p>
      </div>
    </div>
  );
};
