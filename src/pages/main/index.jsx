import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Partners } from "../../features/main/partners";
import { BrandCollection } from "../../features/main/brandСollection";
import { Catalog } from "../../features/main/catalog";
import { Slider, SliderList } from "../../features/main/slider";

export const Main = () => {
    return (
        <BaseLayout>
            <SliderList />
            <Partners />
            <Catalog />
            <BrandCollection />
        </BaseLayout>
    )
}