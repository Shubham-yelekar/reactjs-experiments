import React, { useState } from "react";

const Contact = () => {
  return <Form />;
};

function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="firstName"
          placeholder="Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="lastName"
          placeholder="Last"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>First Name : {formData.firstName}</h1>
      <h1>Last Name : {formData.lastName}</h1>
      <h1>Email ID : {formData.email}</h1>
    </>
  );
}

export default Contact;
