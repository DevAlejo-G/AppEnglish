import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsTechnology/l5.js";

const tituloLeccion = "Personas y Actitudes P3: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-6";



function Leccion5TechnologyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5TechnologyP3;
