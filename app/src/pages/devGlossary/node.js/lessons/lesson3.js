import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l3.js";

const tituloLeccion = "Path: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-3-p2";



function Leccion3NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3NodeJs;
