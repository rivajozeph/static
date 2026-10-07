import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Initiatives from "./components/Initiatives";
import Transparency from "./components/Transparency";
import JoinUs from "./components/JoinUs";
import Contribution from "./components/Contribution";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#123b32]">
      <TopBar />
      <Header />
      <Hero />
      <WhoWeAre />
      <Initiatives />
      <Transparency />
      <JoinUs />
      <Contribution />
      <Contact />
      <Footer />
    </main>
  );
}