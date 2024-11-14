import { useUI } from "../context/UIProvider";
import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";
import Puzzle from "./Puzzle";

function Projects() {
  return (
    <section>
      <Title isArticle="isArticle">PROJETOS</Title>
      <ProjectBlock
        title={"The Map of Me"}
        img={"mapofme.jpeg"}
        description={
          "Desenvolvi ‘The Map of Me’, um jogo educacional, projetado para auxiliar crianças com TEA no desenvolvimento das habilidades de reconhecimento de emoções. O jogo apresenta 8 níveis progressivos onde as crianças combinam palavras com expressões faciais através de quebra-cabeças."
        }
      />

      <ProjectBlock
        title={"Portifólio"}
        img={"portifolio2.png"}
        description={
          "Portifólio para apresentação de meus projetos, descrição de meus serviços, habilidades e método de trabalho. Possui um sistema de gerenciamento de solicitações e agendamento de atendimentos. Há também a página do Códice Desvelado, um blog pessoal em que compartilho algumas de minhas ideias."
        }
      />
    </section>
  );
}

function ProjectBlock({ title, img, description }) {
  const { toggleModal } = useUI();
  return (
    <div className="flex flex-col items-start justify-center gap-4 py-8">
      <Title isArticle="isArticle">{title}</Title>
      <img
        className="self-center rounded-lg border border-emerald-500/30 shadow-xl lg:w-[60%]"
        src={`/${img}`}
      />
      <Paragraph fontSize={"text-[14px]"}>{description}</Paragraph>
      {title === "The Map of Me" && (
        <button
          className="self-center rounded border border-purple-600/40 bg-cyan-950/80 px-4 py-2 text-emerald-300 shadow-xl"
          onClick={() => toggleModal({ status: true, component: <Puzzle /> })}
        >
          Teste o quebra cabeças!
        </button>
      )}
    </div>
  );
}
export default Projects;
