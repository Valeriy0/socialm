import React from "react";

export const Menu = () => {
    return (
        <div className="flex flex-col w-full">
            <button className="flex items-center px-6 bg-lightGray h-[80px] w-full">
                <span className="text-2xl">Мои заказы</span>
            </button>
            <button className="flex items-center px-6 bg-lightGray h-[80px] w-full">
                <span className="text-2xl">Личные данные</span>
            </button>
            <button className="flex items-center px-6 bg-lightGray h-[80px] w-full">
                <span className="text-2xl">Мои адреса</span>
            </button>
        </div>
    )
}