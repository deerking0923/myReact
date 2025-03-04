import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";
import memberRouter from "./memberRouter";
import productsRouter from "./productsRouter";

const Loding = <div>로딩중...</div>
const Main = lazy(() => import("../pages/MainPage"));
const  About = lazy(() => import("../pages/AboutPage"));
const Todo = lazy(() => import("../pages/todo/IndexPage"));
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));


const root = createBrowserRouter([
    {
        path: "/", element: <Suspense fallback={Loding}><Main></Main></Suspense>
    },
    {
        path: "/about", element: <Suspense fallback={Loding}><About></About></Suspense>
    },
    {
        path: "/todo", element: <Suspense fallback={Loding}><Todo></Todo></Suspense>,
        children: todoRouter()
    },
    {
        path: "/products", element: <Suspense fallback={Loding}><ProductsIndex /></Suspense>,
        children: productsRouter()
    },
    {
        path: "/member",
        children: memberRouter()
    }
    
])

//외부에서 내가 만든 컴포넌트를 사용할 수 있도록 export로 내보내 줘야 한다. 
export default root;