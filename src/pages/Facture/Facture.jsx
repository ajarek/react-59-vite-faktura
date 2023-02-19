import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Facture.css'
import Table from '../../components/Table/Table'
const Facture = () => {
  const {seller, setSeller} = useContext(AppContext)

  const newNip=String(seller.nip)
  const formattedNipNumber =
  newNip.slice(0, 3) +
  '-' +
  newNip.slice(3, 6) +
  '-' +
  newNip.slice(6, 8) +
  '-' +
  newNip.slice(8, 10);

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
    <div className='facture'>
      <div className="header">
        <p>Data wystawienia <span>2023-02-17</span></p>
        <p>Data sprzedaży <span>2023-02-17</span></p>
      </div>
      <div className="nr">
        <h1>Faktura nr: <span>3/02/2023</span></h1>
      </div>
      <div className="facture-wrapper">
      <div className="sprzedawca">
        <div className="title"><h2>Sprzedawca</h2></div>
        <div className="name">{seller.nazwa}</div>
        <div className="address">{seller.ulica}</div>
        <div className="city"><span>{seller.kod}</span></div>
        <div className="nip">NIP: <span>{formattedNipNumber}</span></div>
        <div className="email">e-mail: <span>{seller.email}</span></div>
        <div className="cont">Nr konta: <span>{formattedKontoNumber}</span></div>
      </div>
      <div className="nabywca">
        <div className="title"><h2>Nabywca</h2></div>
        <div className="name">Vacat</div>
        <div className="address">ul.Wielkopolska 2a</div>
        <div className="city"><span>78-100</span>Kołobrzeg</div>
        <div className="nip">NIP: <span>671-130-09-81</span></div>
        <div className="email">e-mail: <span>cacat@onet.pl</span></div>
      </div>
      </div>
      <Table/>
       <div className="signature">
        <div className="exhibitor">------------------------------- <br /> osoba upoważniona do wystawienia </div>
        <div className="recipient">------------------------------- <br /> osoba upoważniona do odbioru </div>
       </div>
    </div>
  )
}

export default Facture