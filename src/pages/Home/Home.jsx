import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import {FormDate} from '../../hooks/FormDate'
import './Home.css'
const Home = () => {
  const {dataTransaction, setDataTransaction,navigate} = useContext(AppContext)
  const onSubmit = (data) => {
    const newData = {
      wystaw: data.wystaw,
      sprzed: data.sprzed,
      nr:data.nr,
      way:data.way,
      termin:data.termin
    }
    setDataTransaction(newData)
    navigate("/seller");
  }
  
  return (
    <div className='home'>
      <h2>Dodaj dane transakcji</h2>
      <FormDate onSubmit={onSubmit} label={'Zapisz Dane Transakcji'}/>
    </div>
  )
}

export default Home