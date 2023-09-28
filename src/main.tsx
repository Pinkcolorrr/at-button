import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "@app/App";
import { store } from "@app/store";
import { PersonPage } from "@pages/PersonPage";
import "./index.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "person",
    element: <PersonPage/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
