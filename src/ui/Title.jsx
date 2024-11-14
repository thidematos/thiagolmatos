function Title({
  isSubtitle = false,
  children,
  isArticle = false,
  isTitle = false,
}) {
  const styles = {
    isSubtitle: `text-lg font-medium tracking-wide`,
    isArticle: `font-medium uppercase tracking-wide`,
    isTitle: `text-3xl font-bold tracking-tight`,
  };

  return (
    <h1
      className={`font-inter ${styles[isSubtitle || isArticle || isTitle]} text-slate-200 drop-shadow-md`}
    >
      {children}
    </h1>
  );
}

export default Title;
