import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l7.js";

const tituloLeccion = "Stream: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-7-p2";



function Leccion7NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7NodeJs;
