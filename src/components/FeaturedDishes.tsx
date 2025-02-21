import React from "react";
import DishCard from "./DishCard";

interface FeaturedDishesProps {
  dishes?: Array<{
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  }>;
}

const FeaturedDishes = ({
  dishes = [
    {
      title: "Signature Omakase",
      description: "Chef's selection of premium seasonal sushi and sashimi",
      price: "$120",
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
    },
    {
      title: "Dragon Roll",
      description: "Tempura shrimp, eel, avocado, and tobiko with unagi sauce",
      price: "$24",
      imageUrl: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56",
    },
    {
      title: "Wagyu Nigiri",
      description: "Seared A5 Japanese Wagyu beef with truffle and gold flakes",
      price: "$38",
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    },
  ],
}: FeaturedDishesProps) => {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair text-gray-900 mb-4">
            Chef's Specials
          </h2>
          <p className="text-lg text-gray-600 font-open-sans">
            Discover our carefully curated selection of signature dishes
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {dishes.map((dish, index) => (
            <DishCard
              key={index}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              imageUrl={dish.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
