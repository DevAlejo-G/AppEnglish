import React from "react";
import ConfiguracionHome from "hooks/homeLessonSetup/startingLesson";

const titulo = "Technology"
const lecciones = [
  { id: 1, titulo: "Ciencias y Tecnología Avanzada", preguntas: 9 },
  { id: 2, titulo: "Equipos y Hardware (P1)", preguntas: 20 },
  { id: 3, titulo: "Equipos y Hardware (P2)", preguntas: 20 },
  { id: 4, titulo: "Equipos y Hardware (P3)", preguntas: 20 },
  { id: 5, titulo: "Personas y Actitudes", preguntas: 4 },
  { id: 6, titulo: "Acciones y Procesos (P1)", preguntas: 20 },
  { id: 7, titulo: "Acciones y Procesos (P2)", preguntas: 9 },
  { id: 8, titulo: "Otros Términos", preguntas: 18 },
  { id: "practica", titulo: "PRACTICA", esPractica: true },
];
const basePath = "/vocabulary/technology/leccion-";

function Technology() {
  return (
    <div>
      <ConfiguracionHome lecciones={lecciones} titulo={titulo} basePath={basePath} />
    </div>
  );
}

export default Technology;
