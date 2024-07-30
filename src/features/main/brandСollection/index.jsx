import React from "react";
import { Item } from "./item";
import { Title } from "../../../components/Title";

export const BrandCollection = ({img, title, desc, link}) => {
    return (
        <div className="flex flex-col space-y-12 w-full mt-[120px] sm:mt-15 sm:space-y-7">
            <div className="flex items-end space-x-[10px] sm:px-4">
                <Title>Коллекции брендов</Title>
                <img className="hidden sm:flex" src="/icons/general/arrowBot.svg" />
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:space-y-6">
               <Item img={'1'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
               <Item img={'2'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
               <Item img={'3'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
            </div>
        </div>
    )
}