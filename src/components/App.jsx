import React, { useState } from "react";

function App(event) {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChanges(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChanges}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChanges}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChanges}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
