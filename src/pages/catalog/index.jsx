import React from "react";
import { Sorting } from "../../components/Sorting";
import { ProductCard } from "../../components/ProductCard";
import { Filters } from "../../components/Filters";
import { Title } from "../../components/Title";
import { CatalogLayout } from "../../layouts/CatalogLayout";

export const Catalog = () => {
    const catalogList = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    ]
    return (
        <CatalogLayout>
            <div className="flex space-x-[80px] sm:space-x-0 ">
                <Filters />
                <div className="flex flex-col space-y-[56.5px] items-start w-full sm:space-y-6">
                    <div className="flex items-center justify-between w-full sm:flex-col-reverse sm:items-start">
                        <Title className={'sm:!mt-6'}>Мужская одежда</Title>
                        <div className="flex justify-between items-center sm:px-[30px] sm:w-full">
                            <div className="flex items-center justify-center space-x-3 h-[30px] hidden sm:flex">
                                <span className="text-sm"> Фильтр</span>
                                <img src="/icons/filters/filterIcon.svg"/>
                            </div>
                            <Sorting className={'shadowMobSort'} />
                        </div>
                    </div>
                    <div className="grid grid grid-cols-3 gap-6 w-full sm:grid-cols-2 sm:gap-3">
                        {catalogList.map((item, itemIndex) => {
                            return (
                                <ProductCard />
                            )
                        })}  
                    </div>               
                </div>
            </div>
        </CatalogLayout>
    )
}