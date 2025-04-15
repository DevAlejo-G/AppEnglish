import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsSports/l1.js";

const tituloLeccion = "Lección 1 P3: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-2";



function Leccion1SportsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1SportsP3;
