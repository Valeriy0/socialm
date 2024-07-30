import React from "react";

export const Item = ({img, title, desc, link}) => {
    return (
        <div className="flex flex-col space-y-6">
            <img className="max-w-[448px] sm:max-w-full" src={`/images/main/brandCollection/${img}.png`}/>
            <div className="flex flex-col space-y-2 sm:px-4 sm:py-6">
                <span className="text-[32px] text-black font-bold">{title}</span>
                <div className="flex flex-col space-y-3">
                    <span className="font-light">New Collection 2024</span>
                    <span className="text-sm max-w-[320px] font-light text-black-300">{desc}</span>
                    <a href={`${link}`} className="underline">Перейти</a>
                </div>
            </div>
        </div>
    )
}