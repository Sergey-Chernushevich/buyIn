import styles from "./BuyIn.module.scss";
import PayOptions from "../PayOptions/PayOptions";
import { useContext } from "react";

import Amount from "../Amount/Amount";
import NumberOfTables from "../NumberOfTables/NumberOfTables";
import Button from "../Button/Button";
import { BuyInContext } from "../../context/BuyInContext";
import { ALERT_MESSAGES, PAY_OPTIONS } from "../../constants/constants";
import CloseButton from "../CloseButton/CloseButton";
import cn from "classnames";
import Input from "../Input/Input";

const BuyIn = () => {
  const { handlerChangePayOption, payOption, amount } =
    useContext(BuyInContext);
  const { CANCELED, OK } = ALERT_MESSAGES;
  const handlerCancel = () => {
    alert(CANCELED);
  };
  const handlerOk = () => {
    alert(OK);
  };
  return (
    <div className={styles["buyIn"]}>
      <div className={styles["buyIn__header"]}>
        <h2 className={styles["buyIn__title"]}>Buy-In</h2>
        <div className={styles["buyIn__close-button"]}>
          <CloseButton />
        </div>
      </div>
      <PayOptions
        changePayOption={handlerChangePayOption}
        payOption={payOption}
      />
      <div className={cn(styles["buyIn__game"], styles["game"])}>
        <div className={styles["game__type-title-wrapper"]}>
          <img src="chip.svg" alt="chip" />
          <p className={styles["game__type-title"]}>Game type:</p>
        </div>
        <p className={styles["game__type-name"]}>NL Hold’em 2/4</p>
      </div>
      <div
        className={cn(
          styles["buyIn__available-balance"],
          styles["available-balance"]
        )}
      >
        <h3 className={styles["available-balance__title"]}>
          <img src="chip_gold.svg" alt="chip_gold" />
          <p className={styles["available-balance__title-name"]}>
            Available balance:
          </p>
        </h3>
        <div className={styles["available-balance__values"]}>
          <p className={styles["available-balance__value"]}>
            <p className={styles["available-balance__value-title"]}>
              Real money:
            </p>
            <p className={styles["available-balance__value-value"]}>$80</p>
          </p>
          {payOption === PAY_OPTIONS.USE_CASH_MONEY && (
            <p className={styles["available-balance__value"]}>
              <p className={styles["available-balance__value-title"]}>
                Cash money:
              </p>
              <p
                className={cn(
                  styles["available-balance__value-value"],
                  styles["available-balance__value-value_cash"]
                )}
              >
                C$150
              </p>
            </p>
          )}
        </div>

        <div className={styles["buyIn__amount"]}>
          <p className={styles["buyIn__amount-title"]}>
            <img src="card.svg" alt="card" />
            You will be charged:
          </p>
          <p> $ {amount}</p>
        </div>
      </div>
      <Amount />
      <div className={styles["buyIn__auto-button"]}>
        <Button title="Auto Buy-In and Auto Rebuy" type="secondary" />
      </div>
      <NumberOfTables />

      <div className={styles["buyIn__buttons"]}>
        <Button title="Cancel" clickAction={handlerCancel} type="secondary" />
        <Button title="Ok" clickAction={handlerOk} />
      </div>
    </div>
  );
};

export default BuyIn;
