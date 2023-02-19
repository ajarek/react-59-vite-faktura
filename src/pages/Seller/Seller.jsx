import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { Form } from '../../hooks/Form'
import './Seller.css'

const Seller = () => {
  const {seller, setSeller} = useContext(AppContext)

  const onSubmit = (data) => {
    const newSeller = {
      email: data.email,
      kod: data.kod,
      konto:data.konto,
      nazwa: data.nazwa,
      nip:data.nip,
      ulica:data.ulica
    }
   setSeller(newSeller)
  }
  console.log(seller);
  return (
    <div className='seller'>
      <h2>Dodaj Sprzedawcę</h2>
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default Seller
