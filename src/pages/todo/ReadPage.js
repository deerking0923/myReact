import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";

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
    <div className="text-3xl font-extrabold">
      todo Read Page Component {tno}
      <div>
        <button onClick={() => moveToModify(tno)}>수정</button>
      </div>
    </div>
  );
};

export default ReadPage;
