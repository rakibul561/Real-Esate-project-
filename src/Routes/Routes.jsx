import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Login/Register/Register";

  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root> </Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('data.json'),
            },
            {
              path: '/login',
              element:<Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            }
        ]
    }

  ]);

  export default routes;