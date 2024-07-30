import React, { useState } from "react";
import { Input } from "../../../../components/Input";
import { TitleBlock } from "../TitleBlock";

export const Payment = () => {

    const [ isSwitch, setIsSwitch ] = useState(false);
    const paymentMethods = [
        {
            title: 'СБП',
            img: 'sbp',
            content: 
            <div>
                Нету дизайна
            </div>
        },
        {
            title: 'Оплата онлайн',
            img: 'online',
            content: 
            <div className="flex flex-col space-y-6 px-7 w-full">
                <Input title="Номер карты" placeholder="xxxx xxxx xxxx xxxx" />
                <div className="flex space-x-3 w-full">
                    <Input title="Срок" placeholder="мм / гг"/>
                    <Input title="CVC / CVV" placeholder="xxx"/>
                </div>
                <div className="flex space-x-6 items-center">
                    <div className="flex flex-col space-y-1">
                        <span className="text-black">Сохранить карту для покупок</span>
                        <span className="text-black-300 text-sm">Безопасно, данные зашифрованные</span>
                    </div>
                    <button onClick={() => setIsSwitch(!isSwitch)} className={`flex items-center relative w-[60px] h-[32px] bg-black rounded-full px-0.5`}>
                        <div className={`absolute bg-white h-[28px] w-[28px] rounded-full ${isSwitch ? 'right-0.5' : 'left-0.5'}`} />
                    </button>
                </div>
            </div>
        },
        {
            title: 'Долями',
            img: 'share',
            content: 
            <div>
                Нету дизайна
            </div>
        },
    ]

    const [currentTab, setCurrentTab] = useState(1);
    return (
        <div className="flex flex-col space-y-12">
            <TitleBlock title={"Оплата"} count={"3"} />
            <div className="flex flex-col space-y-6">
                <span className="text-2xl">Способ оплаты</span>
                <div className="flex flex-col space-y-6">
                    <div className="w-full flex flex-col space-y-6 ">
                        {paymentMethods.map((item, itemIndex) => {
                            const isActive = itemIndex === currentTab;
                            return ( 
                                    <div className="flex flex-col space-y-6">
                                        <div className="flex items-center justify-between w-full" key={itemIndex}>
                                            <div className="flex space-x-3 items-center">
                                                <button onClick={() => setCurrentTab(itemIndex)} className={`rounded-full w-4 h-4 border border-black border-[1px] ${isActive ? 'bg-black' : ''}`}/>
                                                <span className="text-xl font-medium">{item?.title}</span>
                                            </div>
                                            <img src={`/icons/payment/${item?.img}.svg`}/>
                                        </div>
                                        {isActive && 
                                            <div>
                                                {item?.content}
                                            </div>
                                        }
                                    </div>
                                    )
                                })}
                    </div>
                </div>
               
            </div>
            <button className="flex items-center justify-center bg-black w-full h-[60px]">
                <span className="text-white">Оплатить</span>
            </button>
        </div>
    )
}