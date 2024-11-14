function Paragraph({ children, fontSize }) {
  return (
    <p
      className={`${fontSize ? fontSize : ""} font-inter text-slate-400 drop-shadow-lg`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
