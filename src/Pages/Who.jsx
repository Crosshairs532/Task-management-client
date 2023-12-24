/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import { useEffect } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { SiXdadevelopers } from "react-icons/si";


const Who = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
        Aos.refresh();
    }, [])
    return (
        <div data-aos='fade-up' className="relative container z-20 mx-auto">
            {/* <div className=" absolute  top-0 -z-20 w-[200px] h-[200px] bg-after_hover back"></div> */}
            <div className=" z-10">
                <h1 className=" font-Syne text-center font-bold pt-[100px] text-5xl">Who will be benefitted?</h1>
                <p className=" text-center font-Syne p-2">Every person who is needed to track their task are in need of this website</p>
                <div className=" grid mt-[50px] grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
                    <div>
                        <FaChalkboardTeacher size={64} color="#ff7b72" />
                        <p className='text-lg font-Syne mt-8'>Teacher's</p>
                    </div>
                    <div>
                        <PiStudentFill size={64}></PiStudentFill>
                        <p className=" text-lg font-Syne  mt-8" >Student</p>
                    </div>
                    <div>
                        <SiXdadevelopers size={64}></SiXdadevelopers>
                        <p className="text-lg font-Syne"> Developers</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Who;