import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l1.js";

const tituloLeccion = "Status Code 1xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-2";



function Leccion1TerminologyP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1TerminologyP2;
