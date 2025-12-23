import { useState } from "react";
import { BuyInContext } from "./BuyInContext";

export const BuyInProvider = ({ children }) => {
  const [payOption, setPayOption] = useState("UseRealMoney");
  const [amount, setAmount] = useState(25);
  const handlerChangePayOption = (method) => {
    setPayOption(method);
  };

  return (
    <BuyInContext.Provider
      value={{
        payOption,
        handlerChangePayOption,
        amount,
        setAmount,
      }}
    >
      {children}
    </BuyInContext.Provider>
  );
};
