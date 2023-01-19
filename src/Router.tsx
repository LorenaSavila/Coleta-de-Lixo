import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ColetaDeLixo from './views/coleta de lixo/ColetaDeLixo';
import ColetaSeletiva from './ColetaSeletiva';
import PaginaErro from './views/PaginaErro';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consulta-bairro" element={<ColetaDeLixo />} />
      <Route path="/coleta-seletiva" element={<ColetaSeletiva />} />
      <Route path="/*" element={<PaginaErro />} />
    </Routes>
  );
};

export default AppRouter;
