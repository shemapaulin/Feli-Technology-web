import check from "@/assets/img/check.png";
import styles from "../calculator.module.scss";

export const StepNine = () => {
  return (
    <div className={styles.content}>
      <div>
        <h3 className="text-white" data-aos="fade-left">
          Customer Suggestion
        </h3>
        <div className={styles.input}>
          <div
            style={{ padding: "1rem" }}
            className="bg-black flex items-center gap-2 border-2 rounded border-white">
            <img style={{ width: "2rem" }} src={check} alt="check" />
            <span className="text-white">Successful payment</span>
          </div>
          <p className="text-white">
            Thank you the Payment is success full the project is going to be
            start we shall give the message the time will be started as soon as
            possible thank you to work with us
          </p>
        </div>
      </div>
    </div>
  );
};
