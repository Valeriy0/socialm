import React from "react";

export const Footer = () => {
    return (
        <div className="w-full flex justify-between font-semibold text-4xl bg-black py-[60px] pl-[40px] pr-[54px] sm:py-[32px] sm:flex-col sm:pl-4 sm:pr-4 sm:space-y-6  ">
                <div className="flex flex-col justify-between h-full sm:w-full sm:order-last sm:flex-row sm:justify-between sm:items-end">
                    <img className="w-[140px] sm:w-[90px] h-8" src="/icons/footer/logoIcon.svg"/>
                    <span className="text-sm text-white-400 font-light">© Social Market, 2024</span>
                </div>
                <div className="flex flex-col space-y-6">
                    <span className="text-white uppercase text-base font-medium">Разделы</span>
                    <div className="flex flex-col space-y-3">
                        <a className="text-sm text-white-400 font-light">Новинки</a>
                        <a className="text-sm text-white-400 font-light">Бренды</a>
                        <a className="text-sm text-white-400 font-light">Одежда</a>
                        <a className="text-sm text-white-400 font-light">Обувь</a>
                        <a className="text-sm text-white-400 font-light">Аксессуары</a>
                        <a className="text-sm text-white-400 font-light">Sale</a>
                    </div>
                </div>
                <div className="flex flex-col justify-between sm:absolute sm:right-4 sm:space-y-6 ">
                    <div className="flex flex-col space-y-6">
                        <span className="text-white uppercase text-base font-medium">Адрес магазина</span>
                        <span className="text-sm text-white-400 font-light">Москва, Каретный Ряд, 8</span>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="text-white uppercase text-base font-medium">Контакты</span>
                        <div className="flex flex-col space-y-3">
                            <span className="text-sm text-white-400 font-light">+7 (495) 544-57-70</span>
                            <span className="text-sm text-white-400 font-light">+7 (495) 544-57-70</span>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col space-y-6">
                <span className="text-white uppercase text-base font-medium">Поддержка</span>
                <div className="flex flex-col space-y-3">
                    <a className="text-sm text-white-400 font-light">Помощь покупателю</a>
                    <a className="text-sm text-white-400 font-light">Доставка и оплата</a>
                    <a className="text-sm text-white-400 font-light">Возврат</a>
                    <a className="text-sm text-white-400 font-light">Пользовательское соглашение</a>
                    <a className="text-sm text-white-400 font-light">Политика о конфиденциальности</a>
                </div>
            </div>
            <div className="hidden sm:flex border-[1px] w-full border-white-100 "></div>
            <div className="flex flex-col space-y-6 sm:items-center sm:pb-6">
                <span className="text-white uppercase text-base font-medium">Социальные сети</span>
                <div className="flex space-x-6">
                    <a target="blank" href="">
                        <img src="/icons/footer/socialMedia/telegramIcon.svg"/>
                    </a>
                    <a target="blank" href="">
                        <img src="/icons/footer/socialMedia/instagramIcon.svg"/>
                    </a>
                    <a target="blank" href="">
                        <img src="/icons/footer/socialMedia/discordIcon.svg"/>
                    </a>
                    <a target="blank" href="">
                        <img src="/icons/footer/socialMedia/twitterIcon.svg"/>
                    </a>
                </div>
            </div>
        </div>
    )
}