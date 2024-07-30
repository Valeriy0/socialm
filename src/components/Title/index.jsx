import React from "react";

export const Title = ({children, className}) => {
    return (
        <span className={`text-[32px] text-black leading-10 font-semibold sm:leading-5 ${className}`}>
            {children}
        </span>
    )
}