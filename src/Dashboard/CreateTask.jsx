/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../authProvider/AuthProvider"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
// import ''

const CreateTask = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        const task = { ...data, userEmail: user?.email, status: 'todo' }
        try {
            const loadingToast = toast.loading('Loading...');
            const res = await axios.post('http://localhost:3000/task', task)
            if (res?.data?.insertedId) {
                toast.success('updated', { id: loadingToast })
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Toaster></Toaster>
            <h1 className=" create font-Syne font-bold text-6xl border-2 mt-[100px]">Create Task:</h1>
            <div className=" font-Syne rounded-lg bg-border-color">
                <form className=" w-[100%] p-5 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex lg:flex-row gap-5 md:flex-row flex-col items-center  justify-between">
                        <div>
                            <label className=" text-xl font-Syne" htmlFor="taskname"> Task Name:</label>
                            <br />
                            <input id="taskname" className=" px-6 py-4 border-2 rounded-2xl bg-input_bg text-placeholder" placeholder=" Name Your Task..." {...register("TaskName", { required: true })} /> <br />
                            {errors.TaskName && <span className=" absolute text-[red]">This field is required</span>}
                        </div>
                        <div>
                            <label className=" font-Syne text-xl" htmlFor="priority">Priority:</label> <br />
                            <select className=" rounded-lg bg-input_bg font-Syne px-4 py-4 text-placeholder" {...register("priority", { required: true })}>
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
                            <textarea placeholder=" enter description...." name="description" {...register('description', { required: true })} id="" className=" w-full bg-input_bg" rows="5"></textarea>
                            {errors.description && <span className=" text-[red]">This field is required</span>}
                        </div>
                        <input type="date" {...register('date', { required: true })} />
                    </div>

                    <input type="submit" className=" bg-after_hover font-Syne text-input_bg px-5 py-3 rounded-lg border-border-color" />
                </form>
            </div>
        </>
    )
}

export default CreateTask;