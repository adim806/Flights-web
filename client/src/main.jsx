import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import './index.css';
import SigninPage from './routes/signINpage/SigninPage';
import SignUpPage from './routes/signUPpage/SignUpPage';
import HomePage from './routes/homepage/HomePage';
import DashboardLayout from './layout/dashboardLayout/DashboardLayout';
import DashboardPage from './routes/dashboardPage/DashboardPage';
import RootLayout from './layout/rootlayout/Rootlayout';


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path:"/",
        element: <HomePage/>,
      },
      {
        path:"/sign-in/*",
        element: <SigninPage/>,
      },
      {
        path:"/sign-up/*",
        element: <SignUpPage/>,
      },
      {
        element: <DashboardLayout/>,
        children:[
          {
            path: "/dashboard",
            element:<DashboardPage/>
          },

        ]
      }
    ],
 
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
