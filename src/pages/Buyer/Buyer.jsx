import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { Form } from '../../hooks/Form'
import './Buyer.css'

const Buyer = () => {
  const {buyer, setBuyer,navigate} = useContext(AppContext)

  const onSubmit = (data) => {
    const newBuyer = {
      email: data.email,
      kod: data.kod,
      konto:data.konto,
      nazwa: data.nazwa,
      nip:data.nip,
      ulica:data.ulica
    }
   setBuyer(newBuyer)
   navigate("/transaction");
  }
  
  return (
    <div className='buyer'>
      <h2>Dodaj Nabywcę</h2>
      <Form onSubmit={onSubmit} label={'Dodaj Nabywcę'}/>
    </div>
  )
}

export default Buyer
