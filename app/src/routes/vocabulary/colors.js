import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1Colors from "pages/vocabulary/colors/lessons/lesson1";
import Leccion2Colors from "pages/vocabulary/colors/lessons/lesson2";

import Leccion1ColorsP2 from "pages/vocabulary/colors/lessonsP2/lesson1P2";
import Leccion2ColorsP2 from "pages/vocabulary/colors/lessonsP2/lesson2P2";

import Leccion1ColorsP3 from "pages/vocabulary/colors/lessonsP3/lesson1P3";
import Leccion2ColorsP3 from "pages/vocabulary/colors/lessonsP3/lesson2P3";

import PracticeColors from "pages/vocabulary/colors/practice";

import NotFound from "pages/home/notFound";

const ColorsRoutes = () => {
  return (
    <Routes>
      <Route path="leccion-1" element={<Leccion1Colors />} />
      <Route path="leccion-2" element={<Leccion2Colors />} />

      <Route path="leccion-1-p2" element={<Leccion1ColorsP2 />} />
      <Route path="leccion-2-p2" element={<Leccion2ColorsP2 />} />

      <Route path="leccion-1-p3" element={<Leccion1ColorsP3 />} />
      <Route path="leccion-2-p3" element={<Leccion2ColorsP3 />} />

      <Route path="leccion-practica" element={<PracticeColors />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ColorsRoutes;
