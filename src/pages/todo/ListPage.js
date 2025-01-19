import { useParams, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>
      <ListComponent></ListComponent>
    </div>
  );

  // const [queryParams] = useSearchParams();
  // const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  // const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  // return (
  //   <div className="p-4 w-full bg-white">
  //     <div className="text-3xl font-extrabold">
  //       Todo List Page Component 페이지 번호 : {page}, 페이지 사이즈 : {size}
  //     </div>
  //   </div>
  // );
};

export default ListPage;
