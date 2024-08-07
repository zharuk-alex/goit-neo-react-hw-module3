import { useState, useEffect } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import SearchBox from "components/SearchBox/SearchBox";
import ContactList from "components/ContactList/ContactList";
import initialContacts from "data/contacts.json";

import styles from "./App.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = JSON.parse(
        window.localStorage.getItem("saved-contacts")
      );
      if (Array.isArray(savedContacts)) {
        return savedContacts;
      }
      throw new Error();
    } catch (error) {
      return initialContacts;
    }
  });

  const addContact = (contact) => {
    const newID = `id-${contacts.length + 1}`;
    const newList = [...contacts];
    newList.push({
      ...contact,
      id: newID,
    });
    setContacts(newList);
  };

  const removeContact = (contactId) => {
    const newList = contacts.filter(({ id }) => id !== contactId);
    setContacts(newList);
  };

  const filterContacts = (evt) => {
    const { value } = evt.target ?? "";
    setSearchValue(value);

    if (value === "") {
      setContacts(initialContacts);
      return;
    }

    const newList = contacts.filter(
      ({ name }) => name.toLowerCase()?.indexOf(value?.toLowerCase()) > -1
    );
    setContacts(newList);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={searchValue} onChange={filterContacts} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </section>
    </main>
  );
}

export default App;
