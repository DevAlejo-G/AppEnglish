import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Sports"
const lecciones = [
  { id: 1, titulo: "LECCIÓN 1", preguntas: 20 },
  { id: 2, titulo: "LECCIÓN 2", preguntas: 20 },
  { id: 3, titulo: "LECCIÓN 3", preguntas: 20 },
  { id: 4, titulo: "LECCIÓN 4", preguntas: 13 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "/vocabulary/sports/leccion-";

function Sports() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Sports;
