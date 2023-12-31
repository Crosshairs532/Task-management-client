/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Droppable } from "react-beautiful-dnd";
import Header from "../Shared/Header";
import OngoingCard from "./OngoingCard";
import { useDrag, useDrop } from "react-dnd";
import axios from "axios";
import toast from "react-hot-toast";

const Ongoing = ({ ongoing, refetch }) => {
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
        const res = await axios.patch(`https://task-management-server-five-kohl.vercel.app/task/status?id=${id}`, { status: 'ongoing' })
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success('task Completed')
        }
    }

    return (

        <div className=" lg:w-[300px] w-[200px]">
            <Header title={'On-Going'} color={'bg-[#0a1343]'} count={ongoing.length} ></Header>
            <div ref={drop} className={` ${isOver ? " bg-[#83869351]" : " bg-input_bg"} min-h-[50vh] overflow-y-auto `}>
                {
                    ongoing.length > 0 ? (
                        ongoing?.map((item, idx) => (
                            <OngoingCard refetch={refetch} item={item} id={item._id} key={idx}></OngoingCard>
                        ))
                    ) : (
                        <p className=" font-Syne my-2 text-center text-placeholder">No tasks available.</p>
                    )
                }
            </div>
        </div>)


};

export default Ongoing;