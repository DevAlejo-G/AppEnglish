import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson"

const titulo = "English +300";
const lecciones = [
  { id: 1, titulo: "LECCIÓN 1", preguntas: 20 },
  { id: 2, titulo: "LECCIÓN 2", preguntas: 20 },
  { id: 3, titulo: "LECCIÓN 3", preguntas: 20 },
  { id: 4, titulo: "LECCIÓN 4", preguntas: 20 },
  { id: 5, titulo: "LECCIÓN 5", preguntas: 20 },
  { id: 6, titulo: "LECCIÓN 6", preguntas: 20 },
  { id: 7, titulo: "LECCIÓN 7", preguntas: 20 },
  { id: 8, titulo: "LECCIÓN 8", preguntas: 20 },
  { id: 9, titulo: "LECCIÓN 9", preguntas: 20 },
  { id: 10, titulo: "LECCIÓN 10", preguntas: 20 },
  { id: 11, titulo: "LECCIÓN 11", preguntas: 20 },
  { id: 12, titulo: "LECCIÓN 12", preguntas: 20 },
  { id: 13, titulo: "LECCIÓN 13", preguntas: 20 },
  { id: 14, titulo: "LECCIÓN 14", preguntas: 20 },
  { id: 15, titulo: "LECCIÓN 15", preguntas: 20 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "leccion-";

function EnglishPlus300() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default EnglishPlus300;
