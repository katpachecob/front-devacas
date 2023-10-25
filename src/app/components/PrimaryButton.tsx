import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;

}

const PrimaryButton = ({ name, title, onClick, type }: ButtonProps) => {
    return (
        <button name={name} type={type} onClick={onClick} className="bg-primary-100 hover:lg:scale-110 text-center items-center transition-all flex justify-center gap-2  duration-300 ease-in-out text-primary-600 px-8 py-3 border border-primary-500 hover:bg-primary-700 hover:text-primary-50 rounded-md w-full lg:w-fit h-12">
            {title}
        </button>
    )
}

export default PrimaryButton