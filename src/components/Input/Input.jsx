import styles from "./Input.module.scss";

const Input = ({ value, title, onChange, onBlur }) => {
  return (
    <label htmlFor={value} className={styles["input"]}>
      <input
        id={value}
        className={styles["input__value"]}
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles["input__title"]}>{title}</span>
    </label>
  );
};

export default Input;
