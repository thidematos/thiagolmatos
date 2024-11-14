import { useEffect, useState } from "react";
import Luminous from "./ui/Luminous";
import Header from "./ui/Header";
import About from "./features/About";
import Experience from "./features/Experience";
import Projects from "./features/Projects";
import Footer from "./features/Footer";
import { UIProvider, useUI } from "./context/UIProvider";
import Modal from "./ui/Modal";
import Rewards from "./features/Rewards";

let firstRender = true;

function App() {
  const { isDesktop, resizeWindow } = useUI();

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return resizeWindow(window.innerWidth >= 1024);
    }

    function handler() {
      console.log(window.innerWidth);
      resizeWindow(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [resizeWindow]);

  if (isDesktop) return <Desktop />;

  if (!isDesktop) return <Mobile />;
}

function Mobile() {
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

function Desktop() {
  const { isOpen } = useUI();

  return (
    <main className="grid h-screen w-screen grid-cols-2 gap-x-20 gap-y-6 bg-slate-900 px-[10%] py-6 font-inter">
      <Header />
      <div className="col-span-1 flex flex-col items-start justify-start gap-16 overflow-y-scroll px-4 py-[10%]">
        <About />
        <Experience />
        <Projects />
        <Rewards />
      </div>
      <Footer />
      {isOpen && <Modal />}
    </main>
  );
}
export default App;
