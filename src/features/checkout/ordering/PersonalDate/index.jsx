import React from "react";
import { TitleBlock } from "../TitleBlock";
import { Input } from "../../../../components/Input";


export const PersonalData = () => {
    return (
        <div className="flex flex-col space-y-12">
             <TitleBlock title={"Личные данные"} count={"1"} />
             <div className="flex flex-col space-y-6">
                <span className="text-2xl">Личные данные</span>
                <div className="grid grid-cols-2 gap-6">
                    <Input title="Имя*" placeholder="Введите имя"/>
                    <Input title="Фамилия*" placeholder="Введите Фамилию"/>
                    <Input title="Телефон*" placeholder="+"/>
                    <Input title="email*" placeholder="email@email.com"/>
                </div>
             </div>
        </div>
    )
}