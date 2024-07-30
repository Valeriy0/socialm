import React from "react";
import { Link } from 'react-router-dom';

export const Menu = () => {
    const menuItem = [
        {
            title: 'Новинки',
            link: '',
        },
        {
            title: 'Бренды',
            link: '',
        },
        {
            title: 'Одежда',
            link: '/catalog',
        },
        {
            title: 'Обувь',
            link: '',
        },
        {
            title: 'Аксессуары',
            link: '',
        },
        {
            title: <span className="text-[#FF4040]">Sale</span>,
            link: '',
        }
    ]
    return (
        <div className="flex space-x-12 items-center sm:hidden">
            {menuItem.map((item, itemIndex) => {
                return (
                    <Link to={item?.link} key={itemIndex} className="z-[111] hover:text-white cursor-pointer">
                        <span className="text-black font-medium">{item?.title}</span>
                    </Link>
                )
            })}
        </div>
    )
}