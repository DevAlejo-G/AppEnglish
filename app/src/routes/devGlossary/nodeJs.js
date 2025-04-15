import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1NodeJs from "pages/devGlossary/node.js/lessons/lesson1";
import Leccion2NodeJs from "pages/devGlossary/node.js/lessons/lesson2";
import Leccion3NodeJs from "pages/devGlossary/node.js/lessons/lesson3";
import Leccion4NodeJs from "pages/devGlossary/node.js/lessons/lesson4";
import Leccion5NodeJs from "pages/devGlossary/node.js/lessons/lesson5";
import Leccion6NodeJs from "pages/devGlossary/node.js/lessons/lesson6";
import Leccion7NodeJs from "pages/devGlossary/node.js/lessons/lesson7";
import Leccion8NodeJs from "pages/devGlossary/node.js/lessons/lesson8";

import Leccion1NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson1P2";
import Leccion2NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson2P2";
import Leccion3NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson3P2";
import Leccion4NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson4P2";
import Leccion5NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson5P2";
import Leccion6NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson6P2";
import Leccion7NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson7P2";
import Leccion8NodeJsP2 from "pages/devGlossary/node.js/lessonsP2/lesson8P2";

import NotFound from 'pages/home/notFound';


const NodeJsRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1NodeJs />} />
        <Route path="leccion-2" element={<Leccion2NodeJs />} />
        <Route path="leccion-3" element={<Leccion3NodeJs />} />
        <Route path="leccion-4" element={<Leccion4NodeJs />} />
        <Route path="leccion-5" element={<Leccion5NodeJs />} />
        <Route path="leccion-6" element={<Leccion6NodeJs />} />
        <Route path="leccion-7" element={<Leccion7NodeJs />} />
        <Route path="leccion-8" element={<Leccion8NodeJs />} />

        <Route path="leccion-1-p2" element={<Leccion1NodeJsP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2NodeJsP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3NodeJsP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4NodeJsP2 />} />
        <Route path="leccion-5-p2" element={<Leccion5NodeJsP2 />} />
        <Route path="leccion-6-p2" element={<Leccion6NodeJsP2 />} />
        <Route path="leccion-7-p2" element={<Leccion7NodeJsP2 />} />
        <Route path="leccion-8-p2" element={<Leccion8NodeJsP2 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default NodeJsRoutes;
