'use client'
import React, { useState } from "react"
import { Dots } from "react-activity";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;

}

const PrimaryButton = ({ name, title, onClick, type }: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    const handleOnClick = async () => {
        setLoading(!loading)
        await onClick
        setLoading((prev) => !prev);
    }

    return (
        <button name={name} type={type} onClick={handleOnClick} className="bg-primary-100 hover:lg:scale-110 text-center items-center transition-all flex justify-center gap-2  duration-300 ease-in-out text-primary-600 px-8 py-3 border border-primary-500 hover:bg-primary-700 hover:text-primary-50 rounded-md w-full lg:min-w-[150px] lg:w-fit h-12">
            {loading?<Dots color="#00a3d7"/>:title}
        </button>
    )
}

export default PrimaryButton