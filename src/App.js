import React, {useEffect, useState} from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import Header from './Components/Header'
import ContactList from './Components/ContactList'

function App() {
const Local_storage_Key = 'contacts';
const [contacts, setContacts]= useState([]);

const addContactHandler =(contact)=>{
  console.log(contact);
  setContacts([...contacts, contact])
}
useEffect(() => {
  console.log('Attempting to retrieve data from localStorage...');
  try {
    const retrive = JSON.parse(localStorage.getItem(Local_storage_Key));
    if (retrive) {
      console.log('Data retrieved from localStorage:', retrive);
      setContacts(retrive);
    } else {
      console.log('No data found in localStorage.');
    }
  } catch (error) {
    console.error('Error parsing data from localStorage:', error);
  }
}, []);


useEffect(()=>{
  localStorage.setItem(Local_storage_Key, JSON.stringify(contacts))
  
}, [contacts])

 
  return (
   <div className='ui container'> 
  <Header />
  <AddContact addContactHandler={addContactHandler}/>
  <ContactList contacts={contacts} />
   </div>
  );
}

export default App;
