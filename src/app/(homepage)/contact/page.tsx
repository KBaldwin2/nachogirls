"use client"
import { useState } from "react";
import { Button } from "@/app/ui/button";
import { LargeTitle } from "@/app/ui/title-lg";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContactUs = async () => {
    setIsLoading(true);
    try {
      await router.push("mailto:kimberleythuyne@gmail.com");
    } catch (error) {
      console.error("Error opening mail client:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative bg-cover bg-center h-full ${
        imageLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      style={{
        backgroundImage: `url('/assets/branding/MFP.png')`,
      }}
    >
      <div
        className={`flex flex-col justify-center items-center text-white text-center min-h-full ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <LargeTitle className="font-tan w-3/5">
          FOR ALL{"\n"}WOMAN-KIND
        </LargeTitle>
        <Button
          className="text-4xl mt-4"
          variant="secondary"
          onPress={handleContactUs}
          isLoading={isLoading}
        >
          CONTACT US
        </Button>
      </div>
      <img
        src="/assets/branding/MFP.png"
        alt="background"
        className="hidden"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}
