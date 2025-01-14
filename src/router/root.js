import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loding = <div>로딩중...</div>
const Main = lazy(() => import("../pages/MainPage"));
const  About = lazy(() => import("../pages/AboutPage"));
const Todo = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
    {
        path: "/", element: <Suspense fallback={Loding}><Main></Main></Suspense>
    },
    {
        path: "/about", element: <Suspense fallback={Loding}><About></About></Suspense>
    },
    {
        path: "/todo", element: <Suspense fallback={Loding}><Todo></Todo></Suspense>
    }
])

//외부에서 내가 만든 컴포넌트를 사용할 수 있도록 export로 내보내 줘야 한다. 
export default root;