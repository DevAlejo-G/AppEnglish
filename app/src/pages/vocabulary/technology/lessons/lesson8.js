import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l8.js";

const tituloLeccion = "Otros Términos: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-8-p2";



function Leccion8Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8Technology;
