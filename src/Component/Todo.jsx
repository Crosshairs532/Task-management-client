/* eslint-disable react/prop-types */
import Header from "../Shared/Header";
import TodoCard from "./TodoCard";


const Todo = ({ todo }) => {
    return (
        <div className="">
            <Header title={'To-Do'} color={'#5a5e72'} count={todo.length} ></Header>
            <div>
                {
                    todo?.map((item, idx) => (
                        <TodoCard item={item} key={idx}></TodoCard>

                    ))
                }

            </div>

        </div>
    );
};

export default Todo;