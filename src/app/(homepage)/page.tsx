import { Button } from "../ui/button";
import { LargeTitle } from "../ui/title-lg";

export default function HomePage() {
  return (
    <div className="grid grid-cols-6 mx-10">
      <div className="col-span-4">
        <LargeTitle className={`text-white text-8xl font-tan`}>
          BEING A WOMAN IS AWESOME. WE PROTECT YOU WHEN IT'S NOT.
        </LargeTitle>
        <div className="text-white text-2xl">
          Paragraph about things. Curious about cost? Calculate your premium below.
        </div>
        <Button className="text-xl">Calculate Your Premium</Button>
      </div>
    </div>
  );
}
