import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsProfessions/l6";

const tituloLeccion = "Construcción y Manualidades: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-6-p2";



function Leccion6Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6Professions;

