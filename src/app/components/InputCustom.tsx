import React from 'react'
import { InputType, TextAreaType } from '../types/components/InputType'


const InputCustom = ({ name, placeholder, type, onChange, value}:InputType) => {
    return (

            <input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} className="bg-transparent border placeholder:font-light border-primary-300 text-primary-800 focus:border-primary-600 w-full focus:outline-none rounded-md px-2 h-12 my-2" />

    )
}

export const TextAreaCustom  = ({ name, placeholder, onChange, value}:TextAreaType) => {
    return (

        <textarea name={name} onChange={onChange} value={value} placeholder={placeholder} className="bg-transparent border placeholder:font-light border-primary-300 text-primary-800 focus:border-primary-600 w-full focus:outline-none rounded-md p-2 h-12 my-2 " />

)
}

export default InputCustom


