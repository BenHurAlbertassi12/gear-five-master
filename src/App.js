/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import { Home } from './templates/Home/Home';
import { AppProvider } from './context/AppContext';
import { Contact } from './templates/Contatos/Contatos';
import { Portifoil } from './templates/Portifoil/Portifoil';

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portifoil" element={<Portifoil />} />
      </Routes>
    </AppProvider>
  );
};
