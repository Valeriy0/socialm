import React from "react";

export const Orders = () => {
    return (
        <div className="flex w-full justify-between p-6">
            <div className="flex justify-between h-[153px] w-full bg-lightGray p-6">
                <div className="flex space-x-12">
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex space-x-3">
                            <div className="flex space-x-1">
                                <span className="text-black-300 font-medium">№</span>
                                <span className="text-black ">3928110</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-[#ECECEC] px-3 h-6">
                                <span className="text-black-300 text-sm font-light leading-none">в обработке</span>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="flex flex-col space-y-1">
                                <span className="text-2xl font-medium">5 май</span>
                                <span className="text-xs text-black-300">Дата заказа</span>
                            </div>
                            <img className="mb-4" src="/icons/orders/path.svg" />
                            <div className="flex flex-col space-y-1">
                                <span className="text-2xl font-medium">12 май</span>
                                <span className="text-xs text-black-300">Доставлено</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex space-x-1 text-sm font-medium">
                            <span className="text-black-300">Состав</span>
                            <span className="text-black"> / 4 шт.</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="flex items-center justify-center bg-[#ECECEC] w-[60px] h-[60px]">
                                <img className="w-[40.2px] h-[42.8px]" src="/images/main/catalog/1.png"/>
                            </div>
                            <div className="flex items-center justify-center bg-[#ECECEC] w-[60px] h-[60px]">
                                <img className="w-[40.2px] h-[42.8px]" src="/images/main/catalog/1.png"/>
                            </div>
                            <div className="flex items-center justify-center bg-[#ECECEC] w-[60px] h-[60px]">
                                <img className="w-[40.2px] h-[42.8px]" src="/images/main/catalog/1.png"/>
                            </div>
                            <div className="flex items-center justify-center bg-[#ECECEC] w-[60px] h-[60px]">
                                <img className="w-[40.2px] h-[42.8px]" src="/images/main/catalog/1.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full items-end justify-between">
                    <button className="flex space-x-1 items-center">
                        <span className="text-black-300 text-sm sm:text-xs">Отменить</span>
                        <img className="w-[11px] h-[11px]" src="/icons/cart/delete.svg"/>
                    </button>
                    <div className="flex flex-col space-y-[5px] items-end">
                        <span className="text-sm text-black-300">Сумма</span>
                        <span className="text-xl tex-black font-medium">7990 ₽</span>

                    </div>
                </div>
            </div>
        </div>
    )
}