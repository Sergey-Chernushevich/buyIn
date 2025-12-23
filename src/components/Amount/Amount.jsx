import { useContext } from "react";
import Button from "../Button/Button";
import styles from "./Amount.module.scss";
import { BuyInContext } from "../../context/BuyInContext";
import { AMOUNT_VALUES } from "../../constants/constants";
import Input from "../Input/Input";

const Amount = () => {
  const { amount, setAmount } = useContext(BuyInContext);
  const { MIN_VALUE, MAX_VALUE } = AMOUNT_VALUES;

  const setMinValue = () => {
    setAmount(String(MIN_VALUE));
  };

  const setMaxValue = () => {
    setAmount(String(MAX_VALUE));
  };

  const setValue = (e) => {
    setAmount(e.target.value);
  };

  const handlerBlur = () => {
    if (amount === "") {
      setAmount(MIN_VALUE);
      return;
    }

    if (Number(amount) < MIN_VALUE) setAmount(MIN_VALUE);
    if (Number(amount) > MAX_VALUE) setAmount(MAX_VALUE);
  };

  return (
    <div className={styles["amount"]}>
      <div className={styles["amount__wrapper"]}>
        <Button clickAction={setMinValue} title="Min $0.5" />
        <label htmlFor="amountValue" className={styles["amount__input-label"]}>
          <Input
            value={amount}
            title={Amount}
            onBlur={handlerBlur}
            onChange={setValue}
          />
          <span className={styles["amount__input-title"]}>Amount</span>
        </label>

        <Button clickAction={setMaxValue} title="Max $2" />
      </div>
      <input
        className={styles["amount__range"]}
        type="range"
        min={MIN_VALUE}
        max={MAX_VALUE}
        step={0.1}
        value={Number(amount)}
        onChange={setValue}
        style={{ "--range-value": `${amount}%` }}
      />
    </div>
  );
};

export default Amount;
