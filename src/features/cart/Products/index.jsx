import React from "react";

export const Products = () => {
    return (
            <div className="flex justify-between bg-lightGray w-full max-w-[888px] px-6 py-6 sm:px-4 sm:py-4">
                <div className="flex items-center space-x-6 ">
                    <div className="flex items-center justify-center ">
                        <img className="h-[100px] sm:h-[57.1px] sm:w-[53.6px]" src="/images/main/catalog/1.png" />
                    </div>
                    <div className="flex flex-col space-y-6 sm:space-y-4">
                        <div className="flex flex-col space-y-3 sm:space-y-2">
                            <span className="text-black-300 leading-none sm:text-xs">Stain Worldwide</span>
                            <span className="text-xl text-black font-semibold leading-none sm:text-sm">Лонгслив Join</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex space-x-3 items-center justify-center">
                                <button className="w-6 h-6 flex items-center justify-center bg-[#ECECEC] rounded-full">
                                    <span className="leading-none">-</span>
                                </button>
                                <span className="text-sm">44</span>
                                <button className="w-6 h-6 flex items-center justify-center bg-[#ECECEC] rounded-full">
                                    <span className="leading-none">+</span>
                                </button>
                            </div>
                            <div className="flex space-x-2">
                                <span className="text-sm text-black-300 sm:text-xs">Размер</span>
                                <span className="text-sm text-black font-semibold sm:text-xs">L</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col items-end justify-between">
                    <button className="flex space-x-1 items-center">
                        <span className="text-black-300 text-sm sm:text-xs">Удалить</span>
                        <img className="w-[11px] h-[11px]" src="/icons/cart/delete.svg"/>
                    </button>
                    <span className="text-xl text-black font-medium sm:text-base">
                        7990 ₽
                    </span>
                </div>
            </div>
    )
}