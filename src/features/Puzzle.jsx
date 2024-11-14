import { useState } from "react";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Puzzle() {
  const [isDragging, setIsDragging] = useState(null);
  let isHovered = null;

  const [rightMoves, setRightMoves] = useState([]);

  const pieceArray = ["piece-1", "piece-2", "piece-3", "piece-4"];

  const [shuffled, setShuffled] = useState(() => shuffle([...pieceArray]));

  const isDone = rightMoves.length === pieceArray.length;

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-20">
      {isDone ? (
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-xl uppercase text-gray-300">
            Você completou o desafio!
          </p>
          <img
            src="/congratulations.png"
            className="w-[50%] rounded-lg border border-emerald-600 shadow"
          />
          <p className="text-2xl uppercase text-gray-300">
            PAU NA MÁQUINA! 🚀🚀🚀
          </p>
        </div>
      ) : (
        <>
          <h6 className="uppercase text-slate-300 drop-shadow-sm">
            Complete o quebra cabeças! 🚀
          </h6>
          <div className="grid h-[250px] w-[250px] grid-cols-2">
            {pieceArray.map((piece) => (
              <div
                key={piece}
                className="col-span-1 h-full w-full border border-emerald-400"
                onDragLeave={() => {
                  if (rightMoves.includes(piece)) return;
                  const thisContainer = document.querySelector(`#${piece}`);
                  thisContainer.style.backgroundImage = ``;
                }}
                onDragEnter={() => {
                  if (rightMoves.includes(piece)) return;
                  const thisContainer = document.querySelector(`#${piece}`);
                  isHovered = piece;
                  thisContainer.style.backgroundImage = `url(/${isDragging}.png)`;
                }}
                id={piece}
              ></div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-start gap-6 overflow-x-scroll">
            {shuffled.map((piece) => (
              <img
                src={`/${piece}.png`}
                key={piece}
                draggable
                onDragEnd={(e) => {
                  if (piece !== isHovered) return;

                  const target = document.querySelector(`#${piece}`);
                  target.style.backgroundImage = `url(/${isDragging}.png)`;
                  setShuffled((state) =>
                    state.filter((item) => item !== piece),
                  );
                  setRightMoves((state) => [...state, piece]);
                }}
                onDragStart={() => {
                  isHovered = null;
                  setIsDragging(piece);
                }}
                className="border border-gray-300 shadow-md"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Puzzle;
