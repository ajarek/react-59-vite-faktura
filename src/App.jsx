import {Routes,Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Facture from './pages/Facture/Facture'
import Home from './pages/Home/Home'
function App() {
  return <div className='App'>
    <Navigation/>
    <Routes>
    <Route
          path='/'
          element={<Home />}
        />
    <Route
          path='/facture'
          element={<Facture/>}
        />
    
    </Routes>
  </div>
}

export default App
