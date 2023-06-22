import { useContext } from "react";
import formStepContext from "../../contexts/form-step-context";
import FormAction from "../FormAction";
import styles from "./SelectPlan.module.css";

import imgArcade from "../../assets/images/icon-arcade.svg";
import imgAdvance from "../../assets/images/icon-advanced.svg";
import imgPro from "../../assets/images/icon-pro.svg";

const plans = [
  {
    image: imgArcade,
    category: "Arcade",
    monthly: 9,
    yearly: 90,
    freeMonths: 2,
  },
  {
    image: imgAdvance,
    category: "Advanced",
    monthly: 12,
    yearly: 120,
    freeMonths: 2,
  },
  { image: imgPro, category: "Pro", monthly: 15, yearly: 150, freeMonths: 2 },
];

const SelectPlan = () => {
  const { planType, setPlanType, activePlan, setActivePlan, setForm } =
    useContext(formStepContext);

  const isFormValid = planType && activePlan !== null;

  const handleFormSubmit = () => {
    setForm({
      planType,
      activePlan,
      planDetails: {
        category: plans[activePlan].category,
        price:
          planType === "monthly"
            ? plans[activePlan].monthly
            : plans[activePlan].yearly,
      },
    });
  };

  const handlePlanChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setPlanType("yearly");
    } else setPlanType("monthly");
  };

  return (
    <>
      <div className={styles["select-plan"]}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <ul className={styles["plan-list"]}>
          {plans.map((plan, id) => {
            return (
              <li
                className={`${styles["plan-list__item"]} ${
                  activePlan === id && styles["active-plan"]
                }`}
                key={Math.random()}
                onClick={() => setActivePlan(id)}
              >
                <img src={plan.image} alt="" />
                <div className={styles["item__detail"]}>
                  <span>{plan.category}</span>
                  <span>
                    $
                    {planType == "monthly"
                      ? `${plan.monthly}/mo`
                      : `${plan.yearly}/yr`}
                  </span>
                  {planType === "yearly" && (
                    <span>{`${plan.freeMonths} months free`}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles["plan-type"]}>
          <span>Monthly</span>
          <label className={styles["plan-toggle"]} id="toggler">
            <input
              type="checkbox"
              name="plan-type"
              id="toggler"
              onChange={handlePlanChange}
              defaultChecked={planType === "yearly"}
            />
          </label>
          <span>Yearly</span>
        </div>
      </div>

      <FormAction isValid={isFormValid} onSubmit={handleFormSubmit} />
    </>
  );
};

export default SelectPlan;
