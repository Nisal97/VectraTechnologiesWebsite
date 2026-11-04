import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar/>
      <Hero/>
      <Services/>
      <Team/>
      <Footer />
    </main>
  );
}
