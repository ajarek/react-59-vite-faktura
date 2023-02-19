import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { Form } from '../../hooks/Form'
import './Transaction.css'

const Transaction = () => {
  const {buyer, setBuyer} = useContext(AppContext)

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
  }
  console.log(buyer);
  return (
    <div className='transaction'>
      <h2>Dodaj Transakcję</h2>
      <Form onSubmit={onSubmit} label={'Dodaj Transakcję'}/>
    </div>
  )
}

export default Transaction
