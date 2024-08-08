import { useState, useEffect } from "react";
import { fakeNewId } from "./helpers";
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
      return initialContacts ?? [];
    }
  });

  const addContact = (contact) => {
    const newList = [...contacts];
    newList.push({
      ...contact,
      id: fakeNewId(contacts),
    });
    setContacts(newList);
  };

  const removeContact = (contactId) => {
    setContacts(() => contacts.filter(({ id }) => id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={searchValue} onChange={setSearchValue} />
        <ContactList
          contacts={filteredContacts}
          removeContact={removeContact}
        />
      </section>
    </main>
  );
}

export default App;
