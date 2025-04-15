import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l6.js";

const tituloLeccion = "Status Code 5xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-6-p2";



function Leccion6Terminology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6Terminology;
