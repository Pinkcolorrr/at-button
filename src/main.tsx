import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersonPage } from "@pages/PersonPage";
import App from './app/App.tsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "person",
    element: <PersonPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
