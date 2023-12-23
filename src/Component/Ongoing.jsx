/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Header from "../Shared/Header";

const Ongoing = ({ ongoing }) => {
    return (
        <div>
            <Header title={'On-Going'} color={'#5a5e72'} count={ongoing.length} ></Header>

        </div>
    );
};

export default Ongoing;