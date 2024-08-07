import styles from "./SearchBox.module.css";

export default ({ value, onChange, title = "Find contacts by name" }) => {
  return (
    <div className={styles.fromControl}>
      <label className={styles.fromLabel} htmlFor="searchInput">
        {title}
      </label>
      <input
        id="searchInput"
        type="text"
        value={value}
        onChange={onChange}
        className={styles.formInput}
      />
    </div>
  );
};
