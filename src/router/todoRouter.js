import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loding = <div>로딩중...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));

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
      element:<Navigate replace to="list"></Navigate>}
    ];
};

export default todoRouter;
