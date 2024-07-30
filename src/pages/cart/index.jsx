import React from "react";
import { CatalogLayout } from "../../layouts/CatalogLayout";
import { Title } from "../../components/Title";
import { Products } from "../../features/cart/Products";
import { OrderPrice } from "../../features/cart/OrderPrice";

export const Cart = () => {
    return (
        <CatalogLayout>
            <div className="flex flex-col space-y-12 items-center">
                <Title className={'sm:mt-[40px]'}>Корзина</Title>
                <div className="flex flex-col w-full items-center space-y-3">
                    <Products />
                    <Products />
                    <Products />
                </div>
                <Title className="sm:!mt-[40px]">Сумма заказа</Title>
                <OrderPrice />

            </div>

        </CatalogLayout>
    )
}