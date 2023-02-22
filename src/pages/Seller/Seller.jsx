import { React, useContext } from 'react'
import { AppContext } from '../../App'
import { Form } from '../../hooks/Form'
import './Seller.css'

const Seller = () => {
  const { setSeller, navigate } = useContext(AppContext)

  const onSubmit = (data) => {
    const newSeller = {
      email: data.email,
      kod: data.kod,
      konto: data.konto,
      nazwa: data.nazwa,
      nip: data.nip,
      ulica: data.ulica,
    }
    setSeller(newSeller)
    navigate('/buyer')
  }

  return (
    <div className='seller'>
      <h2>Dodaj Sprzedawcę</h2>
      <Form
        onSubmit={onSubmit}
        label={'Dodaj Sprzedawcę'}
      />
    </div>
  )
}

export default Seller
