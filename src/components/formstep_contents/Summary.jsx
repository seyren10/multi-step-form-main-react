import { useContext } from "react";
import formStepContext from "../../contexts/form-step-context";

import FormAction from "../FormAction";
import styles from "./Summary.module.css";

const Summary = () => {
  const { formContent, planType, setStep } = useContext(formStepContext);
  const { planDetails, addOns } = formContent;

  const planLabel = planType === "monthly" ? "mo" : "yr";

  // we add addons price by reducing it then add plan price
  const total =
    addOns.reduce((a, c) => {
      const price = planType === "monthly" ? c.monthly : c.yearly;
      return a + price;
    }, 0) + planDetails.price;

  return (
    <>
      <div className={styles["summary"]}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className={styles["summary__details"]}>
          <div className={styles["details__plan"]}>
            <div className={styles["plan__type"]}>
              <div>
                {`${planDetails.category}`}{" "}
                <span className="text-title">{`(${planType})`}</span>
              </div>
              <a
                href="#"
                onClick={() => {
                  setStep(2);
                }}
              >
                Change
              </a>
            </div>
            <div
              className={styles["plan__total"]}
            >{`$${planDetails.price}/${planLabel}`}</div>
          </div>
          <ul className={styles["summary__add-ons"]}>
            {addOns.map((addOn) => {
              return (
                <li className={styles["add-ons__details"]} key={addOn.id}>
                  <div className={styles["add-ons__title"]}>{addOn.title}</div>
                  <div className={styles["add-ons__price"]}>{`+${
                    planType === "monthly" ? addOn.monthly : addOn.yearly
                  }/${planLabel}`}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles["summary__total"]}>
          <div className={styles["total__details"]}>
            Total (per {planType === "monthly" ? "month" : "year"})
          </div>
          <div
            className={styles["total__price"]}
          >{`+$${total}/${planLabel}`}</div>
        </div>
      </div>

      <FormAction />
    </>
  );
};

export default Summary;
