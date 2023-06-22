import { useReducer, useState } from "react";
import formStepContext from "./form-step-context";

const defaultValues = {
  formContent: {},
  currentStep: 1,
  currentForm: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        formContent: { ...state.formContent, ...action.value },
      };
    case "NEXT":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREV":
      if (state.currentStep > 1) {
        return {
          ...state,
          currentStep: state.currentStep - 1,
        };
      }
      return { ...state, currentStep: 1 };
    case "NEXT_FORM":
      return {
        ...state,
        currentForm: state.currentForm + 1,
      };
    case "PREV_FORM":
      return {
        ...state,
        currentForm: state.currentForm - 1,
      };
    case "SET_STEP":
      return {
        ...state,
        currentStep: action.value,
      };
    default:
      return defaultValues;
  }
};
// eslint-disable-next-line react/prop-types
const FormStepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);
  const [planType, setPlanType] = useState("monthly");
  const [activePlan, setActivePlan] = useState(null);
  const [addOns, setAddOns] = useState([]);

  const nextStep = () => {
    dispatch({ type: "NEXT" });
  };

  const prevStep = () => {
    dispatch({ type: "PREV" });
  };

  const nextForm = () => {
    dispatch({ type: "NEXT_FORM" });
  };
  const prevForm = () => {
    dispatch({ type: "PREV_FORM" });
  };

  const setForm = (value) => {
    dispatch({ type: "SET_FORM", value });
  };

  const setStep = (stepIndex) => {
    dispatch({ type: "SET_STEP", value: stepIndex });
  };

  return (
    <formStepContext.Provider
      value={{
        formContent: state.formContent,
        currentStep: state.currentStep,
        currentForm: state.currentForm,
        nextStep,
        prevStep,
        nextForm,
        prevForm,
        setForm,
        planType,
        setPlanType,
        activePlan,
        setActivePlan,
        addOns,
        setAddOns,
        setStep,
      }}
    >
      {children}
    </formStepContext.Provider>
  );
};

export default FormStepProvider;
