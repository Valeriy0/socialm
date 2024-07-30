import React from "react";

export const Sorting = ({className}) => {
    return (
        <div className={`flex items-center rounded-full w-[249px] h-[40px] ${className}  px-6 sm:w-[146px] sm:space-x-3`}>
            <span className="font-light sm:text-sm">Сортировка</span>
            <img src="/icons/sorting/arrow.svg"/>
        </div>
    )
}