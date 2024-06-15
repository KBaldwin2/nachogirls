"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [selected, setSelected] = useState<string>('howItWorks');

  return (
    <div className="bg-black flex p-4 align-left justify-between px-6">
      <Link href={`/`} className="hover:underline">
        <Image
          src="/assets/branding/main-logo.png"
          width={150}
          height={150}
          alt="Logo"
        />
      </Link>

      <div className="flex gap-10 text-primary items-center text-3xl">
        <button
          className={`hover:underline ${selected === 'howItWorks' ? 'underline' : ''}`}
          onClick={() => {
           
            setSelected('howItWorks');
          }}
        >
          How It Works
        </button>
        <button
          className={`hover:underline ${selected === 'story' ? 'underline' : ''}`}
          onClick={() => {
           
            setSelected('story');
          }}
        >
          Our Story
        </button>
        <button
          className={`hover:underline ${selected === 'contact' ? 'underline' : ''}`}
          onClick={() => {

            setSelected('contact');
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
