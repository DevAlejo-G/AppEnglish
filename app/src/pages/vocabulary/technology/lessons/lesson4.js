import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l4.js";

const tituloLeccion = "Equipos y Hardware (P3): Technology";
const linkSiguiente = "/vocabulary/technology/leccion-4-p2";



function Leccion4Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4Technology;
