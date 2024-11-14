import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";

function Rewards() {
  return (
    <section>
      <Title isArticle="isArticle">Conquistas</Title>
      <div className="space-y-4 py-8">
        <Title.TimeOfWork>Set. 2023</Title.TimeOfWork>
        <Title isArticle="isArticle">FIAP Next 2023</Title>
        <img
          src="/next.jpg"
          className="self-center rounded-lg border border-emerald-500/30 shadow-xl"
        />
        <Paragraph>
          1º lugar pelo desenvolvimento do jogo The Map of Me no FIAP Next em
          São Paulo.
        </Paragraph>
      </div>
    </section>
  );
}

export default Rewards;
