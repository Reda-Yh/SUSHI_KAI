import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface NewsletterSectionProps {
  onSubscribe?: (email: string) => void;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const NewsletterSection = ({
  onSubscribe = () => {},
  socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
}: NewsletterSectionProps) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
  };

  return (
    <section className="w-full py-16 bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c')] bg-cover bg-center bg-fixed">
      <div className="w-full h-full bg-black/70 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Sushi Journey
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe for exclusive offers, seasonal menu updates, and
              authentic Japanese dining experiences.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-zinc-800/50 border-zinc-600 text-white placeholder:text-gray-400 focus:border-red-500"
                required
              />
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                Subscribe
              </Button>
            </form>

            <div className="flex justify-center gap-6">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
