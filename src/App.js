import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Context } from './context/globalContext';
import { Usuario } from './pages/Usuario';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar';
import { Sobre } from './pages/Sobre';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';

function App() {

  const { autenticar } = React.useContext(Context);

  return (
    <>
      <BrowserRouter>
        <NavBar className='appNavBar' />
        <div className="appBody">
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/sobre' element={<Sobre />} />
            {autenticar ? <Route path='/usuario' element={<Usuario />} /> : ''}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer className="appFooter" />
      </BrowserRouter>
    </>
  );
}

export default App;
