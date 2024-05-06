import { HeroHighlight, Highlight } from "./components/hero-highlight";

export default function HomePage() {
  return (
    <div className="">
      <HeroHighlight className="text-4xl md:text-5xl lg:text-6xl text-center leading-loose text-text-light dark:text-text-dark">
        Univent: Where Quality Is Everything. Excellence in Every Detail,
        <Highlight className="leading-loose">Trust in Every System.</Highlight>
      </HeroHighlight>
    </div>
  );
}
