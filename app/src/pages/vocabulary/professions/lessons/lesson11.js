import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsProfessions/l11";

const tituloLeccion = "Otros (P1): Professions";
const linkSiguiente = "/vocabulary/professions/leccion-11-p2";



function Leccion11Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion11Professions;

