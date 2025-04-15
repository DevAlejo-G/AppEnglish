import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsTechnology/l7.js";

const tituloLeccion = "Acciones y Procesos (P2) P3: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-8";



function Leccion7TechnologyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7TechnologyP3;
