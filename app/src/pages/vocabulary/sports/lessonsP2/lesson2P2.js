import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsSports/l2.js";

const tituloLeccion = "Lección 2 P2: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-2-p3";



function Leccion2SportsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2SportsP2;
