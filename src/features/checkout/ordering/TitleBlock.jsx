import React from "react";

export const TitleBlock = ({title, count }) => {
    return (
        <div className="flex w-full justify-between items-center h-[80px] bg-black w-[800px]  px-6">
            <span className="text-2xl text-white">{count}/3</span>
            <span className="text-white text-2xl">
                {title}
            </span>
            <img src="/icons/general/whiteArrow.svg"/>
        </div>
    )
}