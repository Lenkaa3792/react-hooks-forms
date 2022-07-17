import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        value={props.firstName}
        onChange={props.handleFirstName}
      />
      <input
        type="text"
        value={props.lastName}
        onChange={props.handleLastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
