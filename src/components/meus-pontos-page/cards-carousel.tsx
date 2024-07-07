"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoyaltyCard } from "@/components/meus-pontos-page/loyalty-card";
import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { cn } from "@/lib/utils/cn";
import { CustomerStats } from "@/lib/actions/get-customer-stats";

export function CardsCarousel({
  customerStats: { customer, cards },
}: {
  customerStats: CustomerStats;
}) {
  const carouselRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: "center",
    dots: false,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  } satisfies Settings;
  return (
    <>
      <Slider
        ref={carouselRef}
        beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
        {...settings}
        className="w-full max-w-full sm:w-[45rem] mx-auto"
      >
        {cards.map((card) => {
          return (
            <LoyaltyCard key={card.type} customer={customer} card={card} />
          );
        })}
      </Slider>
      <div className="flex w-full items-center justify-center h-9 gap-3 absolute bottom-10">
        {cards.length > 1 &&
          cards.map((card, idx) => {
            return (
              <button
                key={card.type}
                onClick={() => carouselRef.current?.slickGoTo(idx)}
                data-active={idx === currentSlide}
                className={cn(
                  "w-4 h-4 p-0 bg-white transition-all duration-150 rounded-full",
                  {
                    "w-8 sm:w-6 bg-primary": idx === currentSlide,
                  }
                )}
              />
            );
          })}
      </div>
    </>
  );
}
