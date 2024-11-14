import { useState } from "react";
import Luminous from "./ui/Luminous";
import Header from "./ui/Header";
import About from "./features/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-inter flex min-h-screen w-screen flex-col items-start justify-start gap-16 bg-slate-900 px-6 py-12">
      <Luminous />
      <Header />
      <About />
    </main>
  );
}

export default App;
