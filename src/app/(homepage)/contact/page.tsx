"use client";
import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import { LargeTitle } from "@/ui/title-lg";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContactUs = () => {
    setIsLoading(true);
    try {
      router.push("mailto:kimberleythuyne@gmail.com");
    } catch (error) {
      console.error("Error opening mail client:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = "/assets/branding/MFP.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className={`relative bg-cover bg-center h-full transition-opacity duration-500 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: imageLoaded
          ? `url('/assets/branding/MFP.png')`
          : "none",
      }}
    >
      <div
        className={`flex flex-col justify-center items-center text-white text-center min-h-full transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <LargeTitle className="font-tan md:w-3/5 text-5xl">
          FOR ALL <span className="whitespace-nowrap">WOMAN-KIND</span>
        </LargeTitle>
        <Button
          className="md:text-4xl mt-4"
          variant="secondary"
          onPress={handleContactUs}
          isLoading={isLoading}
          aria-label="Contact Us"
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}
