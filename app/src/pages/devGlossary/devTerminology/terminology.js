import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Dev Terminology";
const lecciones = [
  { id: 1, titulo: "Status Code 1xx", preguntas: 20 },
  { id: 2, titulo: "Status Code 2xx", preguntas: 20 },
  { id: 3, titulo: "Status Code 3xx", preguntas: 20 },
  { id: 4, titulo: "Status Code 4xx", preguntas: 20 },
  { id: 5, titulo: "Status Code 5xx", preguntas: 20 },
];

const basePath = "/dev-glossary/terminology/leccion-";

function Terminology() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Terminology;
