'use client'
import { registerUser } from '@/api/auth/authService'
import InputCustom from '@/app/components/InputCustom'
import PrimaryButton from '@/app/components/PrimaryButton'
import TitleCustom from '@/app/components/TitleCustom'
import { IRegisterType } from '@/app/types/authType'
import { THandleForm } from '@/app/types/handleForm'
import { registerSchema } from '@/app/utils/validation/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const SignUp = () => {
  const router = useRouter()
  const [dataForm, setDataForm] = useState<IRegisterType>({
    email: '',
    password: '',
    fullname: '',
  })
  const [error, setError] = useState<string[]>([])

  const handleChange = ({ target: { value, name } }: THandleForm) => {
    setDataForm((previousValue) => {
      const newValue = { ...previousValue }
      newValue[name as keyof IRegisterType] = value
      return newValue
    })
  }


  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      let data = await registerUser(await registerSchema.validateSync(dataForm))
      if (data) {
        router.push('/user/login')
      }
    }
    catch (error:any) {
    if (error.error) {
        //validation errors
        setError(error.error || error)
      }
      else if(error.message) {
        setError(['Hubo un al registrar tu cuenta'])
      }

    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Image alt='logo' src={'/images/devacas.png'} width={180} height={10} className='absolute bottom-0 right-0 w-1/5 lg:w-[180px]' />
      <div className="flex flex-col justify-center  items-center px-10  lg:px-24 lg:w-2/3 mx-auto">

        <TitleCustom title="Registrarse" />
        <form onSubmit={handleRegister}>
          <InputCustom value={dataForm.fullname} onChange={handleChange} name="fullname" placeholder='Fullname' />
          <InputCustom value={dataForm.email} onChange={handleChange} name="email" placeholder='Email' />
          <InputCustom value={dataForm.password} onChange={handleChange} name="password" placeholder='Password' type='password' />
          <a className='text-primary-800 text-sm' href={'/auth/login'}> Ya estás registrado? Ingresá</a>
          {
            error
             && error.map(err => <p className='text-red-500 text-sm text-right'>{err}</p>)}
          <div className="my-6 w-full flex justify-center">
            <PrimaryButton title='Registrarse' type='submit' name='sesion' />
          </div>
        </form>

      </div>
      <Image src='/images/traveling.svg' alt="TravelingImage" width={400} height={250} className={'absolute hidden lg:block bottom-0 right-0 left-0 lg:right-auto mx-auto  w-1/2 lg:w-1/4'} />
      <p className='text-primary-900 font-extralight absolute bottom-5 right-0 left-0 text-center'>© Copyright - DeVacas 2023</p>
    </div>
  )
}

export default SignUp
