import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l8.js";

const tituloLeccion = "Process: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-8-p2";



function Leccion8NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8NodeJs;
