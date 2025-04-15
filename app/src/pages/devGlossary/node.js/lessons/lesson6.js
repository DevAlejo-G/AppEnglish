import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l6.js";

const tituloLeccion = "Os: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-6-p2";



function Leccion6NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6NodeJs;
