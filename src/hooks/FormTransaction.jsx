import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = ({ onSubmit,label }) => {
  const schema = yup.object().shape({
    wystaw: yup.date().required(),
    sprzed: yup.date().required(),
    nr: yup.string().required(),
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

      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='date'
        placeholder='Data wystawienia...'
        {...register('wystaw')}
      />
      <p>{errors.wystaw?.message}</p>
      <input
        type='date'
        placeholder='Data sprzedaży...'
        {...register('sprzed')}
      />
      <p>{errors.sprzed?.message}</p>
      <input
        type='text'
        placeholder='Nr faktury...'
        {...register('nr')}
      />
      <p>{errors.nr?.message}</p>
     
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
