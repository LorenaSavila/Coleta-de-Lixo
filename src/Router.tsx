import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ColetaDeLixo from './ColetaDeLixo';
import ColetaSeletiva from './ColetaSeletiva';
import PaginaErro from './PaginaErro';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coleta-de-lixo" element={<ColetaDeLixo />} />
      <Route path="/coleta-seletiva" element={<ColetaSeletiva />} />
      <Route path="/*" element={<PaginaErro />} />
    </Routes>
  );
};

export default AppRouter;
