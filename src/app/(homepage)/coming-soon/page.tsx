"use client";
export default function ComingSoonPage() {


  return (
    <div className="flex justify-center items-center h-full">
        <video width="1000" height="1000" preload="metadata" autoPlay className="p-4 bg-white pb-20 flex items-center">
          <source src="/assets/branding/coming-soon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

    </div>
  );
}
