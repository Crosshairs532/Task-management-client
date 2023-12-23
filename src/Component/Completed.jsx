/* eslint-disable react/prop-types */
import Header from "../Shared/Header";


const Completed = ({ completed }) => {
    // #f0f2ff
    return (
        <div>
            <Header title={'Completed'} color={'#5a5e72'} count={completed?.length} ></Header>

        </div>
    );
};

export default Completed;