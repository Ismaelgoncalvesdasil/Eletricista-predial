import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Rodape from './components/Rodape';
import './App.css'

function App() {
  return (
    <>
      <div>
        <NavbarReact />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Rodape />
      </div>
    </>
  );
}

export default App;
