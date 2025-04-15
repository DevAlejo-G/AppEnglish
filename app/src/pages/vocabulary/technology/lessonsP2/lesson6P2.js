import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsTechnology/l6.js";

const tituloLeccion = "Acciones y Procesos (P1) P2: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-6-p3";



function Leccion6TechnologyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6TechnologyP2;
