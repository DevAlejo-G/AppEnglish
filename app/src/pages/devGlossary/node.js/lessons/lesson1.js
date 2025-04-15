import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l1.js"

const tituloLeccion = "Fs: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-1-p2";



function Leccion1NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1NodeJs;
