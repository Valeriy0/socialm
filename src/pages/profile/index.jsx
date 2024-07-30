import React, { useState }  from "react";
import { Title } from "../../components/Title";
import { BaseLayout } from "../../layouts/BaseLayout";
import { UserInfo } from "../../features/profile/LeftBar/UserInfo";
import { ProfieTitle } from "../../features/profile/ProfieTitle";
import { PersonalData } from "../../features/profile/PersonalData";
import { Addresses } from "../../features/profile/Addresses";
import { Orders } from "../../features/profile/Orders";


export const Profile = () => {

    const [currentTab, setCurrentTab] = useState(0);

    const menuItems = [
        {
            title: 'Мои заказы',
            content: [
                {
                    title: 'Заказы',
                    aa: <Orders />
                }
            ]
        },
        {
            title: 'Личные данные',
            content: [
                {
                    title: 'Настройки профиля',
                    aa: <PersonalData />
                }
            ]
        },
        {
            title: 'Мои адреса',
            content: [
                {
                    title: 'Адреса доставки',
                    aa: <Addresses />
                }
            ]
        },
    ]

    return (
        <BaseLayout>
            <div className="flex space-x-6 w-full">
                <div className="flex flex-col space-y-12 w-full max-w-[432px]">
                    <Title>Личный кабинет</Title>
                    <UserInfo />
                    <div className="flex flex-col w-full">
                        {menuItems.map((item, itemIndex) => {
                            const isActive = currentTab === itemIndex
                            return (
                                <button onClick={() => setCurrentTab(itemIndex)} className={`flex items-center px-6 ${isActive ? 'bg-lightGray text-black' : 'text-black-300'} h-[80px] w-full`}>
                                    <span className="text-2xl">{item?.title}</span>
                                </button>
                                )
                            })}
                    </div>
                </div>
                    {menuItems[currentTab].content.map((item, itemIndex) => {
                        return (
                            <div className="flex flex-col w-full space-y-[56px]">
                                <ProfieTitle title={item?.title}/>
                                {item?.aa}
                            </div>
                        )
                    })}
            </div>
        </BaseLayout>
    )
}