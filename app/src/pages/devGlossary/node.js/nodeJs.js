import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Node.js";
const lecciones = [
  { id: 1, titulo: "Fs", preguntas: 20 },
  { id: 2, titulo: "Http", preguntas: 20 },
  { id: 3, titulo: "Path", preguntas: 20 },
  { id: 4, titulo: "Crypto", preguntas: 20 },
  { id: 5, titulo: "Events", preguntas: 20 },
  { id: 6, titulo: "Os", preguntas: 20 },
  { id: 7, titulo: "Stream", preguntas: 20 },
  { id: 8, titulo: "Process", preguntas: 20 },
];

const basePath = "/dev-glossary/node.js/leccion-";

function NodeJs() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default NodeJs;
