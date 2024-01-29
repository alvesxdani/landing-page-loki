import React, { ButtonHTMLAttributes } from 'react'

type ButtonT = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: 'full' | 'outline'
  size: "small" | "medium" | "large";
}

const Button = ({ children, theme, size }: ButtonT) => {
  return (
    <button
      className={`rounded-md hover:brightness-110
      ${
        theme === 'full'
          ? 'bg-sky-500 font-bold'
          : theme === 'outline'
          ? 'bg-transparent border border-sky-500'
          : ''
      } 
      ${size === 'small' ? 'py-2 px-4' :
        size === 'medium' ? 'py-4 px-8' : ''}
      `}
    >
      {children}
    </button>
  )
}

export default Button
