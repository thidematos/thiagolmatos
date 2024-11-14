import { useUI } from "../context/UIProvider";
import Paragraph from "../ui/Paragraph";
import Tags from "../ui/Tags";
import Title from "../ui/Title";

function Experience() {
  const { isDesktop } = useUI();

  return (
    <section>
      <Title isArticle="isArticle">Experiência</Title>
      <ExperienceBlock
        skills={["Javascript", "React", "Node", "MongoDB", "AWS"]}
        timeOfWork={"2024 # presente"}
        place={"Moinhos Primor S/A"}
        img={"primor-tesseract.png"}
        description={
          "Desenvolvemos um sistema web para automatizar a geração de relatórios de preços de insumos, otimizando o processo de tomada de decisão na produção. O aplicativo, construído com React (utilizando React Query), TailwindCSS, Node.js e MongoDB, extrai dados de PDFs fornecidos pela matriz, processa as informações e gera gráficos intuitivos que comparam os preços dos produtos entre diferentes semanas."
        }
      />
      <ExperienceBlock
        skills={["Javascript", "Web Design", "React", "Node", "MongoDB", "AWS"]}
        timeOfWork={"2023 # 2024"}
        place={"Marmoraria O Coliseu"}
        img={isDesktop ? "coliseu2.png" : "coliseu.png"}
        description={
          "Desenvolvemos e implantamos o portfólio digital e um sistema de gestão de conteúdo (CMS) personalizado para Marmoraria O Coliseu, criando uma identidade visual única e uma interface intuitiva para apresentar os projetos da empresa. Construído com React (utilizando Redux e React Router Data Loaders), TailwindCSS, Node.js e MongoDB."
        }
      />
    </section>
  );
}

function ExperienceBlock({ img, skills, timeOfWork, place, description }) {
  return (
    <div className="flex flex-col items-start justify-center gap-y-3 py-8">
      <Title.TimeOfWork>{timeOfWork}</Title.TimeOfWork>
      <Title isArticle="isArticle">{place}</Title>
      <img
        src={`/${img}`}
        className="self-center rounded-lg border border-emerald-500/30 shadow-xl lg:w-[70%]"
      />
      <ul>
        <Paragraph fontSize={"text-[14px]"}>{description}</Paragraph>
      </ul>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {skills.map((skill) => (
          <Tags key={skill}>{skill}</Tags>
        ))}
      </div>
    </div>
  );
}

export default Experience;
