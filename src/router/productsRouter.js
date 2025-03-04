import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const productsRouter = () => {
  const Loading = <div>Loading.....</div>;

  const ProductsList = lazy(() => import("../pages/products/ListPage"));
  const ProductsADD = lazy(() => import("../pages/products/AddPage"));
  const ProductsRead = lazy(() => import("../pages/products/ReadPage"));
  const ProductsModify = lazy(() => import("../pages/products/ModifyPage"));

  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <ProductsList></ProductsList>
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="/products/list"></Navigate>,
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <ProductsADD></ProductsADD>
        </Suspense>
      ),
    },
    {
      path: "read/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProductsRead></ProductsRead>
        </Suspense>
      ),
    },
    {
      path: "modify/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProductsModify></ProductsModify>
        </Suspense>
      ),
    },
  ];
};

export default productsRouter;
