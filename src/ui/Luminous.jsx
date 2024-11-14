function Luminous({ children }) {
  return (
    <div className="fixed left-[5%] top-[5%] h-[20%] w-[50%] rounded-full bg-gray-400/15 blur-3xl">
      {children}
    </div>
  );
}

export default Luminous;
