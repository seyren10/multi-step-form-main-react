import { useContext } from "react";
import formStepContext from "../contexts/form-step-context";
import styles from "./FormAction.module.css";

// eslint-disable-next-line react/prop-types
const FormAction = ({ isValid, onInvalid, onSubmit, optional }) => {
  const { nextStep, prevStep, currentStep, nextForm } =
    useContext(formStepContext);
  const handleBack = () => {
    prevStep();
  };

  const handleNext = () => {
    if (isValid) {
      onSubmit();
      nextStep();
    } else if (onInvalid) {
      onInvalid();
    }

    if (optional) {
      onSubmit();
      nextStep();
    }
  };

  const handleNextForm = () => {
    nextForm();
  };

  const ActionButton = () => {
    if (currentStep === 4) {
      return (
        <button
          className={
            styles["form-action__next"] +
            " " +
            styles["form-action__next--light"]
          }
          onClick={handleNextForm}
        >
          Confirm
        </button>
      );
    } else {
      return (
        <button className={styles["form-action__next"]} onClick={handleNext}>
          Next Step
        </button>
      );
    }
  };

  return (
    <div className={styles["form-action"]}>
      {currentStep !== 1 && (
        <button className={styles["form-action__back"]} onClick={handleBack}>
          Go Back
        </button>
      )}
      {<ActionButton />}
    </div>
  );
};

export default FormAction;
