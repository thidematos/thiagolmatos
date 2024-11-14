function Title({ isSubtitle = false, children }) {
  return (
    <h1
      className={`font-inter ${isSubtitle ? "text-lg font-medium tracking-wide" : "text-3xl font-bold tracking-tight"} text-slate-200 drop-shadow-md`}
    >
      {children}
    </h1>
  );
}

export default Title;
