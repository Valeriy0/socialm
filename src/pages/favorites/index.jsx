import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../components/Title";
import { CatalogLayout } from "../../layouts/CatalogLayout";
import { ProductCard } from "../../components/ProductCard";

export const Favorites = () =>{
    return (
        <CatalogLayout>
            <div className="flex flex-col space-y-12 items-center">
                <Title className={'sm:mt-[40px]'}>Избранное</Title>
                <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-3 w-full ">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </CatalogLayout>
    )
}