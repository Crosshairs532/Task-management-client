/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiCircleMinus } from "react-icons/ci";


const TodoCard = ({ item }) => {
    console.log(item);
    return (
        <div className=" flex font-Syne justify-between hover:scale-110 cursor-pointer duration-100 rounded-md items-center px-4 py-2 lg:w-[200px] my-2 mx-auto bg-border-color">
            <h3>{item?.TaskName}</h3>

        </div>
    );
};

export default TodoCard;