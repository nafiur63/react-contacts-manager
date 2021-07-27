import React, { useEffect, useRef, useState } from "react";

const ContactList = ({ contacts,deleteHandler }) => {
    // console.log(contacts)

    const deleteContact = (id) => {
        deleteHandler(id)
    }

    const [newcontacts, setNewcontacts] = useState([])
    const [search, setSearch] = useState('')

    const inputElement = useRef('')


    const getSearchTerm = () => {
      setSearch(inputElement.current.value)
      console.log(search)
    }

    // if(search.length<1){
    //   let contactsGot=contacts
    // }else{
    //   let contactsGot = newcontacts
    // }


    useEffect(() => {
      const searchHandler = () => {
        if(search ==="")
        {
         setNewcontacts([])
        }
        else {
          const newContactList = contacts.filter((contact)=>{
            return (Object.values(contact).join("")).toLowerCase().includes(search.toLowerCase())
          })
      
          setNewcontacts(newContactList)    
        }  
      }
      searchHandler()
      // console.log(contactsGot)
      console.log(newcontacts)
    }, [search])

    // const searchHandler = () => {
    //   setSearch(inputElement.current.value)
    //   console.log(search)
    //       if(search==="")
    //       {
    //         contactsGot=contacts
    //       }
    //       else {
    //         const newContactList = contacts.filter((contact)=>{
    //           return (Object.values(contact).join("")).toLowerCase().includes(search.toLowerCase())
    //         })
        
    //         setNewcontacts(newContactList)
    //         contactsGot=newcontacts
    //         console.log(newcontacts)
    //       }  
    //     }


    

  return (
      <div>
      <div className="input-group mb-3">
      <input ref={inputElement} onChange={getSearchTerm} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search Users</button>
      </div>

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
          {newcontacts.length<1?(contacts.map((contact,key) => {
              return(
              <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.mail}</td>
              <td>{contact.phone}</td>
              <td><button className="me-3" onClick={()=>{deleteContact(contact.id)}}><i className="fas fa-trash-alt"></i></button><button> <i className="far fa-edit"></i></button></td>
              </tr>)
          })):(newcontacts.map((contact,key) => {
            return(
            <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.mail}</td>
            <td>{contact.phone}</td>
            <td><button className="me-3" onClick={()=>{deleteContact(contact.id)}}><i className="fas fa-trash-alt"></i></button><button> <i className="far fa-edit"></i></button></td>
            </tr>)}))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
