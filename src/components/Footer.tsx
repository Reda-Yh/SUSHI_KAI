import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className="bg-black/70 backdrop-blur-md text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="text-center">
                        <span className="text-2xl font-bold">SUSHI KAI</span>
                        <p className="text-gray-300 mt-2">Experience authentic Japanese cuisine</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mt-4">
                        <a
                            href="https://github.com/Reda-Yh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/reda-yahya-920976253/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/rynova_officiel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>

                    {/* Footer Button */}
                    <Button className="bg-red-600 hover:bg-red-700 text-white mt-6">
                        <a href="mailto:redayahyapro@gmail.com">
                            Contact Us
                        </a>
                    </Button>

                    {/* Copyright */}
                    <div className="mt-6 text-gray-300 text-sm">
                        <p>
                            &copy; All rights reserved by{" "}
                            <a href="https://rynova.vercel.app/" className="text-white">
                                <img
                                    src="https://i.ibb.co/VWjJvKpW/rynova.png"
                                    alt="rynova"
                                    className="w-14 h-auto inline-block"  // Ajoutez cette classe pour ajuster la taille
                                />
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
