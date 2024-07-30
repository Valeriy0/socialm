import React from "react";
import { Link } from "react-router-dom";

export const RightMenu = () => {
    return (
        <div className="flex items-center jsutify-between space-x-3">
            <button className="sm:hidden">
                <img src="/icons/header/searchIcon.svg"/>
            </button>
            <Link to={'/favorites'}>
                <img src="/icons/header/favoritesIcon.svg"/>
            </Link>
            <Link to={'/cart'} className="flex items-center justify-center bg-black rounded-full w-[64px] h-8 space-x-1">
                <img className="z-[11]" src="/icons/header/basketIcon.svg"/>
                <span className="text-white font-extralight text-sm">12</span>
            </Link>
            <Link to={'/profile'}>
                <img src="/icons/header/accountIcon.svg"/>
            </Link>
            <button className="hidden sm:flex flex-col h-[16px] justify-between">
                <div className="w-[22px] h-[2px] bg-black"></div>
                <div className="w-[22px] h-[2px] bg-black"></div>
                <div className="w-[22px] h-[2px] bg-black"></div>
            </button>
        </div>
    )
}