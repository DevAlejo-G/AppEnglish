import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Animals"
const lecciones = [
  { id: 1, titulo: "LECCIÓN 1", preguntas: 20 },
  { id: 2, titulo: "LECCIÓN 2", preguntas: 20 },
  { id: 3, titulo: "LECCIÓN 3", preguntas: 20 },
  { id: 4, titulo: "LECCIÓN 4", preguntas: 20 },
  { id: 5, titulo: "LECCIÓN 5", preguntas: 20 },
  { id: 6, titulo: "LECCIÓN 6", preguntas: 20 },
  { id: 7, titulo: "LECCIÓN 7", preguntas: 20 },
  { id: 8, titulo: "LECCIÓN 8", preguntas: 11 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "/vocabulary/animals/leccion-";

function Animals() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Animals;
