import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Human Body"
const lecciones = [
  { id: 1, titulo: "Cabeza y Cara", preguntas: 15 },
  { id: 2, titulo: "Tronco", preguntas: 4 },
  { id: 3, titulo: "Extremidades Superiores", preguntas: 9 },
  { id: 4, titulo: "Extremidades Inferiores", preguntas: 10 },
  { id: 5, titulo: "Órganos y Partes Internas", preguntas: 12 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "/vocabulary/humanBody/leccion-";

function HumanBody() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default HumanBody;
