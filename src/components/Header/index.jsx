import React from "react";
import { Menu } from "./menu";
import { RightMenu } from "./rightMenu";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="flex w-full justify-between fixed top-0 h-[72px] bg-white py-5 px-11 sm:px-4 headerShadow z-[111]">
            <Link to="/">
                <img className="w-[90px] h-8" src="/icons/header/logoIcon.svg"/>
            </Link>
            <Menu />
            <RightMenu />
        </div>
    )
}