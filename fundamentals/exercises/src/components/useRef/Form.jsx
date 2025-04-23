import React, { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef(null);
  const [para, setPara] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    setSubmittedData(data);
    formRef.current.reset();
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input required type="text" name="name" placeholder="Name" />
        <input required type="email" name="email" placeholder="email" />
        <input required type="number" name="age" placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
