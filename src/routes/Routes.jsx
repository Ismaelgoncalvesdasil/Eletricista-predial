import React from 'react';

import Contato from '../pages/Contato'
import Home from '../pages/Home'
import App from '../App'
import { createBrowserRouter } from 'react-router-dom'

export const Rotas = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contato/:subject?',
        element: <Contato />,
      },
    ],
  },
])