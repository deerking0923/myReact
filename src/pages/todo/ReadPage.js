import { useParams, useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { useCallback } from "react";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();

  const moveToModify = useCallback(
    (tno) => {
      navigate({ pathname: `/todo/modify/${tno}` });
    },
    [tno]
  );

  return (
    <div className="font extrabold w-full bg-white mt-6">
    <div className="text-2xl">
        Todo Read Page Component {tno}
    </div>
    <ReadComponent tno={tno}></ReadComponent>
</div>


  );
};

export default ReadPage;
