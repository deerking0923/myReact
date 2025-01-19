import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  duDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);
  const {moveToList, moveToModify} = useCustomMove();

  useEffect(() => {
    getOne(tno).then((res) => {
      setTodo(res);
    });
  }, [tno]);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("TNO", todo.tno)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Due Date", todo.duDate)}
      {makeDiv("Complete", todo.complete ? "완료" : "미완료")}
      <div className="flex justify-end p-4">
        <button type = "button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => moveToList()}
        >
          목록보기
        </button>
        <button type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => moveToModify(tno)}        >
          수정하기
        </button>
      </div>
    </div>
  );
};

const makeDiv = (title, value) => {
  return (
    <div className="flex justify-center">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <div className="w-1/5 p-6 text-right font-bold">{title}</div>
        <div className="w-4/5 p-6 rounded-r border border-soild shadow-md">
          {value}
        </div>
      </div>
    </div>
  );
};

export default ReadComponent;
