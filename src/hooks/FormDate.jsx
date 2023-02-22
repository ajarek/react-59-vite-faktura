import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormDate = ({ onSubmit,label }) => {
  const schema = yup.object().shape({
    wystaw: yup.date().required(),
    sprzed: yup.date().required(),
    nr: yup.string().required(),
    way: yup.string().required(),
    termin: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        wystaw: '',
        sprzed: '',
        nr: '',
        way:'',
       termin:'',

      })
    }
  }, [formState, reset])
  
  const [selectValue, setSelectValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSelectValue(value);
  };
  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
      Data wystawienia
      <input
        type='date'
        {...register('wystaw')}
      />
      </label>
      <p>{errors.wystaw?.message}</p>
      <label>
      Data sprzedaży
      <input
        type='date'
        {...register('sprzed')}
      />
      </label>
      <p>{errors.sprzed?.message}</p>
      <label>
      Nr faktury
      <input
        type='text'
        {...register('nr')}
      />
      </label>
      <p>{errors.nr?.message}</p>
      <label htmlFor="">Wybierz sposób zapłaty</label>
      <select 
       
           
          {...register('way')}
        > 
         
          <option value='gotówka'>Gotówka</option>
          <option  value='przelew'>Przelew</option>         
          <option value='karta'>Karta</option>     
        </select>
        <p>{errors.way?.message}</p>

        
        <label htmlFor="">Wybierz termin zapłaty(dotyczy przelewu)
        </label>
        <select
          {...register('termin')}
        >
          <option value='7'>7 dni</option>
          <option value='14'>14 dni</option>
          <option value='30'>30 dni</option>     
        </select>
        <p>{errors.termin?.message}</p>
        
        
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
