import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const SliderList = () => {
    return (
        <div className="h-[620px] relative">
            <CarouselProvider
                naturalSlideWidth={600}
                naturalSlideHeight={600}
                totalSlides={3}
            >
                <Slider>
                    <Slide className="sm:h-[600px]" index={0}>
                        <img className="sm:hidden" src="/images/main/slider/1.png"/>
                        <img className="hidden sm:flex" src="/images/main/slider/1mob.png"/>
                    </Slide>
                    <Slide className="sm:h-[600px]" index={1}>
                        <img className="sm:hidden" src="/images/main/slider/1.png"/>
                        <img className="hidden sm:flex" src="/images/main/slider/1mob.png"/>
                    </Slide>
                    <Slide className="sm:h-[600px]" index={2}>
                        <img className="sm:hidden" src="/images/main/slider/1.png"/>
                        <img className="hidden sm:flex" src="/images/main/slider/1mob.png"/>
                    </Slide>
                </Slider>
                <ButtonBack className="absolute top-1/2 -translate-y-1/2 left-0 z-[11] sm:hidden">
                    <div className="flex items-center justify-center !bg-[#000000] rounded-full w-8 h-8">
                        <img src="/icons/main/slider/arrowLeft.svg"/>
                    </div>
                </ButtonBack>
                <ButtonNext className="absolute top-1/2 -translate-y-1/2 right-0 z-[11] sm:hidden">
                    <div className="relative flex items-center justify-center !bg-[#000000] rounded-full w-8 h-8">
                        <img src="/icons/main/slider/arrowRight.svg"/>
                    </div>
                </ButtonNext>
                <DotGroup className="flex absolute bottom-[-15px] left-1/2 -translate-x-1/2 space-x-2 ">
                    <Dot disabled={false} slide={0} className="h-[4px] rounded-full w-[69px] bg-black-300 "></Dot>
                    <Dot disabled={false} slide={1} className="h-[4px] rounded-full w-[69px] bg-black-300 "></Dot>
                    <Dot disabled={false} slide={2} className="h-[4px] rounded-full w-[69px] bg-black-300 "></Dot>
                </DotGroup>
            </CarouselProvider>
        </div>
    )
}