import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../components/Title";
import { PersonalData } from "../../features/checkout/ordering/PersonalDate";
import { AddressDate } from "../../features/checkout/ordering/AdddressDate";
import { Payment } from "../../features/checkout/ordering/Payment";
import { OrderInfo } from "../../features/checkout/orderInfo";

export const Checkout = () => {
    return (
        <BaseLayout>
            <Title className={"mb-12"}>Оформление заказа</Title>
            <div className="flex w-full justify-between">
                <div className="flex flex-col space-y-12 w-full justify-between max-w-[800px]">
                    <PersonalData />
                    <AddressDate /> 
                    <Payment />
                </div>
                <OrderInfo />
            </div>
        </BaseLayout>
    )
}