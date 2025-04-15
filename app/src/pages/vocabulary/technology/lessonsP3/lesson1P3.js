import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsTechnology/l1.js";

const tituloLeccion = "Ciencias y Tecnología Avanzada P3: Technology";
const linkSiguiente = "/vocabulary/technology/leccion-2";



function Leccion1TechnologyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1TechnologyP3;
