import { Benefits } from "../components/Benefits";
import { Cta } from "../components/Cta";
import { Hero } from "../components/Hero";
import { Howitworks } from "../components/Howitworks";

export function Home() {
  return (
    <div>
      <Hero />
      <Howitworks />
      <Benefits />
      <Cta />
    </div>
  );
}