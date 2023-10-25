'use client'
import React, { useState } from 'react'
import { CardType } from '../types/components/CardType'
import { editTask } from '@/api/user/taskService'

const CardTask = ({ title, description, status, id }: CardType) => {
  const [state, setState] = useState(status || false)
  const handleEdit = async () => {
    try {
      setState(!state)
      await editTask({
        title: title,
        description: description,
        status: !state
      }, id)
    }
    catch (error) {
      throw new Error('error')
    }
  }
  return (
    <div className='border rounded-md w-full border-primary-300  px-5 py-3'>
      <div className='flex justify-between'>

        <div className='flex flex-col lg:flex-row'>

          <p className='text-black/60 '>{title}</p>
          <p className='text-primary-600 w-fit my-3 lg:mx-5 bg-primary-200 px-2 rounded-full text-sm text-center lg:my-auto py-1'>Estado: {state ? "Hecho" : "Pendiente"}</p>
        </div>
        <div onClick={handleEdit} >
          <input type="checkbox" defaultChecked={status} className="
        peer relative appearance-none shrink-0 w-4 h-4 border-2 border-primary-200 rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-primary-100
        checked:bg-primary-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      " />
        </div>
      </div>
      {
        description ? <>
          <p className='text-black/50 underline'>Anotaciones</p>
          <p className='text-black/50'>{description}</p>
        </> : null
      }

    </div>
  )
}

export default CardTask
