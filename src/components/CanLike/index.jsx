import React from "react";
import { ProductCard } from "../ProductCard";

export const CanLike = () => {
    return (
        <div className="flex flex-col space-y-12 mt-[114px] relative sm:space-y-10 sm:mt-[53px] ">
            <span className="text-[32px] text-black font-semibold sm:text-center sm:font-medium sm:leading-5 sm:leading-8 sm:font-semibold">Вам может <br className="hidden sm:flex"/> понравиться</span>
            <div className="flex space-x-6 w-full overflow-auto sm:space-x-4">
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
            </div>
        </div>
    )
}