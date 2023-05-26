import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router=  createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element:<Homepage/>},
      {path: 'movies/:movie_id', element:<MovieDetailPage/>}
    ]
  }
]);
export default router