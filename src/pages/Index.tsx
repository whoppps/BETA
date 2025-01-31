import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;