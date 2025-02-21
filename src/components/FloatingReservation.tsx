import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface FloatingReservationProps {
  onClick?: () => void;
  buttonText?: string;
  position?: "bottom-right" | "bottom-left";
}

const FloatingReservation = ({
  onClick = () => console.log("Reservation button clicked"),
  buttonText = "Make a Reservation",
  position = "bottom-right",
}: FloatingReservationProps) => {
  const positionClasses = {
    "bottom-right": "bottom-8 right-8",
    "bottom-left": "bottom-8 left-8",
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-50`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        onClick={onClick}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-6 px-8 rounded-full shadow-lg backdrop-blur-sm"
        size="lg"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default FloatingReservation;
