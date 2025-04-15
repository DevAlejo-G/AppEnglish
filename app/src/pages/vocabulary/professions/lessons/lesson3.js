import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsProfessions/l3";

const tituloLeccion = "Tecnología e Ingeniería: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-3-p2";



function Leccion3Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3Professions;

