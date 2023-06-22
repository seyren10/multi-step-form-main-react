import styles from "./Thankyou.module.css";
import tyIcon from "../../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className={styles["thank-you"]}>
      <img src={tyIcon} alt="Thank you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Thankyou;
