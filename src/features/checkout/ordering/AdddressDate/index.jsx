import React from "react";
import { Input } from "../../../../components/Input";
import { TitleBlock } from "../TitleBlock";

export const AddressDate = () => {
    return (
        <div className="flex flex-col space-y-12">
            <TitleBlock title={"Адрес и доставка"} count={"2"} />
            <div className="flex flex-col space-y-6">
                <span className="text-2xl">Адрес доставки</span>
                <div className="grid grid-cols-2 gap-6">
                    <Input title="Населенный пункт" placeholder="Введите населенный пункт"/>
                    <Input title="Улица и дом" placeholder="Введите улицу и номер дома"/>
                    <Input title="Кв./офис" placeholder="Квартира"/>
                    <Input title="Домофон" placeholder="Номер домофона"/>
                    <Input title="Подъезд" placeholder="Номер подъезда"/>
                    <Input title="Этаж" placeholder="Этаж"/>
                </div>
            </div>
        </div>
    )
}