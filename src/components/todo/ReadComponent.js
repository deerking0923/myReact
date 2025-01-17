import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
    tno: 0,
    title: "",
    writer: "",
    duDate: null,
    complete: false,
    };

const ReadComponent = ({ tno }) => {
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
        getOne(tno).then((res) => {
            setTodo(res);
        });
    }, [tno]);

    return (
        <div className="text-3xl font-extrabold">
            todo Read Component {tno}
        </div>
    );
}

export default ReadComponent;