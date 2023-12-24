/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GiCrossMark } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = ({ item, refetch }) => {
    const { TaskName, priority, date, description } = item;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const updating = toast.loading('updating');
            const res = await axios.patch(`https://task-management-server-five-kohl.vercel.app/task?id=${item?._id}`, data)
            if (res.data?.modifiedCount > 0) {
                toast.success('Updated', { id: updating })
                refetch();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(TaskName);
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <MdOutlineTipsAndUpdates onClick={() => document.getElementById('my_modal_3').showModal()} size={20}></MdOutlineTipsAndUpdates>
            <dialog id="my_modal_3" className="modal bg-[#0a134341] duration-300 backdrop-blur-md">
                <div className="modal-box bg-input_bg">
                    <form method="dialog">
                        <button className=""><GiCrossMark size={30} />
                        </button>
                    </form>
                    <h1 className=" create font-Syne font-bold text-xl lg:text-3xl ">Update Task:</h1>
                    <div className=" font-Syne rounded-lg">
                        <form className=" p-2 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className=" flex lg:flex-row gap-2 md:flex-row  items-center ">
                                <div>
                                    <h1>{TaskName}</h1>
                                    <label className=" text-xl font-Syne" htmlFor="taskname"> Task Name:</label>
                                    <br />
                                    <input id="taskname" value={TaskName} className=" px-2 py-2 rounded-2xl  text-placeholder" placeholder=" Name Your Task..." {...register("TaskName", { required: true })} /> <br />
                                    {errors.TaskName && <span className=" absolute text-[red]">This field is required</span>}
                                </div>
                                <div>
                                    <label className=" font-Syne text-xl" htmlFor="priority">Priority:</label> <br />
                                    <select value={priority} className=" rounded-lg  font-Syne py-2 px-2 text-placeholder" {...register("priority", { required: true })}>
                                        <option className=" font-Syne" value="Low">Low</option>
                                        <option className=" font-Syne" value="Moderate">Moderate</option>
                                        <option className=" font-Syne" value="high">High</option>
                                    </select>
                                    {errors.priority && <span className=" absolute text-[red]">This field is required</span>}
                                </div>

                            </div>
                            <div className=" pt-5 flex flex-col">
                                <div>
                                    <h1 className=" text-xl">Task Description</h1>
                                    <textarea value={description} placeholder=" enter description...." name="description" {...register('description', { required: true })} id="" className=" w-full" rows="5"></textarea>
                                    {errors.description && <span className=" text-[red]">This field is required</span>}
                                </div>
                                <input value={date} type="date" {...register('date', { required: true })} />
                            </div>

                            <input type="submit" value={'update'} className=" bg-after_hover font-Syne text-input_bg px-5 py-3 rounded-lg border-border-color" />
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;