/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Header = ({ title, count, color }) => {
    console.log(color);
    return (
        <div className={` lg:w-[300px] rounded-md flex gap-3 w-[200px] px-3 py-3 ${color}`} >
            <h1 className=" font-Syne text-body-color">{title} </h1>
            <p className=" w-6 h-6 text-center rounded-full bg-border-color">{count}</p>
        </div >
    );
};

export default Header;