import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../assets/layouts/Home";
import CategorisNews from "../pages/categorisNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: '/category/:id',
                element: <CategorisNews></CategorisNews>,
                loader: ({ params }) =>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    )
            }
        ],
    },
    {
        path: '/news',
        element: <h1>news</h1>
    },
    {
        path: '/auth',
        element: <h1>auth</h1>
    },
    {
        path: '*',
        element: <h2>error</h2>
    }
]);


export default router