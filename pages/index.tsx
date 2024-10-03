"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Sun,
  Moon,
  Utensils,
  Users,
  Music,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function LightOverDarknessLanding() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [giftLotNumber, setGiftLotNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Generate a random number for the gift lot
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setGiftLotNumber(randomNumber.toString().padStart(3, "0"));
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Thank You for Registering!</h2>
        <p className="text-xl mb-8">Your gift lot number is:</p>
        <div className="bg-yellow-400 text-purple-900 text-4xl font-bold py-4 px-8 rounded-lg mb-8">
          {giftLotNumber}
        </div>
        <p className="mb-4">
          Please keep this number for the gift drawing at the event.
        </p>
        <Button
          onClick={() => setIsRegistered(false)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Back to Event Page
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-90% text-white relative">
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src="/worship.jpg"
          alt="Worship night"
          layout="fill"
          objectFit="cover"
          className="brightness-100"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-sky-900 bg-opacity-30">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Light Over Darkness
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2"></h2>
          <p className="text-xl text-teal-200">
            A night of fellowship, fun, and faith!
          </p>
        </div>
      </div>

      <main className="flex-grow px-4 py-8 relative z-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
          <ul className="space-y-3 text-left mb-6">
            <li className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Thursday, October 31, 2024</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-yellow-400" />
              <span>6:00 PM - 9:00 PM</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
              <span>
                Maranatha Vision Church Youth Ministry, 1239 N.Livermore Ave.
                Livermore, CA 94551
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Program Highlights</h3>
          <ul className="space-y-2 text-left">
            <li className="flex items-start">
              <Utensils className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
              <span>Delicious Korean food dinner</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
              <span>Fellowship activities to make new friends</span>
            </li>
            <li className="flex items-start">
              <MessageCircle className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
              <span>Inspiring testimonies from peers</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
              <span>Surprising Skits for revival</span>
            </li>
            <li className="flex items-start">
              <Music className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
              <span>Uplifting worship session</span>
            </li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Register Now</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your Name"
                required
                className="bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                required
                className="bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="school" className="text-white">
                School
              </Label>
              <Input
                id="school"
                type="text"
                placeholder="Livermore High School"
                className="bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="grade" className="text-white">
                Grade
              </Label>
              <Input
                id="grade"
                type="number"
                placeholder="9"
                min="6"
                max="12"
                className="bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 rounded-full transition duration-300"
            >
              Let Your Light Shine - Register Now
            </Button>
          </form>
        </div>
      </main>

      <footer className="p-4 relative z-10">
        <div>
          <img src="/logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-4" />
          {/* <h3 className="text-xl font-semibold mb-4 text-center">MVCYM</h3> */}
        </div>
        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-yellow-400" />
            <span>(925) 555-1234</span>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-yellow-400" />
            <span>admin@mvcym.org</span>
          </li>
          <li className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
            <span>1239 N.Livermore Ave., Livermore, CA 94551</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}