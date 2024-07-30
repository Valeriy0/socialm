import React, { useState } from "react";

export const ProductCard = ({className}) => {

    const [isLike, setIsLike] = useState(false);
    return (
        <div className={`flex flex-col items-center justify-center bg-lightGray h-[440px] w-full relative sm:w-full sm:h-full sm:pb-4 sm:relative ${className}`} >
            <img className="sm:mt-8" src="/images/main/catalog/1.png"/>
            <div className="flex flex-col items-center space-y-6 mt-6 sm:space-y-3">
                <div className="flex flex-col items-center space-y-3 sm:space-y-1">
                    <span className="font-medium sm:text-sm">Stain Worldwide</span>
                    <span className="text-sm text-black-300 sm:text-xs">Лонгслив Join</span>
                </div>
                <span className="text-black text-xl font-medium sm:text-base">7990 ₽</span>
            </div>
            <div className="absolute top-4 left-4 bg-black rounded-full flex items-center justify-center px-[10px] h-[22px]">
                <span className="text-sm text-white  sm:text-center leading-none">New</span>
            </div>
            {isLike ? ( 
                <button onClick={() => setIsLike(!isLike)} className="absolute top-4 right-4">
                    <img src="/icons/productCard/likeRedIcon.svg"/>
                </button>
            ):
            (
                <button onClick={() => setIsLike(!isLike)} className="absolute top-4 right-4">
                    <img src="/icons/productCard/likeicon.svg"/>
                </button>
            )}
        </div>  
    )
}