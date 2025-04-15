import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsTechnology/l8.js";

const tituloLeccion = "Otros Términos P2: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-8-p3";



function Leccion8TechnologyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8TechnologyP2;
