import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsProfessions/l7";

const tituloLeccion = "Seguridad y Emergencias: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-7-p2";



function Leccion7Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7Professions;

