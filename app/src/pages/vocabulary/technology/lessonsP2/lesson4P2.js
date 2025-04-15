import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsTechnology/l4.js";

const tituloLeccion = "Equipos y Hardware (P3) P2: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-4-p3";



function Leccion4TechnologyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4TechnologyP2;
