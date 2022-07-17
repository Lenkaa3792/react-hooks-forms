import React, { useState } from "react";
import DisplayData from "./Display";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </>
  );
}

export default ParentComponent;
