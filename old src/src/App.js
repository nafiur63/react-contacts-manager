import { useEffect, useState } from 'react';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {

  // const contacts = [
  //   {
  //     id:1,
  //     name:"John",
  //     mail:"john@mail.com",
  //     phone:"01817021213"
  //   },
  //   {
  //     id:2,
  //     name:"John",
  //     mail:"john@mail.com",
  //     phone:"01817021213"
  //   },
  //   {
  //     id:3,
  //     name:"John",
  //     mail:"john@mail.com",
  //     phone:"01817021213"
  //   },
  //   {
  //     id:4,
  //     name:"John",
  //     mail:"john@mail.com",
  //     phone:"01817021213"
  //   },
  // ]

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] =useState([])

  let num=contacts.length

  const addContactHandler = (contact) => {
        setContacts([...contacts,{id:num+1,...contact}])
  }
  useEffect(() => {
    const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveData) setContacts(retrieveData)
  }, [])  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id
    })

    setContacts(newContactList)
  }
  

  return (
    <div className="container">
    <Header/>
    <h1>Currently you have {num} contacts</h1>
    {/* <AddContacts  addContactHandler={addContactHandler}/>
     */}
    <AddContacts  addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} deleteHandler={removeContactHandler}/> 
    {/* {console.log(contacts)} */}
    </div>
  );
}

export default App;
