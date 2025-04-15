import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l5.js";

const tituloLeccion = "Status Code 4xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-6";



function Leccion5TerminologyP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5TerminologyP2;
