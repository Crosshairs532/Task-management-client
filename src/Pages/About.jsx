import Aos from "aos";
import { useEffect } from "react";


const About = () => {
    useEffect(() => {

        Aos.init({
            duration: 2000,

        })
        Aos.refresh()
    }
        , [])
    return (
        <div className=" bg min-h-screen flex justify-center items-center" >
            <div data-aos='fade-up' className=" flex justify-center items-center flex-col gap-4 w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
                <h1 className=" font-Syne text-4xl font-bold text-center"> About Us</h1>
                <div className=" font-Syne text-center ">
                    Welcome to <span className=" font-extrabold">TaskSwift</span>, where managing your tasks is made easy. Our platform simplifies your work with a clear dashboard, easy task creation, and straightforward editing. We believe in making productivity simple, empowering you to achieve your goals effortlessly. Thank you for choosing TaskSwift as your task management solution – helping you get things done has never been easier. Explore, create, and conquer your tasks with us!
                </div>
            </div>

        </div>
    );
};

export default About;