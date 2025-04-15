import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Colors"
const lecciones = [
  { id: 1, titulo: "LECCIÓN 1", preguntas: 19 },
  { id: 2, titulo: "LECCIÓN 2", preguntas: 20 },
  { id: 3, titulo: "VACIO", preguntas: 0 },
  { id: 4, titulo: "VACIO", preguntas: 0 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "/vocabulary/colors/leccion-";

function Colors() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Colors;
