import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l6.js";

const tituloLeccion = "Acciones y Procesos (P1): Technology";
const linkSiguiente = "/vocabulary/technology/leccion-6-p2";



function Leccion6Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6Technology;
