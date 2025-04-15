import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l5.js";

const tituloLeccion = "Status Code 1xx (P2): Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-5-p2";



function Leccion5Terminology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5Terminology;
