import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Login/Register/Register";
import NewsDetail from "../Pages/News/NewsDetail";
import EroorPagse from "../Pages/EroorPagse";
import PrivetRoutes from "./PrivetRoutes";
import About from "../Pages/About";

  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root> </Root>,
        errorElement: <EroorPagse></EroorPagse>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
              path: '/data/:id',
              element: <PrivetRoutes> <NewsDetail></NewsDetail> </PrivetRoutes>,
              loader: () => fetch('/data.json')
            },
            {
              path: 'about',
              element: <About></About>
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