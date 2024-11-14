import Paragraph from "./Paragraph";
import Title from "./Title";
import Links from "./Links";

function Header() {
  return (
    <header className="flex w-full flex-col items-start justify-center gap-3">
      <Title isTitle="isTitle">Thiago L. Matos</Title>
      <Title isSubtitle="isSubtitle">Trainee Asimov Jr.</Title>
      <Paragraph>
        Apps que impulsionam seus resultados com soluções personalizadas
      </Paragraph>
      <Links />
    </header>
  );
}

export default Header;
