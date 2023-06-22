import { useContext } from "react";
import formStepContext from "./contexts/form-step-context";
import styles from "./App.module.css";

import FormStep from "./components/FormStep";
import desktopBg from "/bg-sidebar-desktop.svg";
import mobileBg from "/bg-sidebar-mobile.svg";

import PersonalInfo from "./components/formstep_contents/PersonalInfo";
import SelectPlan from "./components/formstep_contents/SelectPlan";
import AddOns from "./components/formstep_contents/AddOns";
import Summary from "./components/formstep_contents/Summary";
import Thankyou from "./components/formstep_contents/Thankyou";

const formSteps = [
  {
    info: { step: "step 1", stepTitle: "your info", stepId: 1 },
    content: [<PersonalInfo key={1} />],
  },
  {
    info: { step: "step 2", stepTitle: "select plan", stepId: 2 },
    content: [<SelectPlan key={1} />],
  },
  {
    info: { step: "step 3", stepTitle: "add-ons", stepId: 3 },
    content: [<AddOns key={1} />],
  },
  {
    info: { step: "step 4", stepTitle: "summary", stepId: 4 },
    content: [<Summary key={1} />, <Thankyou key={2} />],
  },
];

function App() {
  const { currentStep, currentForm } = useContext(formStepContext);

  return (
    <main>
      <section className={styles["form"]}>
        <div className={styles["form-steps"]}>
          <picture className={styles["form-steps__image"]}>
            <source srcSet={mobileBg} media="(max-width: 35em)" />
            <img src={desktopBg} alt="sidebar-background" />
          </picture>

          <ul className={styles["form-steps__list"]}>
            {formSteps.map((formStep) => {
              return (
                <FormStep
                  step={formStep.info.step}
                  stepTitle={formStep.info.stepTitle}
                  stepId={formStep.info.stepId}
                  key={formStep.info.stepId}
                  active={formStep.info.stepId === currentStep}
                />
              );
            })}
          </ul>
        </div>

        <div className={styles["form-content"]}>
          {formSteps[currentStep - 1].content[currentForm]}
        </div>
      </section>
    </main>
  );
}

export default App;
