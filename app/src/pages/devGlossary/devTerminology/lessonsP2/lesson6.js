import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l6.js";

const tituloLeccion = "Status Code 5xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology";



function Leccion6TerminologyP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6TerminologyP2;
