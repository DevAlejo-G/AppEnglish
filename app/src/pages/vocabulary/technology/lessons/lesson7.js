import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l7.js";

const tituloLeccion = "Acciones y Procesos (P2): Technology";
const linkSiguiente = "/vocabulary/technology/leccion-7-p2";



function Leccion7Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7Technology;
