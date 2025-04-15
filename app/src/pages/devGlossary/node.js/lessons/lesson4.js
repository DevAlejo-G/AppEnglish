import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l4.js";

const tituloLeccion = "Crypto: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-4-p2";



function Leccion4NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4NodeJs;
