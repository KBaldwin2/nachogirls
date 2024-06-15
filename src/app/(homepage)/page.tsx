import { Button } from "../ui/button";
import { LargeTitle } from "../ui/title-lg";
import { Playfair_Display, Pacifico, Lobster } from "next/font/google";

const playfairDisplay = Pacifico({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  return (
    <div className="my-12 mx-20 flex">
      <div>
        <LargeTitle className={`text-white ${playfairDisplay.className}`}>
          BEING A WOMAN IS AWESOME. WE PROTECT YOU WHEN IT'S NOT.
        </LargeTitle>
        <Button>Calculate Your Premium</Button>
      </div>
    </div>
  );
}
