import React from "react";
import HeroCarousel from "./HeroCarousel";
import FloatingReservation from "./FloatingReservation";
import FeaturedDishes from "./FeaturedDishes";
import LocationWidget from "./LocationWidget";
import NewsletterSection from "./NewsletterSection";
import Navbar from "./Navbar";

interface HomeProps {
  restaurantInfo?: {
    name: string;
    tagline: string;
    carouselImages: Array<{
      url: string;
      alt: string;
    }>;
  };
}

const Home = ({
  restaurantInfo = {
    name: "SUSHI KAI",
    tagline: "Experience authentic Japanese cuisine",
    carouselImages: [
      {
        url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        alt: "Elegant sushi presentation",
      },
      {
        url: "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
        alt: "Sushi chef at work",
      },
      {
        url: "https://images.unsplash.com/photo-1553621042-f6e147245754",
        alt: "Modern Japanese restaurant interior",
      },
    ],
  },
}: HomeProps) => {
  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <HeroCarousel
        images={restaurantInfo.carouselImages}
        restaurantName={restaurantInfo.name}
        tagline={restaurantInfo.tagline}
      />

      {/* Floating Reservation Button */}
      <FloatingReservation />

      {/* Featured Dishes Section */}
      <FeaturedDishes />

      {/* Location Widget */}
      <div className="py-16 bg-zinc-900">
        <LocationWidget />
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Home;
