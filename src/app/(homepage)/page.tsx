"use client";
import { routes } from "../routes";
import { Button } from "../../ui/button";
import Container from "../../ui/layout/Container";
import { LargeTitle } from "../../ui/title-lg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={`relative h-full m-2 mt-10 lg:mt-[125px] lg:ml-[100px]`}>
      <div className={`flex flex-col gap-2 text-white min-h-full`}>
        <LargeTitle className="font-tan md:w-4/5 text-5xl">
          BEING A WOMAN IS AWESOME. WE PROTECT YOU WHEN IT'S NOT.
        </LargeTitle>
        <p className="text-white text-xl md:text-3xl">
          Curious about cost? Calculate your monthly premium below.
        </p>
        <div className="md:w-3/5">
          <Button
            className="md:text-4xl mt-4"
            isLoading={isLoading}
            onPress={() => {
              setIsLoading(true);
              router.push(routes.calculatePremium());
            }}
            aria-label="Calculate"
          >
            Calculate Your Premium
          </Button>
        </div>
      </div>
    </div>
    // <Container>
    //   <div className="grid grid-cols-6 max-h-screen">
    //     <div className="col-span-6 lg:col-span-4 pt-10 lg:pt-26 lg:pl-20">
    //       <LargeTitle className="text-white font-tan text-5xl mb-4">
    //         BEING A WOMAN IS AWESOME. WE PROTECT YOU WHEN IT'S NOT.
    //       </LargeTitle>
    //       <p className="text-white text-xl md:text-3xl mb-4">
    //         Curious about cost? Calculate your monthly premium below.
    //       </p>
    //       <Button
    //         className="text-xs md:text-2xl text-black"
    //         isLoading={isLoading}
    //         onPress={() => {
    //           setIsLoading(true);
    //           router.push(routes.calculatePremium());
    //         }}
    //       >
    //         Calculate Your Premium
    //       </Button>
    //     </div>
    //   </div>
    // </Container>
  );
}
