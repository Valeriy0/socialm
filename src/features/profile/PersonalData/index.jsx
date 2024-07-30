import React from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const PersonalData = () => {
    return (
        <div className="flex flex-col space-y-12 max-w-[432px]">
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">Личная информация</span>
                <div className="flex flex-col ">
                    <Input placeholder="Имя*" />
                    <Input placeholder="Фамилия*" />
                    <Input placeholder="Отчество" />
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">Дата рождения</span>
                <div className="flex flex-col space-y-3 ">
                    <Input placeholder="__ / __ / ____" />
                    <span className="text-sm text-black-300">Будем дарить вам подарки</span>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">Телефон*</span>
                <div className="flex flex-col space-y-3 ">
                    <Input placeholder="+" />
                    <span className="text-sm text-black-300">Номер телефона необходим для оформления заказа</span>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">email*</span>
                <div className="flex flex-col space-y-3 ">
                    <Input placeholder="+" />
                    <span className="text-sm text-black-300">Получайте информацию о состоянии статуса ваших заказов</span>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">Город</span>
                <Input placeholder="Город" />
            </div>
            <div className="flex flex-col space-y-3">
                <span className="text-xl text-black ">Страна</span>
                <Input placeholder="Страна" />
            </div>
            <Button>Сохранить</Button>
        </div>
    )
}