import React from "react";

export const Button = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={`flex items-center justify-center bg-black h-[60px] w-full text-base text-white ${className} `}>
            {children}
        </button>
    )
}