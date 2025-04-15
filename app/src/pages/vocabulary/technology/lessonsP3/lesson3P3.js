import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsTechnology/l3.js";

const tituloLeccion = "Equipos y Hardware (P2) P3: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-4";



function Leccion3TechnologyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3TechnologyP3;
