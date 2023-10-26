'use client'

import InputCustom from '@/app/components/InputCustom'
import PrimaryButton from '@/app/components/PrimaryButton'
import TitleCustom from '@/app/components/TitleCustom'
import MainLayout from '@/app/components/layout/MainLayout'
import request from '@/app/utils/request'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { THandleForm } from '@/app/types/handleForm'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/api/auth/authService'
import { ILoginType } from '@/app/types/authType'
import { loginSchema } from '@/app/utils/validation/auth'
import { useUserStore } from '@/app/store/userStore'
import moment from 'moment'



const Login = () => {
  const router = useRouter()
  const [dataForm, setDataForm] = useState<ILoginType>({
    email: '',
    password: ''
  })
  const [error, setError] = useState<string[]>([])

  const handleChange = ({ target: { value, name } }: THandleForm) => {
    setDataForm((previousValue: ILoginType) => {
      const newValue = { ...previousValue }
      newValue[name as keyof ILoginType] = value
      return newValue
    })
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      let data = await loginUser(await loginSchema.validateSync(dataForm))
      if (data.token) {
        await useUserStore.setState({
          user: { ...data.record }
        });
        await localStorage.setItem('devacas-token', data.token);
        router.push('/user/checklist')
      }
    }
    catch (error: any) {

      if (error.error) {
        //validation errors
        setError(error.error || error)
      }
      else if(error.message) {
        setError(['Hubo un error con tu cuenta'])
      }

    }
  }



  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Image alt='logo' src={'/images/devacas.png'} width={180} height={10} className='absolute bottom-0 left-0 w-1/5 lg:w-[180px]  ' />
      <div className="flex flex-col justify-center items-center  px-10  lg:px-24 lg:w-2/3 mx-auto">
        <TitleCustom title="Iniciar sesión" />
        <form onSubmit={handleLogin}>
          <InputCustom name="email" placeholder='Email' value={dataForm.email} onChange={handleChange} />
          <InputCustom name="password" placeholder='Password' type='password' value={dataForm.password} onChange={handleChange} />
          <a className='text-primary-800 text-xs lg:text-sm' href={'/auth/signup'}> Aun no estás registrado? Registrate</a>
          {
            error
            && error.map((err,i) => <p  key={i} className='text-red-500 text-sm text-right'>{err}</p>)}
          <div className="my-6 w-full flex justify-center">
            <PrimaryButton title='Iniciar sesión' type={'submit'} name='sesion' />
          </div>
        </form>
      </div>

      <Image src='/images/traveling.svg' alt="TravelingImage" width={400} height={250} className={'absolute hidden lg:block bottom-0 right-0 left-0 lg:left-auto mx-auto md:w-1/2 lg:w-1/4'} />
      <p className='text-primary-900 font-extralight absolute bottom-5 right-0 left-0 text-center text-sm md:text-md'>© Copyright - DeVacas 2023</p>
    </div>
  )
}

export default Login
