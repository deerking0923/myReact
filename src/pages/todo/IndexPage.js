import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return (
    <BasicLayout>
      <div className="w-full flex m-2 p-2">
        <div className="text-x1 m-1 p-2 w-20 font-extrabold text-center underline">LIST</div>
      </div>
      <div className="w-full flex m-2 p-2">
        <div className="text-x1 m-1 p-2 w-20 font-extrabold text-center underline">ADD</div>
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
