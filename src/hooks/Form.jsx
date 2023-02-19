import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    nazwa: yup.string().required(),
    ulica: yup.string().required(),
    kod: yup.string().required(),
    nip: yup.string().min(10).max(10).required(),
    email: yup.string().email().required(),
    konto: yup.string().min(26).max(26).required(),
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
        nazwa: '',
        ulica: '',
        kod: '',
       nip: '',
       email: '',
       konto:'',

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
        placeholder='Nazwa...'
        {...register('nazwa')}
      />
      <p>{errors.nazwa?.message}</p>
      <input
        type='text'
        placeholder='Ulica...'
        {...register('ulica')}
      />
      <p>{errors.ulica?.message}</p>
      <input
        type='text'
        placeholder='Kod+Miejscowość...'
        {...register('kod')}
      />
      <p>{errors.kod?.message}</p>

      <input
        type='number'
        placeholder='Nip...'
        {...register('nip')}
      />
      <p>{errors.nip?.message}</p>
      <input
        type='email'
        placeholder='Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <input
        type='text'
        placeholder='Konto...'
        {...register('konto')}
      />
      <p>{errors.konto?.message}</p>
      <input
        type='submit'
        value={'Dodaj Sprzedawcę'}
      />
    </form>
  )
}
