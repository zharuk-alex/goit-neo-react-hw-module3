import styles from "./InputField.module.css";
import { MdClose } from "react-icons/md";
import { useFormikContext } from "formik";

const InputField = ({ field, error = "", ...props }) => {
  const { values, setFieldValue } = useFormikContext();
  const id = field?.id ?? props?.id;
  const name = field?.name ?? props?.name;
  const clearValue = () => {
    setFieldValue(name, "");
  };

  return (
    <div className={styles.fromControl}>
      {!!props.label && (
        <label className={styles.fromLabel} htmlFor={id || name}>
          {props.label}
        </label>
      )}
      <div className={styles.inputGroup}>
        <input
          type={props?.type || field?.type || "text"}
          {...props}
          {...field}
          className={!!error ? styles.formInputInvalid : styles.formInput}
        />
        {!!values[name] && (
          <MdClose className={styles.clearIcon} onClick={clearValue} />
        )}
      </div>
      {!!error && <div className={styles.errorMsg}>{error}</div>}
    </div>
  );
};

export default InputField;
