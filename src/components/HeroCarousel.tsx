import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  images?: Array<{
    url: string;
    alt: string;
  }>;
  restaurantName?: string;
  tagline?: string;
}

const HeroCarousel = ({
  images = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      alt: "Restaurant interior with warm lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      alt: "Gourmet dish presentation",
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      alt: "Chef preparing food in kitchen",
    },
  ],
  restaurantName = "Le Petit Bistro",
  tagline = "Experience culinary excellence in every bite",
}: HeroCarouselProps) => {
  return (
    <div className="relative w-full h-[700px] bg-black">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-[700px]">
              <div className="relative w-full h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4">
          <h1
            className={cn(
              "text-5xl md:text-7xl font-playfair text-white mb-4",
              "tracking-wide",
            )}
          >
            {restaurantName}
          </h1>
          <p className="text-xl md:text-2xl text-white font-open-sans max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
