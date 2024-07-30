import React from "react";

export const Filters = () => {
    return (
        <>
            <div className="flex flex-col space-y-[60px] items-start min-w-[263px] sm:hidden">
                <span className="text-black-300 text-sm font-light mt-[15px]">Каталог / Мужское</span>
                    <div className="flex flex-col items-start justify-start space-y-6 w-full">
                        <span className="text-2xl font-semibold">Фильтр</span>
                        <div className="flex flex-col w-full space-y-3">
                            <button className="flex w-full justify-between items-center">
                                <span className="text-lg">Бренд</span>
                                <img className="w-3.5 h-3.5" src="/icons/general/arrowbot.svg"/>
                            </button>
                            <button className="flex w-full justify-between items-center">
                                <span className="text-lg">Категория</span>
                                <img className="w-3.5 h-3.5" src="/icons/general/arrowbot.svg"/>
                            </button>
                            <button className="flex w-full justify-between items-center">
                                <span className="text-lg">Пол</span>
                                <img className="w-3.5 h-3.5" src="/icons/general/arrowbot.svg"/>
                            </button>
                            <button className="flex w-full justify-between items-center">
                                <span className="text-lg">Цвет</span>
                                <img className="w-3.5 h-3.5" src="/icons/general/arrowbot.svg"/>
                            </button>
                            <button className="flex w-full justify-between items-center">
                                <span className="text-lg">Размер</span>
                                <img className="w-3.5 h-3.5" src="/icons/general/arrowbot.svg"/>
                            </button>
                            <button className="flex flex-col w-full space-y-6">
                                <span className="text-lg">Цена</span>
                                <div className="flex space-x-[64px]">
                                    <div className="flex space-x-2 items-center font-light">
                                        <span className="text-black-300 text-lg">От</span>
                                        <span className="text-lg">₽2000</span>
                                    </div>
                                    <div className="flex space-x-2 items-center font-light">
                                        <span className="text-black-300 text-lg">До</span>
                                        <span className="text-black-300 text-lg">₽2000</span>
                                    </div>

                                </div>
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}