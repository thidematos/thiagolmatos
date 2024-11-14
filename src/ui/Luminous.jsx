function Luminous({ children }) {
  return (
    <div className="fixed left-[5%] top-[5%] h-[30%] w-[60%] rounded-full bg-gray-400/15 blur-[100px]">
      {children}
    </div>
  );
}

export default Luminous;
