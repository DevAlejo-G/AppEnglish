import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsSports/l3.js";

const tituloLeccion = "Lección 3 P2: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-3-p3";



function Leccion3SportsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3SportsP2;
