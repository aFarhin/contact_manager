import React from 'react'
import contact from '../Images/contact.jpg'

const ContactCard=(props)=> {
    const {id, name, email} = props.contact;
  return (
    <div className='item'>
    <img className='ui avatar image' src={contact} alt="contact"/>
    <div className='content'>
        <div className='header'>{id}. {name}</div>
        <div>{email}
        <i  className='trash alternate outline icon'  style={{color: 'red', marginTop:'7px'}}></i>
        </div>
        </div>
</div>

  )
}

export default ContactCard