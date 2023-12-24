/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Header from "../Shared/Header";
import TodoCard from "./TodoCard";


const Todo = ({ todo, refetch }) => {

    return (
        <div className=" lg:w-[300px] w-[200px]">
            <Header title={'To-Do'} color={'bg-[#3b57e3]'} count={todo.length} ></Header>
            <div className=" bg-input_bg min-h-[50vh] overflow-y-auto">
                {
                    todo.length > 0 ? (
                        todo.map((item, idx) => (
                            <TodoCard refetch={refetch} item={item} id={item._id} key={idx}></TodoCard>
                        ))
                    ) : (
                        <p className=" font-Syne my-2 text-center text-placeholder">No tasks available.</p>
                    )
                }


            </div>

        </div>
    );
};

export default Todo;