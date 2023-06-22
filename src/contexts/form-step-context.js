import { createContext } from "react";

const formStepContext = createContext({
  formContent: {},
  planType: "",
  setPlanType: (type) => {},
  activePlan: "",
  setActivePlan: (type) => {},
  currentStep: 1,
  currentForm: 0,
  nextStep: () => {},
  prevStep: () => {},
  setStep: (stepIndex) => {},
  nextForm: () => {},
  prevForm: () => {},
  setForm: (value) => {},
  addOns: [],
  setAddOns: (prev) => {},
});

export default formStepContext;
