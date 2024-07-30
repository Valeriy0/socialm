import React, { useMemo, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const Addresses = () => {

    const [step, setStep] = useState(0)

    const renderContent = useMemo(() => {
        if (step === 0) {
            return (
                <div className="flex flex-col space-y-6 max-w-[432px]">
                    <span className="text-black-300">У вас нет сохранённых адресов.</span>
                    <Button onClick={() => setStep(1)} >Добавить адрес</Button>
                </div>   
            )
        }
        if (step === 1) {
            return (
                <div className="flex flex-col space-y-12">
                    <div className="flex flex-col space-y-6">
                        <Input title="Населенный пункт" placeholder="Введите населенный пункт"/>
                        <Input title="Улица и дом" placeholder="Введите улицу и номер дома"/>
                        <Input title="Кв./офис" placeholder="Квартира"/>
                        <Input title="Домофон" placeholder="Номер домофона"/>
                        <Input title="Подъезд" placeholder="Номер подъезда"/>
                        <Input title="Этаж" placeholder="Этаж"/>
                    </div>
                    <Button onClick={() => setStep(2)}>Сохранить адрес</Button>
                </div>
            );
        }
        if (step === 2) {
            return (
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-6 w-full p-6 bg-lightGray">
                        <div className="flex justify-between w-full">
                            <span className="text-xl text-black">Адрес 1</span>
                            <button className="flex space-x-1 items-center">
                                <span className="text-black-300 text-sm sm:text-xs">Удалить</span>
                                <img className="w-[11px] h-[11px]" src="/icons/cart/delete.svg"/>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-black">г. Краснодар, ул. Российская 256/4</span>
                            <span className="text-black-300">Квартира 16, Подъезд 2, Этаж 16</span>
                        </div>
                    </div>
                    <Button onClick={() => setStep(1)} >Добавить адрес</Button>
                </div>
            );
        }
    }, [step])

    return (
        <div className="max-w-[432px] w-full">
            {renderContent}
        </div>
    )
}