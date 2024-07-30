import React, { useMemo, useState } from "react";
import { Sorting } from "../../../components/Sorting";
import { ProductCard } from "../../../components/ProductCard";
import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";


export const Catalog = () => {
    const [isShowAll, setIsShowAll] = useState(false);

    const catalog = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    ]

    const catalogItem = useMemo(() => { 
        if (isShowAll) {
            return catalog;
        }
        return catalog.slice(0, 8);
    }, [isShowAll, catalog])

    return (
        <div className="flex flex-col space-y-12 w-full mt-[120px] sm:px-4 sm:mt-10">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-end space-x-[10px]">
                    <Title>Каталог</Title>
                    <img className="hidden sm:flex" src="/icons/general/arrowBot.svg" />
                </div>
                <Sorting className={'shadowSort'} />
            </div>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-3 ">
                {catalogItem.map((item, itemIndex) => {
                    return (
                       <ProductCard />
                    )
                })}
            </div>
            <Button onClick={() => setIsShowAll(prev => !prev)}>
                {isShowAll ? 'Скрыть' : 'Смотреть еще'}
            </Button>
        </div>
    )
}