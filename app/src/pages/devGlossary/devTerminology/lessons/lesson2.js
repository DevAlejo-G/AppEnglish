import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l2.js";

const tituloLeccion = "Status Code 2xx: Dev-Terminology";
const linkSiguiente = "/dev-glossary/terminology/leccion-2-p2";



function Leccion2Terminology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2Terminology;
