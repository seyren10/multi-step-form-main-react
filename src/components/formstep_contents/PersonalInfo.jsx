import useInput from "../../hooks/useInput";
import formStepContext from "../../contexts/form-step-context";

import FormAction from "../FormAction";
import styles from "./PersonalInfo.module.css";
import { useContext } from "react";

const PersonalInfo = () => {
  const { setForm, formContent } = useContext(formStepContext);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNamehasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "", formContent.name);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailhasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput(
    (val) =>
      val.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    formContent.email
  );
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: enteredPhonehasError,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
  } = useInput((val) => val.trim() !== "", formContent.phoneNumber);

  const isFormValid =
    enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid;

  const handleFormInvalid = () => {
    nameBlurHandler();
    emailBlurHandler();
    phoneBlurHandler();
  };

  const handleFormSubmit = () => {
    setForm({
      name: enteredName,
      email: enteredEmail,
      phoneNumber: enteredPhone,
    });
  };

  return (
    <>
      <div className={styles["personal-info"]}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <div className={styles["form-group"]}>
          <div className="form-group__label">
            <label htmlFor="name">Name</label>
            {enteredNamehasError && (
              <p className="error-text">This field is required</p>
            )}
          </div>
          <input
            className={enteredNamehasError ? "form-group__error" : undefined}
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>

        <div className={styles["form-group"]}>
          <div className="form-group__label">
            <label htmlFor="email">Email Address</label>
            {enteredEmailhasError && (
              <p className="error-text">Invalid email format</p>
            )}
          </div>
          <input
            className={enteredEmailhasError ? "form-group__error" : undefined}
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>

        <div className={styles["form-group"]}>
          <div className="form-group__label">
            <label htmlFor="email">Phone Number</label>
            {enteredPhonehasError && (
              <p className="error-text">This field is required</p>
            )}
          </div>
          <input
            className={enteredPhonehasError ? "form-group__error" : undefined}
            type="tel"
            name="telNo"
            id="telNo"
            placeholder="e.g. +1 234 567 890"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
        </div>
      </div>
      <FormAction
        isValid={isFormValid}
        onInvalid={handleFormInvalid}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default PersonalInfo;
