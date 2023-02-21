import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Table.css'
const Table = () => {
  const {detalTransaction,dataTransaction} = useContext(AppContext)
  const [vat23,setVat23]=useState([])
  const [vat8,setVat8]=useState([])
  const [vat0,setVat0]=useState([])

  detalTransaction?.map((trans,index) => {
    if (trans.vat ==='23'){vat23.push(trans.netto*trans.ilosc)}
    if (trans.vat ==='8'){vat8.push(trans.netto*trans.ilosc)}
    if (trans.vat ==='0'){vat0.push(trans.netto*trans.ilosc)}
  })
console.log(dataTransaction)
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
      {detalTransaction?.map((transaction,index) => {
       
        console.log(detalTransaction)
        return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{transaction.towar}</td>
            <td>{transaction.ilosc}</td>
            <td>{transaction.miara}</td>
            <td>{(+transaction.netto).toFixed(2)}</td>
            <td>{transaction.vat}%</td>
            <td>{(transaction.ilosc*transaction.netto).toFixed(2)}</td>
            <td>{(transaction.ilosc*transaction.netto*transaction.vat/100).toFixed(2)}</td>
            <td>{((transaction.ilosc*transaction.netto)+(transaction.ilosc*transaction.netto*transaction.vat/100)).toFixed(2)}</td>
            
        </tr>
        )
      })}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="9">SUMA: <span>{detalTransaction?.reduce((acc,item)=>(acc+(item.netto*item.ilosc*(1+item.vat/100))),0).toFixed(2)}</span></td>
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
    {vat23.length>0?
   
    <tr>    
        <td>23%</td>
        <td>{(vat23.reduce((acc,item)=>(acc+(item)),0)).toFixed(2)}</td>
        <td>{(vat23.reduce((acc,item)=>(acc+(item)*23/100),0)).toFixed(2)}</td>
        <td>{(vat23.reduce((acc,item)=>(acc+(item)*1.23),0)).toFixed(2)}</td>       
      </tr>
      :null
}
{vat8.length>0?
   
   <tr>    
       <td>8%</td>
       <td>{(vat8.reduce((acc,item)=>(acc+(item)),0)).toFixed(2)}</td>
       <td>{(vat8.reduce((acc,item)=>(acc+(item)*8/100),0)).toFixed(2)}</td>
       <td>{(vat8.reduce((acc,item)=>(acc+(item)*1.08),0)).toFixed(2)}</td>       
     </tr>
     :null
}
{vat0.length>0?
   
   <tr>    
       <td>0%</td>
       <td>{(vat0.reduce((acc,item)=>(acc+(item)),0)).toFixed(2)}</td>
       <td>{(vat0.reduce((acc,item)=>(acc+(item)*0/100),0)).toFixed(2)}</td>
       <td>{(vat0.reduce((acc,item)=>(acc+(item)*1),0)).toFixed(2)}</td>       
     </tr>
     :null
}
      <tr>
        <td>Razem</td>
        <td>{detalTransaction?.reduce((acc,item)=>(acc+(item.netto*item.ilosc)),0).toFixed(2)}</td>
        <td>{detalTransaction?.reduce((acc,item)=>(acc+(item.netto*item.ilosc*item.vat/100)),0).toFixed(2)}</td>
        <td>{detalTransaction?.reduce((acc,item)=>(acc+(item.netto*item.ilosc*(1+item.vat/100))),0).toFixed(2)}</td>
      </tr>
    </tbody>
    </table>
    <div className="payment-wrapper">
    <div className="method-payment">Sposób zapłaty <span>{dataTransaction.way}</span></div>    
    <div className="date-payment">Termin zapłaty <span>{dataTransaction.termin} dni 2023-03-03</span></div> 
     
    <div className="all-payment"><h3>Razem do zapłaty: <span>{detalTransaction?.reduce((acc,item)=>(acc+(item.netto*item.ilosc*(1+item.vat/100))),0).toFixed(2)}</span>PLN</h3></div>
    {/* <div className="amount-words">Kwota słownie: <span>trzy tysiące sześćset dziewięćdziesiąt</span> PLN <span>00/100</span></div> */}
    </div> 
    </div>
  )
}

export default Table