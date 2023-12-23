/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
    useQuery,
} from 'react-query'
import UseContextapi from '../Hooks/UseContextapi';
import { useEffect, useState } from 'react';
import Todo from '../Component/Todo'
import Ongoing from '../Component/Ongoing';
import Completed from '../Component/Completed';
const PreviousTask = () => {
    const [to_do, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const { user, isLoading } = UseContextapi();
    const { data, isPending, isFetched, refetch } = useQuery({
        queryKey: ['tasks'],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/task?email=${user?.email}`);
            if (res?.data) {
                setTodo(res?.data?.filter((task) => task.status == 'todo'))
                setOngoing(res?.data?.filter((task) => task.status == 'ongoing'))
                setCompleted(res?.data?.filter((task) => task.status == 'completed'))
            }
            return res?.data
        }
    })
    // useEffect(() => {
    //     refetch()
    //     console.log('helo');
    // }, [])
    if (!isFetched) {
        return <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    }


    console.log(data, to_do, ongoing, completed);
    return (
        <div className=' flex gap-3 '>
            <Todo refetch={refetch} todo={to_do}></Todo>
            <Ongoing refetch={refetch} ongoing={ongoing}> </Ongoing>
            <Completed refetch={refetch} completed={completed}> </Completed>
        </div >
    );
};

export default PreviousTask;