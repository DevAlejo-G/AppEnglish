import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l1.js";

const tituloLeccion = "Ciencias y Tecnología Avanzada: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-1-p2";



function Leccion1Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1Technology;
