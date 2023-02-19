import { useState, createContext } from 'react'
import {Routes,Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Facture from './pages/Facture/Facture'
import Home from './pages/Home/Home'
import Seller from './pages/Seller/Seller'
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
  return <div className='App'>
     <AppContext.Provider value={{seller, setSeller}}>
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
          path='/facture'
          element={<Facture/>}
        />
    
    </Routes>
    </AppContext.Provider>
  </div>
}

export default App
