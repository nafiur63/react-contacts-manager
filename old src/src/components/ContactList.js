import React from "react";

const ContactList = ({ contacts,deleteHandler }) => {
    // console.log(contacts)

    const deleteContact = (id) => {
        deleteHandler(id)
    }


  return (
    <div>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact,key) => {
              return(
              <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.mail}</td>
              <td>{contact.phone}</td>
              <td><button className="me-3" onClick={()=>{deleteContact(contact.id)}}><i className="fas fa-trash-alt"></i></button><button> <i className="far fa-edit"></i></button></td>
              </tr>)
              
              
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
