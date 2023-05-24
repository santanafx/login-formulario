import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Context } from './context/globalContext';
import { Usuario } from './pages/Usuario';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar';

function App() {

  const { autenticar } = React.useContext(Context);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          {autenticar ? <Route path='/usuario' element={<Usuario />} /> : ''}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
