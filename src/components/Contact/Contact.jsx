import styles from "./Contact.module.css";
import { MdPhone, MdPerson } from "react-icons/md";
import Btn from "components/Btn/Btn";

export default ({ name, number, removeContact }) => {
  return (
    <div className={styles.contactItem}>
      <div>
        <div className={styles.contactInfo}>
          <MdPerson />
          {name}
        </div>
        <div className={styles.contactInfo}>
          <MdPhone />
          {number}
        </div>
      </div>
      <Btn text="delete" onClick={removeContact} size="sm" />
    </div>
  );
};
