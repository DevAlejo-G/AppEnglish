import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1Sports from "pages/vocabulary/sports/lessons/lesson1";
import Leccion2Sports from "pages/vocabulary/sports/lessons/lesson2";
import Leccion3Sports from "pages/vocabulary/sports/lessons/lesson3";
import Leccion4Sports from "pages/vocabulary/sports/lessons/lesson4";

import Leccion1SportsP2 from "pages/vocabulary/sports/lessonsP2/lesson1P2";
import Leccion2SportsP2 from "pages/vocabulary/sports/lessonsP2/lesson2P2";
import Leccion3SportsP2 from "pages/vocabulary/sports/lessonsP2/lesson3P2";
import Leccion4SportsP2 from "pages/vocabulary/sports/lessonsP2/lesson4P2";

import Leccion1SportsP3 from "pages/vocabulary/sports/lessonsP3/lesson1P3";
import Leccion2SportsP3 from "pages/vocabulary/sports/lessonsP3/lesson2P3";
import Leccion3SportsP3 from "pages/vocabulary/sports/lessonsP3/lesson3P3";
import Leccion4SportsP3 from "pages/vocabulary/sports/lessonsP3/lesson4P3";

import NotFound from 'pages/home/notFound';


const SportsRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1Sports />} />
        <Route path="leccion-2" element={<Leccion2Sports />} />
        <Route path="leccion-3" element={<Leccion3Sports />} />
        <Route path="leccion-4" element={<Leccion4Sports />} />

        <Route path="leccion-1-p2" element={<Leccion1SportsP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2SportsP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3SportsP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4SportsP2 />} />

        <Route path="leccion-1-p3" element={<Leccion1SportsP3 />} />
        <Route path="leccion-2-p3" element={<Leccion2SportsP3 />} />
        <Route path="leccion-3-p3" element={<Leccion3SportsP3 />} />
        <Route path="leccion-4-p3" element={<Leccion4SportsP3 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default SportsRoutes;
