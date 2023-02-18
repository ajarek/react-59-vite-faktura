import React from 'react'
import './Facture.css'
import Table from '../../components/Table/Table'
const Facture = () => {
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
        <div className="name">MediaExpert SA</div>
        <div className="address">ul. Trzebiatowska 37</div>
        <div className="city"><span>78-100</span>Kołobrzeg</div>
        <div className="nip">NIP: <span>671-387-11-19</span></div>
        <div className="email">e-mail: <span>media@onet.pl</span></div>
        <div className="cont">Nr konta: <span>84248000032301111161812004</span></div>
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