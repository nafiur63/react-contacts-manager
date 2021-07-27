import React, { useState } from "react";

const AddContacts = ({ addContactHandler }) => {
  const [contacts, setContacts] = useState({
    name: '',
    mail: '',
    phone: ''
  });

  const add = (e) => {
    e.preventDefault();
//    if(contacts.name||contacts.mail||contacts.phone===""){
//        alert("All fields must be filled!")
//        return;
//    }
    addContactHandler(contacts)
    setContacts({
        name: '',
        mail: '',
        phone: ''})
  };

  const changeHandler = (e) => {
        setContacts({...contacts,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <h2 className="text-center">Add Contacts</h2>
      <form onSubmit={add}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="John Doe"
            value={contacts.name}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>E-Mail</label>
          <input
            type="email"
            className="form-control"
            name="mail"
            placeholder="johndoe@mail.com"
            value={contacts.mail}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="012-34567890"
            value={contacts.phone}
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-success mb-3">Add</button>
      </form>
    </div>
  );
};

export default AddContacts;
