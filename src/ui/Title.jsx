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

function ListItem({ children }) {
  return (
    <li className="text-sm tracking-wide text-slate-300 drop-shadow-md">
      {children}
    </li>
  );
}

Title.ListItem = ListItem;

export default Title;
