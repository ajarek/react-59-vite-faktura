import { useState, createContext } from 'react'
import {Routes,Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Facture from './pages/Facture/Facture'
import Home from './pages/Home/Home'
import Seller from './pages/Seller/Seller'
import Buyer from './pages/Buyer/Buyer'
import Transaction from './pages/Transaction/Transaction'
export const AppContext = createContext()
function App() {
  const [seller, setSeller] = useState({
    email: 'kaufland@gmail.com',
    kod: '78-100 Kołobrzeg',
    konto: '24845873541854269874521345',
    nazwa: 'Kaufland',
    nip:6711547895,
    ulica:'Młyńska 9'
  })
  const [buyer, setBuyer] = useState({
    email: 'vacat@gmail.com',
    kod: '78-100 Kołobrzeg',
    konto: '24845873541854269874521345',
    nazwa: 'Firma Vacat',
    nip:6711300981,
    ulica:'Różana 36'
  })
  const [dataTransaction, setDataTransaction] = useState({
    wystaw: '2023.02.11',
    sprzed: '2023.02.10',
    nr: '01/02/2023',
  })
  const [detalTransaction, setDetalTransaction] = useState([{
        towar:null|| 'Telewizor HDR',
        ilosc:null|| '2',
        miara:null|| 'szt',
        netto:null|| '2400',
        vat:null|| '23',
  }])
  
  return <div className='App'>
     <AppContext.Provider value={{seller, setSeller,buyer, setBuyer,dataTransaction, setDataTransaction, detalTransaction, setDetalTransaction}}>
    <Navigation/>
    <Routes>
    <Route
          path='/'
          element={<Home />}
        />
    <Route
          path='/seller'
          element={<Seller />}
        />
    <Route
          path='/buyer'
          element={<Buyer />}
        />
    <Route
          path='/transaction'
          element={<Transaction />}
        />
    <Route
          path='/facture'
          element={<Facture/>}
        />
    
    </Routes>
    </AppContext.Provider>
  </div>
}

export default App
