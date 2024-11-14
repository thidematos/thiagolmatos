import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";

const skills = [
  "Javascript",
  "Typescript",
  "Node",
  "React",
  "TailwindCSS",
  "MongoDB",
  "Git",
  "AWS",
];

function About() {
  return (
    <section className="space-y-3">
      <Title isArticle="isArticle">Sobre</Title>
      <Paragraph fontSize={"14px"}>
        Tenho 24 anos. Sou licenciado em História para Universidade Federal de
        Ouro Preto. Cheguei a entrar no mestrado e atuar como Pesquisador, mas
        acabei optando por seguir um caminho diferente. E esse caminho me trouxe
        ao bacharelado de Sistemas de Informação, que estou cursando na
        Universidade Federal de Itajubá (UNIFEI).
      </Paragraph>
      <Paragraph fontSize={"14px"}>
        O que me motivou a fazer essa transição radical de carreiras é a minha
        afinidade muito grande com tecnologia – que foi minha principal aliada
        na época de historiador. Sempre gostei de elaborar grandes bancos de
        dados de informações que achava nas documentações primárias. Mas, sentia
        que o Excel nunca era suficiente para o que eu queria fazer. Então,
        comecei a me aproximar cada vez mais da programação e do desenvolvimento
        de sistemas. E, hoje, é a minha área de atuação, mais especificamente
        Desenvolvimento Web Full-stack.{" "}
      </Paragraph>
    </section>
  );
}

export default About;
