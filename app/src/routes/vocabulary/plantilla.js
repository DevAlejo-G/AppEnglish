import NotFound from 'pages/home/notFound';


const AnimalsRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1 />} />
        <Route path="leccion-2" element={<Leccion2 />} />
        <Route path="leccion-3" element={<Leccion3 />} />
        <Route path="leccion-4" element={<Leccion4 />} />
        <Route path="leccion-5" element={<Leccion5 />} />
        <Route path="leccion-6" element={<Leccion6 />} />
        <Route path="leccion-7" element={<Leccion7 />} />
        <Route path="leccion-8" element={<Leccion8 />} />

        <Route path="leccion-1-p2" element={<Leccion1P2 />} />
        <Route path="leccion-2-p2" element={<Leccion2P2 />} />
        <Route path="leccion-3-p2" element={<Leccion3P2 />} />
        <Route path="leccion-4-p2" element={<Leccion4P2 />} />
        <Route path="leccion-5-p2" element={<Leccion5P2 />} />
        <Route path="leccion-6-p2" element={<Leccion6P2 />} />
        <Route path="leccion-7-p2" element={<Leccion7P2 />} />
        <Route path="leccion-8-p2" element={<Leccion8P2 />} />

        <Route path="leccion-1-p3" element={<Leccion1P3 />} />
        <Route path="leccion-2-p3" element={<Leccion2P3 />} />
        <Route path="leccion-3-p3" element={<Leccion3P3 />} />
        <Route path="leccion-4-p3" element={<Leccion4P3 />} />
        <Route path="leccion-5-p3" element={<Leccion5P3 />} />
        <Route path="leccion-6-p3" element={<Leccion6P3 />} />
        <Route path="leccion-7-p3" element={<Leccion7P3 />} />
        <Route path="leccion-8-p3" element={<Leccion8P3 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AnimalsRoutes;
