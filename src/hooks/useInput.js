import { useEffect, useReducer } from "react";

const inputStateDefault = {
  enteredValue: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { enteredValue: action.val, isTouched: state.isTouched };
    case "SET":
      return { enteredValue: action.val, isTouched: state.isTouched };
    case "TOUCHED":
      return { enteredValue: state.enteredValue, isTouched: true };
    default:
      return inputStateDefault;
  }
};

const useInput = (validateValue, initialValue = "") => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    inputStateDefault
  );
  //set an initial value of the input if the user provide one.
  useEffect(() => {
    if (initialValue) {
      inputDispatch({
        type: "CHANGE",
        val: initialValue,
      });
    }
    console.log(inputState.enteredValue);
  }, []);

  const isValid = validateValue(inputState.enteredValue);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    inputDispatch({ type: "CHANGE", val: e.target.value });
  };

  const valueBlurHandler = () => {
    inputDispatch({ type: "TOUCHED" });
  };

  const setValue = (val) => {
    inputDispatch({ type: "SET", val });
  };

  const resetInput = () => {
    inputDispatch({ type: "" });
  };

  return {
    value: inputState.enteredValue,
    hasError,
    isValid,
    valueChangeHandler,
    valueBlurHandler,
    resetInput,
    setValue,
  };
};

export default useInput;
