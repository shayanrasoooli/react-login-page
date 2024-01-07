import React, { useState } from 'react'

import ContactList from "./ContactList";

// import inputs from "../constants/inputs"
import inputs from "../constants/inputs"
import { v4 } from 'uuid';
import styles from "./contacts.module.css";


function Contact() {
    const [contacts , setContacts] = useState([]);
    const [alert , setAlert] = useState('');
    const [contact , setContact] = useState({
        id : "",
        name : "" , 
        lastName : "" , 
        email : "" , 
        phone:"",
    })


    const changeHandler = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        setContact(contact => ({...contact , [name] : value}));
        
    }
    const addHandler = () => {
        if(!Contact.name ||	!contact.lastName || !contact.email || !contact.phone ){
            setAlert('please enter a valid data!');
            return;
        }
        setAlert("");
            const newContact = { ...contact , id : v4() };
        setContacts((contacts) => [...contacts , newContact]);
        setContact({
            name : "" , 
            lastName : "" , 
            email : "" , 
            phone:"",
        })
        
        

    }

    const deleteHandler = (id) => {
            const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {
                    inputs.map((input , index) => (<input key={index} type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler} />))
                }
                {/* <input type="text" placeholder='Name'  value={contact.name}  onChange={changeHandler} name='name'/>
                <input type="text" placeholder='Last Name' value={contact.lastName}  onChange={changeHandler} name='lastName'/>
                <input type="text" placeholder='Email' value={contact.email}  onChange={changeHandler} name='email'/>
                <input type="number" placeholder='Phone'  value={contact.phone}  onChange={changeHandler} name='phone'/> */}
                <button onClick={addHandler}>Add Contact</button>
            </div>

            <div className={styles.alert}>
                {alert && <p>{alert}</p> }
            </div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    )
}

export default Contact
