import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Professions"
const lecciones = [
  { id: 1, titulo: "Salud y Medicina", preguntas: 11 },
  { id: 2, titulo: "Educación", preguntas: 5 },
  { id: 3, titulo: "Tecnología e Ingeniería", preguntas: 8 },
  { id: 4, titulo: "Arte y Medios", preguntas: 13 },
  { id: 5, titulo: "Ciencias", preguntas: 7 },
  { id: 6, titulo: "Construcción y Manualidades", preguntas: 11 },
  { id: 7, titulo: "Seguridad y Emergencias", preguntas: 7 },
  { id: 8, titulo: "Transporte", preguntas: 9 },
  { id: 9, titulo: "Hostelería y Servicios", preguntas: 10 },
  { id: 10, titulo: "Administración y Negocios", preguntas: 15 },
  { id: 11, titulo: "Otros (P1)", preguntas: 11 },
  { id: 12, titulo: "Otros (P2)", preguntas: 11 },
  { id: 13, titulo: "Vocabulario", preguntas: 21 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];

const basePath = "/vocabulary/professions/leccion-";

function Professions() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Professions;
