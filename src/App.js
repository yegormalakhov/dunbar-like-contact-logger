import React from "react";
import "./App.css";
import { useState } from "react";
import ContactPerson from "./components/ContactPerson";
import History from "./components/history";

function App() {
  const [contactPersone, setContactPerson] = useState([
    {
      name: "Elisaveta Petrovna",
      datesOfContact: [12 / 12 / 2022],
    },
    {
      name: "Igor Palyakov",
      datesOfContact: [12 / 12 / 2022],
    },
    {
      name: "Semen Sergeeech",
      datesOfContact: [12 / 12 / 2022],
    },
  ]);

  return (
    <main>
      <h1>Contact logger</h1>
      <section>
        <button>Start session</button> open a window to to start a session timer
        <button> Add contact person</button> on click open a form to add a
        persons name
      </section>

      <section className="contactList">
        {contactPersone.map((person) => {
          return <ContactPerson name={person.name} />;
        })}
      </section>
      <History />
    </main>
  );
}

export default App;
