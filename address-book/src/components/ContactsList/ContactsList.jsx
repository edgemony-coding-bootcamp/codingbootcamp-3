import { useSelector } from "react-redux";
import Contact from "../Contact";
import styles from "./index.module.scss";

export default function ContactsList({ deleteContact }) {
  const listData = useSelector((state) => state.addressBookList);

  return (
    <div className={styles.ContactsList}>
      {listData &&
        listData.map((contact) => (
          <Contact
            contactData={contact}
            key={contact.phone}
            deleteContact={deleteContact}
          />
        ))}
    </div>
  );
}
