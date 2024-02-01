import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Containt/Home/Home";
import About from "../Containt/About/About";
import Login from "../Page/Login";
import Reg from "../Page/Reg";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:"/about",
          element:<About></About>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/Reg",
          element:<Reg></Reg>,
        }
      ]
    },
  ]);

