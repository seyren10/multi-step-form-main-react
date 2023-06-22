import { useContext } from "react";
import formStepContext from "../../contexts/form-step-context";

import FormAction from "../FormAction";
import styles from "./AddOns.module.css";

const addons = [
  {
    id: Math.random(),
    title: "Online service",
    description: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    id: Math.random(),
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    id: Math.random(),
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];
const AddOns = () => {
  const {
    planType,
    setAddOns,
    addOns: addOnContext,
    setForm,
  } = useContext(formStepContext);

  const handleCheckbox = (id, e) => {
    if (e.target.checked) {
      setAddOns((prev) => {
        return [...prev, id];
      });
    } else {
      setAddOns((prev) => {
        return [...prev.filter((p) => p !== id)];
      });
    }
  };

  const handleFormSubmit = () => {
    setForm({
      addOns: [...addons.filter((addon) => addOnContext.includes(addon.id))],
    });
  };
  return (
    <>
      <div className={styles["add-ons"]}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <ul className={styles["add-ons__check-list"]}>
          {addons.map((addon) => {
            return (
              <li key={Math.random()}>
                <label
                  htmlFor={addon.title}
                  className={styles["check-list__item"]}
                >
                  <input
                    type="checkbox"
                    name={addon.title}
                    id={addon.title}
                    onChange={handleCheckbox.bind(null, addon.id)}
                    defaultChecked={addOnContext.includes(addon.id)}
                  />
                  <div className={styles["item__details"]}>
                    <label htmlFor={addon.title}>{addon.title}</label>
                    <span>{addon.description}</span>
                  </div>
                  <div className={styles["item__price"]}>
                    {planType === "monthly"
                      ? `+$${addon.monthly}/mo`
                      : `+$${addon.yearly}/yr`}
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <FormAction optional onSubmit={handleFormSubmit} />
    </>
  );
};

export default AddOns;
