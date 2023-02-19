import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Table.css'
const Table = () => {
  const {detalTransaction} = useContext(AppContext)
  console.log(detalTransaction);
  return (
    <div className='table'>
      <table>
    <thead>
        <tr>
            <th>Lp.</th>
            <th>Nazwa Towaru</th>
            <th>Ilość</th>
            <th>Jm</th>
            <th>Cena<br/> netto</th>
            <th>Vat</th>
            <th>Kwota <br/> netto</th>
            <th>Kwota <br/> VAT</th>
            <th>Kwota <br/> brutto</th>
            
        </tr>
    </thead>
    <tbody>
      {detalTransaction.map((transaction,index) => {
        return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{transaction.towar}</td>
            <td>{transaction.ilosc}</td>
            <td>{transaction.miara}</td>
            <td>{(+transaction.netto).toFixed(2)}</td>
            <td>{transaction.vat}%</td>
            <td>{(transaction.ilosc*transaction.netto).toFixed(2)}</td>
            <td>{(transaction.ilosc*transaction.netto*23/100).toFixed(2)}</td>
            <td>{((transaction.ilosc*transaction.netto)+(transaction.ilosc*transaction.netto*23/100)).toFixed(2)}</td>
            
        </tr>
        )
      })}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="9">SUMA: <span>{detalTransaction.reduce((acc,item)=>(acc+(item.netto*item.ilosc*1.23)),0).toFixed(2)}</span></td>
      </tr>
    </tfoot>
</table>
   <table className='small-table'>
    <thead>
      <tr>
 <th>Stawka VAT</th>
 <th>Netto</th>
 <th>VAT</th>
 <th>Brutto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>23%</td>
        <td>3000.00</td>
        <td>690.00</td>
        <td>3690.00</td>
      </tr>
      <tr>
        <td>Razem</td>
        <td>3000.00</td>
        <td>690.00</td>
        <td>3690.00</td>
      </tr>
    </tbody>
    </table>
    <div className="payment-wrapper">
    <div className="method-payment">Sposób zapłaty <span>przelew</span></div>    
    <div className="date-payment">Termin zapłaty <span>14 dni 2023-03-03</span></div> 
     
    <div className="all-payment"><h3>Razem do zapłaty: <span>3690.00</span>PLN</h3></div>
    <div className="amount-words">Kwota słownie: <span>trzy tysiące sześćset dziewięćdziesiąt</span> PLN <span>00/100</span></div>
    </div> 
    </div>
  )
}

export default Table