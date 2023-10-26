'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import TitleCustom from '../../components/TitleCustom'
import PrimaryButton from '../../components/PrimaryButton'
import { createSmartTask, createTask, getTasks } from '@/api/user/taskService'
import CardTask from '@/app/components/CardTask'
import { CardType } from '@/app/types/components/CardType'
import InputCustom, { TextAreaCustom } from '@/app/components/InputCustom'
import { IconLogout } from '@tabler/icons-react'
import { CreateNewTaskType, SmartForm } from '@/app/types/createTaskType'
import { THandleForm } from '@/app/types/handleForm'
import { PencilSquareIcon, SparklesIcon, } from '@heroicons/react/24/outline'
import protectedPage from '@/app/utils/middleware'
import { Spinner } from 'react-activity'

const CheckList = () => {
    protectedPage()
    const [dataForm, setDataForm] = useState<CreateNewTaskType>({
        title: '',
        description: '',

    })
    const [changes, setChanges] = useState(false)
    const [smartForm, setSmartForm] = useState<SmartForm>({
        country: '',
        date: '',

    })
    const [smart, setSmart] = useState(false)
    const [tasks, setTasks] = useState<CardType[]>([])
    useEffect(() => {
        (async () => {
            let data = await getTasks()

            setTasks(data)
        }
        )()
    }, [changes])


    const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createTask({ ...dataForm, status: false })
        }
        catch (err) {
            throw new Error('Error creating task')
        }
        setChanges(!changes)
        setDataForm({
            title: '',
            description: '',

        })
    }

    const handleMagic = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await createSmartTask(smartForm)
        }
        catch (err) {
            throw new Error('Error')
        }
        setChanges(!changes)
        setSmartForm({
            country: '',
            date: '',

        })
    }


    const handleChange = ({ target: { value, name } }: THandleForm) => {
        setDataForm((previousValue) => {
            const newValue = { ...previousValue }
            newValue[name as keyof CreateNewTaskType] = value
            return newValue
        })
    }
    const handleSmartChange = ({ target: { value, name } }: THandleForm) => {
        setSmartForm((previousValue) => {
            const newValue = { ...previousValue }
            newValue[name as keyof SmartForm] = value
            return newValue
        })
    }
if(!tasks.length){
    return(
        <div className='min-h-screen flex justify-center items-center'>
<Spinner color="#00a3d7"/>
        </div>
    )
}


    return (
        <main className="">
            <a className='text-primary-800 text-sm items-center gap-2 absolute right-5 top-4 flex' href='/auth/login' onClick={() => { localStorage.removeItem('devacas-token') }}><p className='hidden lg:block'>Logout</p><IconLogout color='#066686' stroke={0.8} /></a>
            <div className="flex flex-col px-10 ">
                <div className="flex lg:justify-between flex-col lg:flex-row items-center">
                    <div className='mt-5'>
                        <TitleCustom title="Tus tareas" />
                    </div>

                </div>
            </div>
            <div className='flex gap-8 flex-row flex-wrap justify-around px-8'>

                {
                    tasks.map((task, i) => (

                        <CardTask {...task} key={i} />

                    ))
                }

                <form className='w-full' onSubmit={handleCreate}>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <p className='text-primary-600 font-semibold text-lg'>Agrega una tarea antes de ese viaje</p>
                        <div onClick={() => setSmart(!smart)} className='bg-primary-200 px-3 flex items-center justify-center my-3 lg:my-0 lg:mb-2 gap-3 rounded-full cursor-pointer  py-2 lg:py-1'>
                            <p className='text-primary-700 '> {smart ? 'Ya no quiero ayuda' : 'Te ayudamos con tu lista'}</p>
                            {smart ? <PencilSquareIcon color='#066686' width={20} /> : <SparklesIcon color='#066686' width={20} />}
                        </div>
                    </div>
                    {smart ?
                        <div className='flex gap-2 flex-col lg:flex-row items-center mb-10'>
                            <InputCustom placeholder='A donde nos vamos?' value={smartForm.country} name='country' onChange={handleSmartChange} />
                            <InputCustom placeholder='¿Cuánto tiempo?' value={smartForm.date} name='date' onChange={handleSmartChange} />
                            <PrimaryButton name='magia' title='Agregar' type='button' onClick={handleMagic} />
                        </div>
                        :
                        <div>



                            <div className='hidden lg:flex w-full items-center gap-2 '>
                                <InputCustom placeholder='Titulo de la tarea' value={dataForm.title} name='title' onChange={handleChange} />
                                <PrimaryButton name='agregar' title='Agregar' type='submit' />
                            </div>
                            <div className='w-full block lg:hidden'>
                                <InputCustom placeholder='Titulo de la tarea' value={dataForm.title} name='title' onChange={handleChange} />
                            </div>
                            <TextAreaCustom placeholder='Algún detalle que debamos recordar?' value={dataForm.description} name='description' onChange={handleChange} />
                            <div className='mb-4 block lg:hidden'>
                                <PrimaryButton name='agregar' title='Agregar' type='submit' />
                            </div>
                        </div>
                    }
                </form>
            </div>
        </main>
    )
}

export default CheckList
