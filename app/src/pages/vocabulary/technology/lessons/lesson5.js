import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l5.js";

const tituloLeccion = "Personas y Actitudes: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-5-p2";



function Leccion5Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5Technology;
