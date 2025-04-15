import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l2.js";

const tituloLeccion = "Http: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-2-p2";



function Leccion2NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2NodeJs;
