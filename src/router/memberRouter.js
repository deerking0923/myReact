import { Suspense, lazy } from "react";

const Loading = <div>로딩 중입니다</div>
const Login = lazy(() => import("../pages/member/LoginPage"))
const LogoutPage = lazy(() => import("../pages/member/LogoutPage"))

const memberRouter = () => {
    return[
        {
            path:"login",
            element:<Suspense fallback={Loading}><Login></Login></Suspense>
        },
        {
            path:"logout",
            element:<Suspense fallback={Loading}><LogoutPage></LogoutPage></Suspense>
        },
    ]
}

export default memberRouter