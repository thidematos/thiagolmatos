import { useState } from "react";
import Luminous from "./ui/Luminous";
import Header from "./ui/Header";
import About from "./features/About";
import Experience from "./features/Experience";
import Projects from "./features/Projects";
import Footer from "./features/Footer";
import { UIProvider, useUI } from "./context/UIProvider";
import Modal from "./ui/Modal";
import Rewards from "./features/Rewards";

function App() {
  const { isOpen } = useUI();

  return (
    <main className="flex min-h-screen w-screen flex-col items-start justify-start gap-16 overflow-x-hidden bg-slate-900 px-6 py-12 font-inter">
      <Luminous />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Rewards />
      <Footer />
      {isOpen && <Modal />}
    </main>
  );
}

export default App;
