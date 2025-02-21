import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock } from "lucide-react";

interface LocationWidgetProps {
  address?: string;
  mapUrl?: string;
  hours?: {
    day: string;
    hours: string;
  }[];
}

const LocationWidget = ({
  address = "789 Sakura Street, Japanese District, Tokyo City 12345",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1",
  hours = [
    { day: "Monday-Thursday", hours: "11:30 AM - 10:00 PM" },
    { day: "Friday-Saturday", hours: "11:30 AM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:30 PM" },
  ],
}: LocationWidgetProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Visit Us</h2>
        <p className="text-gray-400">
          Experience authentic Japanese dining in the heart of the city
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-zinc-800 border border-zinc-700 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Our Location
                </h3>
                <p className="text-gray-300">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-gray-300"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border border-zinc-700 shadow-lg overflow-hidden">
          <CardContent className="p-0 h-[400px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
              className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocationWidget;
