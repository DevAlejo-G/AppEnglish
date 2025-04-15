import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsSports/l4.js";

const tituloLeccion = "Lección 4 P2: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-4-p3";



function Leccion4SportsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4SportsP2;
