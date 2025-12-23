import { PAY_OPTIONS } from "../../constants/constants";
import styles from "./PayOptions.module.scss";

const PayOptions = ({ payOption, changePayOption }) => {
  const handlerChange = (e) => {
    changePayOption(e.target.value);
  };
  const { USE_CASH_MONEY, USE_REAL_MONEY } = PAY_OPTIONS;
  return (
    <fieldset className={styles["pay-options"]}>
      <label className={styles["pay-options__option"]} htmlFor="UseRealMoney">
        <input
          type="radio"
          id="UseRealMoney"
          name="payOptions"
          value="UseRealMoney"
          checked={payOption === USE_REAL_MONEY}
          onChange={handlerChange}
        />
        <span className={styles["pay-options__radio"]}></span>
        Use real money
      </label>

      <label className={styles["pay-options__option"]} htmlFor="UseCashMoney">
        <input
          type="radio"
          id="UseCashMoney"
          name="payOptions"
          value="UseCashMoney"
          checked={payOption === USE_CASH_MONEY}
          onChange={handlerChange}
        />
        <span className={styles["pay-options__radio"]}></span>
        Use cash money
      </label>
    </fieldset>
  );
};

export default PayOptions;
