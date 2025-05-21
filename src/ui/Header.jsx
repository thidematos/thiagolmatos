import Paragraph from "./Paragraph";
import Title from "./Title";
import Links from "./Links";
import { useUI } from "../context/UIProvider";

function Header() {
  const { isDesktop } = useUI();

  return (
    <header className="flex w-full flex-col items-start justify-center gap-3 lg:col-span-1 lg:justify-start lg:py-[10%]">
      <Title isTitle="isTitle">Thiago L. Matos</Title>
      <Title isSubtitle="isSubtitle">Desenvolvedor Mobile - Asimov Jr.</Title>
      <Paragraph fontSize={"text-[16px]"}>
        Apps que impulsionam seus resultados com soluções personalizadas
      </Paragraph>
      <Links />
      {isDesktop && (
        <div className="flex h-full w-full flex-row items-center justify-center">
          <img src="/asimov.png" className="w-[30%]" />
        </div>
      )}
    </header>
  );
}

export default Header;
