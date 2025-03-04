import LogoutComponent from "../../components/member/LogoutComponent";
import BasicMenu from "../../components/menus/BasicMenu";

const LogoutPage = () => {

    return(
        <div className="fixed top-0 left-0 z-[1055] flex flex-col h-full w-full">
            <BasicMenu></BasicMenu>
            <div className="flex rlex-wrap w-full h-full justify-center items-center border-2">
                <div className="text-2xl">
                    <LogoutComponent></LogoutComponent>
                </div>
            </div>
        </div>
    )
}

export default LogoutPage