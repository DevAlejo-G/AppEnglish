import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l3.js";

const tituloLeccion = "Status Code 3xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-4";



function Leccion3TerminologyP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3TerminologyP2;
