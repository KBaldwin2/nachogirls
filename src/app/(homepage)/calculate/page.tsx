"use client";

import Container from "@/ui/layout/Container";
import { MediumTitle } from "@/ui/title-md";
import { CalculatePremiumForm } from "./_components/calculate-premium-form";

export default function CalculatePremiumPage() {
  return (
    <div className="bg-secondary h-full">
      <Container className="h-full">
        <MediumTitle className="text-primary mb-4 lg:mb-20">
          CALCULATE YOUR PREMIUM
        </MediumTitle>
        <div className="lg:w-3/4 md:w-11/12 w-full mx-auto">
          <CalculatePremiumForm />
        </div>
      </Container>
    </div>
  );
}
