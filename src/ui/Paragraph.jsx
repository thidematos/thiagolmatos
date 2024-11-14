function Paragraph({ children, fontSize }) {
  return (
    <p
      style={{ fontSize: fontSize }}
      className="font-inter text-slate-400 drop-shadow-lg"
    >
      {children}
    </p>
  );
}

export default Paragraph;
