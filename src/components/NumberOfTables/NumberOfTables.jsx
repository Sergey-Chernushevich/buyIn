import cn from "classnames";
import styles from "./NumberOfTables.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const NumberOfTables = ({ classNames }) => {
  const [tables, setTables] = useState(1);

  const increment = () => {
    setTables((prev) => Number(prev || 1) + 1);
  };

  const decrement = () => {
    setTables((prev) => Math.max(1, Number(prev || 1) - 1));
  };

  const handleChange = (e) => {
    setTables(e.target.value);
  };

  const handlerOnBlur = () => {
    if (tables === "" || Number(tables) < 1) {
      setTables(1);
    } else {
      setTables(Math.floor(Number(tables)));
    }
  };

  return (
    <div className={cn(styles["tables"], classNames)}>
      <Button clickAction={decrement} type="secondary" isdisabled={tables <= 1}>
        <img src="minus.svg" alt="minus" />
      </Button>
      <Input
        value={tables}
        onChange={handleChange}
        onBlur={handlerOnBlur}
        title="Number of tables"
      />

      <Button clickAction={increment} type="secondary">
        <img src="plus.svg" alt="plus" />
      </Button>
    </div>
  );
};

export default NumberOfTables;
