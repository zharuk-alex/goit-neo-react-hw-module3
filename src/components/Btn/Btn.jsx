import classNames from "classnames";
import styles from "./Btn.module.css";

export default ({
  text,
  variant = "default",
  size = "md",
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.btn, styles[variant], styles[size])}
      onClick={onClick}
      {...rest}
    >
      {text || children}
    </button>
  );
};
