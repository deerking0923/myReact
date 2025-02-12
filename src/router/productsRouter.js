import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const productsRouter = () => {
    const Loading = <div>Loading.....</div>

    const ProductsList = lazy(() => import("../pages/products/ListPage"));
    const ProductsADD = lazy(() => import("../pages/products/AddPage"));
    return[
        {
                path: "list", element: <Suspense fallback={Loading}><ProductsList></ProductsList></Suspense>
        },
        {
            path:"", element:<Navigate replace to = "/products/list"></Navigate>
        },
        {
            path: "add", element: <Suspense fallback={Loading}><ProductsADD></ProductsADD></Suspense>
    }
    ]
}

export default productsRouter;