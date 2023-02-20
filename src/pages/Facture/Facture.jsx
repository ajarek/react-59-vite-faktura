import { React, useState, useContext, useEffect,useRef } from 'react'
import { AppContext } from '../../App'
import './Facture.css'
import Table from '../../components/Table/Table'
import { useReactToPrint } from 'react-to-print'


const Facture = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {seller, setSeller,buyer, setBuyer,dataTransaction, setDataTransaction} = useContext(AppContext)
  const dateFormat=(dateNew)=>{
  const date = new Date(dateNew);
  const day = date.getDate()
  const month=date.toLocaleDateString('en-US', { month: 'numeric' })
  const year = date.getFullYear()
  return `${day<10?'0'+day:day}-${month<10?'0'+month:month}-${year}`
}
  const newNip=String(seller.nip)
  const newNipBuyer=String(buyer.nip)
  const formattedNipNumber =(str)=>{
  return ( 
  str.slice(0, 3) +
  '-' +
  str.slice(3, 6) +
  '-' +
  str.slice(6, 8) +
  '-' +
  str.slice(8, 10)
  )
}
const newKonto=String(seller.konto)
 const formattedKontoNumber =
  newKonto.slice(0, 2) +
  ' ' +
  newKonto.slice(2, 6) +
  ' ' +
  newKonto.slice(6, 10) +
  ' ' +
  newKonto.slice(10, 14)+
  ' ' +
  newKonto.slice(14, 18)+
  ' ' +
  newKonto.slice(18, 22)+
  ' ' +
  newKonto.slice(22, 26);

  return (
    
    <div className='facture' ref={componentRef}>  
      <div className="header"  >
        <p>Data wystawienia <span style={{fontFamily:'monospace',fontSize:'1.1rem'}}>{dateFormat(dataTransaction.wystaw)}</span></p>
        <p>Data sprzedaży <span style={{fontFamily:'monospace',fontSize:'1.1rem'}}>{dateFormat(dataTransaction.sprzed)}</span></p>
      </div>
      <div className="nr">
        <h1>Faktura nr: <span>{dataTransaction.nr}</span></h1>
      </div>
      <div className="facture-wrapper">
      <div className="sprzedawca">
        <div className="title"><h2>Sprzedawca</h2></div>
        <div className="name">{seller.nazwa}</div>
        <div className="address">{seller.ulica}</div>
        <div className="city"><span>{seller.kod}</span></div>
        <div className="nip">NIP: <span>{ formattedNipNumber(newNip)}</span></div>
        <div className="email">e-mail: <span>{seller.email}</span></div>
        <div className="cont">Nr konta: <span>{formattedKontoNumber}</span></div>
      </div>
      <div className="nabywca">
        <div className="title"><h2>Nabywca</h2></div>
        <div className="name">{buyer.nazwa}</div>
        <div className="address">{buyer.ulica}</div>
        <div className="city"><span>{buyer.kod}</span></div>
        <div className="nip">NIP: <span>{formattedNipNumber(newNipBuyer)}</span></div>
        <div className="email">e-mail: <span>{buyer.email}</span></div>
      </div>
      </div>
      <Table/>
       <div className="signature">
        <div className="exhibitor">------------------------------- <br /> osoba upoważniona do wystawienia </div>
        <div className="recipient">------------------------------- <br /> osoba upoważniona do odbioru </div>
       </div>
       <div className='print'>
       <button onClick={handlePrint}>Zapisz do PDF lub wydrukuj!</button>
       </div>
    </div>

    
  )
}

export default Facture

