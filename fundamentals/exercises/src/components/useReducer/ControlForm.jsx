import React, { useReducer } from "react";
function formReducer(state, action) {
  switch (action.type) {
    case "name":
    case "email":
    case "age":
      return {
        ...state,
        [action.type]: action.value,
      };
    case "reset":
      return initState;
    default:
      return state;
  }
}
const initState = {
  name: "",
  email: "",
  age: "",
};
const ControlForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, initState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatchForm({ type: "reset" });
    console.log(formState);
  }

  function change(e) {
    dispatchForm({ type: e.target.name, value: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={change}>
        <input required type="text" name="name" placeholder="Name" />
        <input required type="email" name="email" placeholder="email" />
        <input required type="number" name="age" placeholder="age" />
        <button type="submit">Submit</button>
      </form>

      <p>{formState.name}</p>
      <p>{formState.email}</p>
      <p>{formState.age}</p>
    </div>
  );
};

export default ControlForm;
