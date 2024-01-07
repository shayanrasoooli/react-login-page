import React, { useState } from 'react';
import styled from "./ContactApp.module.css"

function ContactApp() {
    const [form , setForm] = useState({
        name : "" , 
        lastName : "" ,
        email : "" ,
        phone : "",
    });


    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm((form) => ({...form , [name] : value} ))
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form);
    }


    return (
        <form onSubmit={submitHandler}>
        <div className={styled.whole}>
        <h1 className={styled.contact}>Contact App</h1>

        <div className={styled.title}>
            <p className={styled.bootostart}>bootostart</p>
            <p>|</p>
            <p>React.js Full course</p>
        </div>

        <div className={styled.card}>
            <div className={styled.info1}>
                <input  type="text" name='name' placeholder='Name' className={styled.name} onChange={changeHandler} value={form.name}/>
                <input type="text" name='lastName' placeholder='Last Name' className={styled.lastName} onChange={changeHandler} value={form.lastName} />
            </div>
            <div className={styled.info2}>
                <input type="email" name='email' placeholder='Email' className={styled.email} onChange={changeHandler} value={form.email} />
                <input type="number" name='phone' placeholder='Phone' className={styled.phone} onChange={changeHandler} value={form.phone} />
            </div>
        <button className={styled.add} type='submit'>Add Card</button>
        </div>
         
        


        
        
        
        
        
        
        </div>
        </form>
    )
}

export default ContactApp;