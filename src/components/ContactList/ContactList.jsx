import styles from "./ContactList.module.css";
import Contact from "components/Contact/Contact";

export default ({ contacts = [], removeContact }) => {
  return (
    <ul className={styles.list}>
      {contacts?.map(({ id, ...rest }) => (
        <li key={id}>
          <Contact {...rest} removeContact={() => removeContact(id)} />
        </li>
      ))}
    </ul>
  );
};
