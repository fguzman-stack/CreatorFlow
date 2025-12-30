import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SalesPage from './pages/SalesPage';
import CourseLanding from './pages/CourseLanding';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/course" element={<CourseLanding />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      {/* Ruta comodín para 404 */}
      <Route path="*" element={<div style={{padding:40, textAlign:'center'}}>Página no encontrada</div>} />
    </Routes>
  </BrowserRouter>
);

export default App; 