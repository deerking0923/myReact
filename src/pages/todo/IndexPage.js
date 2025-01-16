import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
  const navigate = useNavigate();
  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  });
  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });

  return (
    <BasicLayout>
      <div className="w-full flex m-2 p-2">
        <div
          className="text-x1 m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickList}
        >
          LIST
        </div>
      </div>
      <div className="w-full flex m-2 p-2">
        <div
          className="text-x1 m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickAdd}
        >
          ADD
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
