import { lazy, Suspense } from "react";

const Loding = <div>로딩중...</div>;

const TodoList = lazy(() => import("../pages/todo/ListPage"));

const todoRouter = () => {
  return (
    {
        path: "list", element: <Suspense fallback={Loding}><TodoList></TodoList></Suspense>
    }
  );
};

export default todoRouter;
