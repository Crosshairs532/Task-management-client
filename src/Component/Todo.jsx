/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Droppable } from "react-beautiful-dnd";
import Header from "../Shared/Header";
import TodoCard from "./TodoCard";
import { useDrop } from "react-dnd";
import axios from "axios";
import toast from "react-hot-toast";


const Todo = ({ todo, refetch }) => {

    const [{ isOver }, drop] = useDrop({
        accept: 'task',
        drop: (item) => {
            addItem(item)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const addItem = async ({ id }) => {
        console.log(id);
        const res = await axios.patch(`https://task-management-server-five-kohl.vercel.app/task/status?id=${id}`, { status: 'todo' })
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success('task Completed')
        }
    }



    return (
        <div className=" lg:w-[300px] w-[200px]">
            <Header title={'To-Do'} color={'bg-[#3b57e3]'} count={todo.length} ></Header>
            <div ref={drop} className={` ${isOver ? " bg-[#83869351]" : " bg-input_bg"} min-h-[50vh] overflow-y-auto `}>
                {
                    todo?.length > 0 ? (
                        todo?.map((item, idx) => (
                            <TodoCard refetch={refetch} index={idx} item={item} id={item._id} key={idx}></TodoCard>
                        ))
                    )
                        : (
                            <p className=" font-Syne my-2 text-center text-placeholder">No tasks available.</p>
                        )
                }
            </div>


        </div>
    )
}
export default Todo;