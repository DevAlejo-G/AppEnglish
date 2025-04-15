import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l5.js";

const tituloLeccion = "Events: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-5-p2";



function Leccion5NodeJs() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5NodeJs;
