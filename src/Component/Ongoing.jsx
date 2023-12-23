/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Header from "../Shared/Header";
import OngoingCard from "./OngoingCard";

const Ongoing = ({ ongoing, refetch }) => {
    return (
        <div>
            <Header title={'On-Going'} color={'bg-[#0a1343]'} count={ongoing.length} ></Header>
            <div className=" bg-input_bg ">
                {
                    ongoing.length > 0 ? (
                        ongoing.map((item, idx) => (
                            <OngoingCard refetch={refetch} item={item} id={item._id} key={idx}></OngoingCard>
                        ))
                    ) : (
                        <p className=" font-Syne my-2 text-center text-placeholder">No tasks available.</p>
                    )
                }


            </div>
        </div>
    );
};

export default Ongoing;