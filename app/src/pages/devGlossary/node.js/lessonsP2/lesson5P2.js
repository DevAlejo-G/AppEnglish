import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../words/l5.js";

const tituloLeccion = "Events: Node.js";
const linkSiguiente = "/dev-glossary/node.js/leccion-6";



function Leccion5NodeJsP2() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5NodeJsP2;
