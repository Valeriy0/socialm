import React from "react";

export const ProfieTitle = ({title}) => {
    return (
        <div className="flex items-end w-full justify-between">
            <span className="text-2xl text-black font-medium leading-none">{title}</span>
        </div>
    )
}