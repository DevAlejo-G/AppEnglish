import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsSports/l1.js";

const tituloLeccion = "Lección 1 P2: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-1-p3";



function Leccion1SportsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1SportsP2;