/* eslint-disable react/prop-types */
// import { Droppable } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import Header from "../Shared/Header";
import CompletedCard from "./CompletedCard";
import axios from "axios";
import toast from "react-hot-toast";


const Completed = ({ completed, refetch }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => {
            addItem(item)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addItem = async ({ id }) => {
        console.log(id);
        const res = await axios.patch(`https://task-management-server-five-kohl.vercel.app/task/status?id=${id}`, { status: 'completed' })
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success('task Completed')
        }
    }
    return (

        <div ref={drop} className={`lg:w-[300px] w-[200px] `}>
            <Header title={'Completed'} color={'bg-[#5a5e72]'} count={completed?.length} ></Header>
            <div className={` ${isOver ? " bg-[#83869351]" : " bg-input_bg"} min-h-[50vh] overflow-y-auto `}>
                {
                    completed.length > 0 ? (
                        completed.map((item, idx) => (
                            <CompletedCard refetch={refetch} item={item} id={item._id} key={idx}></CompletedCard>
                        ))
                    ) : (
                        <p className=" font-Syne my-2 text-center text-placeholder">No tasks available.</p>
                    )
                }
            </div>
        </div>

    );
};

export default Completed;