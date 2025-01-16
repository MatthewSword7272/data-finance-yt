import React from 'react'

type ButtonProps = React.HTMLProps<HTMLButtonElement>

export default function Button({onClick, children, className}: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}
