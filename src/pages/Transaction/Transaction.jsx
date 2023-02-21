import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { FormTransaction } from '../../hooks/FormTransaction'
import './Transaction.css'

const Transaction = () => {
  const {detalTransaction, setDetalTransaction,navigate} = useContext(AppContext)

  const onSubmit = (data) => {
    const newTransaction = {
      towar: data.towar,
      ilosc: data.ilosc,
      miara: data.miara,
      netto: data.netto,
      vat: data.vat,
    }
   setDetalTransaction([...detalTransaction, newTransaction])
   navigate("/facture");
  }
  return (
    <div className='transaction'>
      <h2>Dodaj Transakcję</h2>
      <FormTransaction onSubmit={onSubmit} label={'Dodaj Transakcję'}/>
    </div>
  )
}

export default Transaction
