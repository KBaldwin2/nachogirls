"use client";
import { routes } from "../routes";
import { Button } from "../../ui/button";
import Container from "../../ui/layout/Container";
import { LargeTitle } from "../../ui/title-lg";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <Container>
      <div className="grid grid-cols-6">
        <div className="col-span-6 lg:col-span-4">
          <LargeTitle className={`text-white font-tan`}>
            BEING A WOMAN IS AWESOME. WE PROTECT YOU WHEN IT'S NOT.
          </LargeTitle>
          <Button
            className="text-xs md:text-2xl"
            onPress={() => router.push(routes.calculatePremium())}
          >
            Calculate Your Premium
          </Button>
        </div>
      </div>
    </Container>
  );
}
