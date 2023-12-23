/* eslint-disable no-unused-vars */
import img1 from '../assets/doodle.svg'
import img2 from '../assets/sssplatter.svg'
import img3 from '../../../dddoodle-pack/arrows/arrow-10.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Banner = () => {
    const GoTo = useNavigate();
    const handleExplore = () => {
        GoTo('/login')
    }
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'linear'

        })
        Aos.refresh();
    }, [])
    return (
        <div className=" min-h-[calc(100vh-68px)] mt-14">
            <div>
                <img data-aos-easing='linear' data-aos-duration='1000' data-aos='fade-right' src={img1} className=' absolute z-10 w-[100%] -left-[100px] lg:w-[40%] top-[120px] -bottom-[100px] opacity-30 lg:opacity-40 lg:-left-[200px] ' alt="" />
                <img data-aos-easing='linear' data-aos-duration='1000' data-aos='fade-left' src={img3} className=' rotate-90 absolute w-[15%] lg:w-[20%] top-[90px] lg:top-[200px] right-7 lg:right-[100px] ' alt="" />
            </div>
            <div className="">
                <div data-aos-easing='linear' data-aos-duration='3000' data-aos='fade-zoom-in' className=" flex flex-col items-center justify-center space-y-10">
                    <h1 className=" w-[100%] lg:w-[57%] mx-auto text-center font-Syne  text-2xl lg:text-6xl font-bold leading-[1]">Manage & optimize <br /> Your daily task or project </h1>

                    <p className=' w-[1/2] text-center text-sm lg:text-lg'>Collaborate , manage project and reach new productivity peaks with Task</p>
                    <button onClick={handleExplore} className=" px-4 z-10 duration-100 py-5 bg-after_hover text-body-color rounded-lg">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;