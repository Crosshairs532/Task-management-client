/* eslint-disable react/prop-types */
import Header from "../Shared/Header";
import CompletedCard from "./CompletedCard";


const Completed = ({ completed, refetch }) => {
    // #f0f2ff
    return (
        <div>
            <Header title={'Completed'} color={'bg-[#5a5e72]'} count={completed?.length} ></Header>
            <div className=" bg-input_bg ">
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