import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l7.js";

const tituloLeccion = "Stream: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-8";



function Leccion7NodeJsP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7NodeJsP2;
