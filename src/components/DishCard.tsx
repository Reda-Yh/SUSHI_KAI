import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface DishCardProps {
  title?: string;
  description?: string;
  price?: string;
  imageUrl?: string;
}

const DishCard = ({
  title = "Truffle Risotto",
  description = "Creamy Arborio rice with wild mushrooms and shaved black truffles",
  price = "$32",
  imageUrl = "https://images.unsplash.com/photo-1673421161165-c4b5b0489d7f?w=800&auto=format&fit=crop",
}: DishCardProps) => {
  return (
    <Card className="w-[350px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-playfair text-gray-900">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 font-open-sans">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold text-amber-700">{price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          variant="outline"
          className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DishCard;
