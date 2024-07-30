import React from "react";

export const OrderInfo = () => {
    return (
        <div className="flex flex-col items-start w-full max-w-[432px]">
            <div className="flex justify-between items-end w-full">
                <div className="flex space-x-1 items-end">
                    <span className="text-2xl font-medium">Ваш заказ</span>
                    <span className="text-black font-medium mb-[2px]">/</span>
                    <span className="text-black font-medium mb-[1px]">6 шт</span>
                </div>
                <button className="flex items-center justify-center">
                    <span className="text-black-300 text-sm">Изменить</span>
                </button>
            </div>
            <div className="grid grid-cols-3 mt-6 gap-3">
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray]">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
                <div className="flex items-center justify-center w-[136px] h-[136px] bg-lightGray">
                    <img className="h-[89px] w-[84px]" src="/images/main/catalog/1.png" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 mt-12 w-full">
                <span className="text-black text-2xl font-medium">Сумма заказа</span>
                <div className="flex w-full">
                    <input className="w-full h-[60px] bg-lightGray pl-4 placeholder:font-light placeholder:black-300 placeholder:text-sm" placeholder="Введите промокод"></input>
                    <button className="h-full bg-black w-full">
                        <span className="text-white">Применить</span>
                    </button>
                </div>
                <div className="flex flex-col w-full space-y-4 sm:space-y-3">
                    <div className="flex flex-col space-y-2 sm:space-y-1">
                        <div className="flex w-full justify-between">
                            <span className="text-sm font-light text-black-300 whitespace-nowrap leading-none">Стоимость продуктов</span>
                            <span className="font-light text-black font-medium whitespace-nowrap value leading-none sm:text-base">7990 ₽</span>
                        </div>
                        <div className="flex w-full justify-between">
                            <span className="text-sm font-light text-black-300 whitespace-nowrap leading-none">Доставка</span>
                            <span className="font-light text-black font-medium whitespace-nowrap leading-none sm:text-base ">590 ₽</span>
                        </div>
                        <div className="flex w-full justify-between">
                            <span className="text-sm font-light text-[#FF4040] whitespace-nowrap leading-none">Скидка</span>
                            <span className="font-light text-[#FF4040] font-medium whitespace-nowrap leading-none sm:text-base">- 1300 ₽</span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <span className="text-xl font-light text-black font-medium whitespace-nowrap leading-none">Итого</span>
                        <span className="text-xl font-light text-black font-mediumwhitespace-nowrap">6690 ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
}