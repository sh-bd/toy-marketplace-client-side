import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import AddToy from './components/AddToy/AddToy';
import AllToys from './components/AllToys/AllToys';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MyToys from './components/MyToys/MyToys';
import Register from './components/Register/Register';
import UpdateToy from './components/UpDateToy/UpDateToy';
import ViewDetails from './components/ViewDetails/ViewDetails';
import './index.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import TabDetails from './components/Home/ReactTab/TabDetails/TabDetails';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/add-toy",
        element: <AddToy></AddToy>
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>
      },
      // {
      //   path: '/toy/:id',
      //   element: <PrivateRoute><TabDetails></TabDetails></PrivateRoute>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      // },
      {
        path: '/toy/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "my-toys/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
