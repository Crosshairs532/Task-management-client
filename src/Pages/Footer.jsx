/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-text_color font-Syne text-input_bg rounded">
                <nav className="grid grid-flow-col gap-4">


                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/zidan.tanzim">                 <FaFacebook size={40} ></FaFacebook></a>
                        <a href="https://github.com/Crosshairs532"><FaGithub size={40} ></FaGithub></a>
                        <a href="https://www.linkedin.com/in/md-samsul-arefin/"><FaLinkedin size={40} ></FaLinkedin></a>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - <a href='https://www.facebook.com/zidan.tanzim' action="_blank" >Md.Samsul Arefin</a></p>
                </aside>
            </footer>

        </div >
    );
};

export default Footer;