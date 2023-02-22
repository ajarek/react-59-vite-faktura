import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormTransaction = ({ onSubmit, label }) => {
  const schema = yup.object().shape({
    towar: yup.string().required(),
    ilosc: yup.string().required(),
    miara: yup.string().required(),
    netto: yup.string().required(),
    vat: yup.string().required(),
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
        towar: '',
        ilosc: '',
        miara: '',
        netto: '',
        vat: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='text'
        placeholder='Nazwa Towaru/Usługi...'
        {...register('towar')}
      />
      <p>{errors.towar?.message}</p>
      <input
        type='number'
        placeholder='Ilość...'
        {...register('ilosc')}
      />
      <p>{errors.ilosc?.message}</p>
      <input
        type='text'
        placeholder='Jednostka Miary...'
        {...register('miara')}
      />
      <p>{errors.miara?.message}</p>
      <input
        type='number'
        placeholder='Cena netto...'
        {...register('netto')}
        step={'0.01'}
      />
      <p>{errors.netto?.message}</p>
      <label htmlFor=''>Wybierz stawkę Vat</label>
      <select {...register('vat')}>
        <option value='23'>23%</option>
        <option value='8'>8%</option>
        <option value='0'>0%</option>
      </select>
      <p>{errors.select?.message}</p>

      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
