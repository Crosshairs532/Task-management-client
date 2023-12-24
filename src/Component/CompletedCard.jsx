/* eslint-disable react/prop-types */


import axios from "axios";
import toast from "react-hot-toast";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineTipsAndUpdates } from "react-icons/md";


const CompletedCard = ({ item, id, refetch }) => {
    console.log(item);
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
        <div className=" flex font-Syne justify-between hover:scale-110 cursor-pointer duration-100 rounded-md items-center px-4 py-2 lg:w-[200px] my-2 mx-auto bg-border-color">
            <MdOutlineTipsAndUpdates size={20}></MdOutlineTipsAndUpdates>
            <h3>{item?.TaskName}</h3>
            <CiCircleMinus size={20} onClick={() => handleDelete(id)} ></CiCircleMinus>
        </div>
    );
};

export default CompletedCard;