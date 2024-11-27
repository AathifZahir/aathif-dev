import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mt-10">
        <Hero />
      </div>
    </div>
  );
}
