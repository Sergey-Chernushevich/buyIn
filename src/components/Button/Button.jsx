import styles from "./Button.module.scss";
import cn from "classnames";

function Button({ children, title, clickAction, type, isdisabled }) {
  const handlerButton = () => {
    clickAction();
  };

  return (
    <button
      disabled={isdisabled}
      className={cn(
        styles["button"],
        type === "secondary" ? styles["button_secondary"] : ""
      )}
      onClick={handlerButton}
    >
      {title}
      {children}
    </button>
  );
}

export default Button;
