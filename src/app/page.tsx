import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <div>
        <Header />
      </div>
      <div className="mt-10">
        <Hero />
      </div>
    </div>
  );
}
