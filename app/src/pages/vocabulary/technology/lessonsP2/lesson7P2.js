import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsTechnology/l7.js";

const tituloLeccion = "Acciones y Procesos (P2) P2: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-7-p3";



function Leccion7TechnologyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7TechnologyP2;
