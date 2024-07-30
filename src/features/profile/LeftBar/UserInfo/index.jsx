import React from "react";

export const UserInfo = () => {
    return (
        <div className="flex space-x-4">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-lightGray rounded-full">
                <span className="text-2xl text-black-300">ИВ</span>
            </div>
            <div className="flex flex-col space-y-2.5">
                <span className="text-xl text-black font-medium">Иван Васильев</span>
                <div className="flex space-x-2">
                    <span className="text-sm text-black font-medium">Кэшбек</span>
                    <span className="text-sm text-black-300 font-light">Баланс:</span>
                    <span className="text-sm text-black font-medium">10000 ₽</span>
                </div>
            </div>
        </div>
    )
}