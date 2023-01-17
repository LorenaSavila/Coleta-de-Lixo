import { Route, Routes } from 'react-router-dom';
import App from './App';
import ColetaDeLixo from './ColetaDeLixo';
import ColetaSeletiva from './ColetaSeletiva';
import PaginaErro from './PaginaErro';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/coleta-de-lixo" element={<ColetaDeLixo />} />
      <Route path="/coleta-seletiva" element={<ColetaSeletiva />} />
      <Route path="/*" element={<PaginaErro />} />
    </Routes>
  );
};

export default AppRouter;
