import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Cetificados from '../pages/Certificados'
import Contato from '../pages/Contato'
import Serv from '../pages/Outrasserv';
import Curriculo from '../pages/Curriculo';

export const Rotas = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/certificados',
        element: <Cetificados />,
      },
      {
        path: '/contato/:subject?',
        element: <Contato />,
      },
      {
        path: '/outros-serviços',
        element: <Serv />,
      },
      {
        path: '/curriculo',
        element: <Curriculo />,
      },
    ],
  },
])