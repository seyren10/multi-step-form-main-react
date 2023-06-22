import styles from "./FormStep.module.css";

// eslint-disable-next-line react/prop-types
const FormStep = ({ step, stepTitle, stepId, active }) => {
  return (
    <li className={styles["step"]}>
      <div className={`${styles["selection"]} ${active && styles.active}`} id={stepId} data-step={stepId}></div>
      <div className={styles['step__details']}>
        <p>{step}</p>
        <h3>{stepTitle}</h3>
      </div>
    </li>
  );
};

export default FormStep;
