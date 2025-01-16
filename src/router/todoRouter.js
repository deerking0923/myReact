import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loding = <div>로딩중...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loding}>
          <TodoList></TodoList>
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="list"></Navigate>,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={Loding}>
          <TodoRead></TodoRead>
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loding}>
          <TodoAdd></TodoAdd>
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
