import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormDate = ({ onSubmit,label }) => {
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
     
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
