

const Header = ({ title, count, color }) => {

    return (
        <div className={` lg:w-[300px] flex gap-3 w-[200px] px-3 py-3 bg-after_hover`} >
            <h1 className=" font-Syne text-body-color">{title} </h1>
            <p className=" w-6 h-6 text-center rounded-full bg-border-color">{count}</p>
        </div >
    );
};

export default Header;