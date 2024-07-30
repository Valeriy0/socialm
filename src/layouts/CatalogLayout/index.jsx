import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CanLike } from "../../components/CanLike";

export const CatalogLayout = ({children}) => {
    return (
        <div className="flex min-h-screen relative sm:overflow-x-hidden">
          <div className="flex flex-col items-center w-full z-[3]">
              <Header />
                  <div className="flex flex-col py-10 px-12 w-full h-full mt-[94px] max-w-[1420px] sm:px-4 sm:mt-[45px]">
                    {children}
                    <CanLike />
                  </div>
              <Footer />
          </div>
        </div>
    )
}