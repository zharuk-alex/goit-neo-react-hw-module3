import styles from "./InputField.module.css";

const InputField = ({ field, form: { touched, errors } = {}, ...props }) => {
  const name = field?.name ?? props?.name;
  const isInvalid = touched?.[name] && errors?.[name];

  return (
    <div className={styles.fromControl}>
      {!!props.label && (
        <label className={styles.fromLabel} htmlFor={props.id || name}>
          {props.label}
        </label>
      )}
      <input
        type={props?.type || field?.type || "text"}
        {...props}
        {...field}
        className={isInvalid ? styles.formInputInvalid : styles.formInput}
      />
      {isInvalid && <div className={styles.errorMsg}>{errors[name]}</div>}
    </div>
  );
};

export default InputField;
