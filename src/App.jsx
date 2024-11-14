import { useState } from "react";
import Luminous from "./ui/Luminous";
import Header from "./ui/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-screen bg-slate-900 px-6 py-12">
      <Luminous />
      <Header />
    </div>
  );
}

export default App;
