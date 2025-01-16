import React from 'react'
import Button from './Button'

interface TextContentProps {
    caption?: string
    heading: string
    description: string
    buttonText?: string
}

const TextContent: React.FC<TextContentProps> = ({caption, heading, description, buttonText}) => {
    return (
        <div className="space-y-5">
            {caption && <h4 className="text-emerald-600 font-bold uppercase">{caption}</h4>}
            <h1 className="font-bold text-3xl">{heading}</h1>
            <p>{description}</p>
            {buttonText && <Button className="bg-green-700 text-white py-3 px-6 rounded-md">{buttonText}</Button>}
        </div>
    )
}

export default TextContent
