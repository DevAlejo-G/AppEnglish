import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l3.js";

const tituloLeccion = "Status Code 3xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-3-p2";



function Leccion3Terminology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3Terminology;
