import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Quiz } from './pages/Quiz';
import { Study } from './pages/Study';
import { PhotoSolver } from './pages/PhotoSolver';
import { ImageEditor } from './pages/ImageEditor';
import { Search } from './pages/Search';
import { Formulas } from './pages/Formulas';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/study" element={<Study />} />
          <Route path="/solver" element={<PhotoSolver />} />
          <Route path="/image-edit" element={<ImageEditor />} />
          <Route path="/search" element={<Search />} />
          <Route path="/formulas" element={<Formulas />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
