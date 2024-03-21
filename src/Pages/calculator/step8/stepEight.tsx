import styles from "../calculator.module.scss";

export const StepEight = () => {
  return (
    <div>
      <h3 className="text-white" data-aos="fade-right">
        Customer Suggestion
      </h3>
      <div className={styles.input}>
        <div data-aos="fade-right">
          <input name="website" type="text" placeholder="Name of card" />
        </div>
        <div data-aos="fade-left">
          <input name="website" type="text" placeholder="Expire date" />
        </div>
        <div data-aos="fade-up-right">
          <input name="website" type="text" placeholder="Number of card" />
        </div>
        <div data-aos="fade-up-left">
          <input name="website" type="text" placeholder="Cv" />
        </div>
        <div>
          <div className="flex justify-start">
            <input style={{ width: "15px" }} name="website" type="checkbox" />
            <label className="text-white">Save this card</label>
          </div>
          <div className="mt-6">
            <span className="text-white">Total price</span>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            style={{ width: "10rem" }}
            type="text"
            value="1500$"
            disabled
          />
        </div>
      </div>
    </div>
  );
};
