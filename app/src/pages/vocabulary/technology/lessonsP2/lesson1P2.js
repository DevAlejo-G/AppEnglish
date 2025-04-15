import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsTechnology/l1.js";

const tituloLeccion = "Ciencias y Tecnología Avanzada P2: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-1-p3";



function Leccion1TechnologyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1TechnologyP2;