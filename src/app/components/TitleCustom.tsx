import React from 'react'

interface TitleProps {
    title: string;
}

const TitleCustom = ({ title }: TitleProps) => {
    return (
        <h1
            className="text-6xl font-title text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-600 mb-5 lg:mb-10"
        >
            {title}
        </h1>

    )
}

export default TitleCustom


