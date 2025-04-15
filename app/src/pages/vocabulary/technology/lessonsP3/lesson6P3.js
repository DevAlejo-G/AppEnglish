import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsTechnology/l6.js";

const tituloLeccion = "Acciones y Procesos (P1) P3: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-7";



function Leccion6TechnologyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6TechnologyP3;
