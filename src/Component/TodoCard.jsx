/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import toast from "react-hot-toast";
import { CiCircleMinus } from "react-icons/ci";

import Modal from "./Modal";
import { Draggable } from "react-beautiful-dnd";
import { useDrag } from "react-dnd";


const TodoCard = ({ item, id, refetch, index }) => {
    console.log(item._id);
    console.log(id, index);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: item._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);
    const handleDelete = async () => {
        console.log(id);
        try {
            const res = await axios.delete(`https://task-management-server-five-kohl.vercel.app/task?id=${id}`)
            const deleting = toast.loading('deleting');
            if (res.data.deletedCount > 0) {
                toast.success('Deleted!', { id: deleting })
                refetch();
            }
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div ref={drag} className={`flex ${isDragging ? " opacity-40" : ' opacity-100'} font-Syne justify-between hover:scale-110 cursor-pointer duration-100 rounded-md items-center px-4 py-2 lg:w-[200px] my-2 mx-auto bg-border-color`}>
            <Modal item={item} refetch={refetch}></Modal>
            <h3>{item?.TaskName}</h3>

            <CiCircleMinus size={20} onClick={handleDelete}></CiCircleMinus>
        </div>
    )




};

export default TodoCard;