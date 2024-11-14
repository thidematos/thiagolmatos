function Tags({ children }) {
  return (
    <p className="w-fit rounded-full bg-cyan-950/60 px-4 py-1 text-xs font-semibold tracking-wide text-emerald-300/90 drop-shadow-sm">
      {children}
    </p>
  );
}

export default Tags;
