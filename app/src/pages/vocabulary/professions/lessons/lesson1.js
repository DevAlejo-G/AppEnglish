import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsProfessions/l1";

const tituloLeccion = "Salud y Medicina 1: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-1-p2";



function Leccion1Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1Professions;

