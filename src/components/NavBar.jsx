import { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import CV from '../assets/Cv.pdf';
import logo from '../assets/tahmina.png';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return ( 
        <div className="fixed w-full h-[80px] flex justify-between lg:justify-end items-center px-4 bg-[rgb(10,25,47)] text-gray-300 z-10">
         {/* menu */}
            <div className=''>
                {/* <a href="">
                    <img src={logo} alt="" />
                </a> */}
                
                <ul className='hidden md:flex'>
                    <li>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {nav?<FaTimes/>: <FaBars className="text-white cursor-pointer"/>}
            </div>
            {/* mobile menu */}
            <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[rgb(10,25,47)] flex flex-col justify-center items-center': 'hidden'}>
                    <li className='py-6 text-4xl'>
                        <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <   Link to="work" smooth={true} duration={500} onClick={handleClick}>
                            Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'><a href="https://www.linkedin.com/in/tahmina-islam-shammee-9413271b7/" className='flex justify-between items-center w-full text-gray-300'>Linkdin <FaLinkedin size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'><a href="https://github.com/tahminaislamshammee" className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'><a href="mailto:tahminaislamshammee@gmail.com" className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30}/></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'><a download href={CV} className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30}/></a></li>
                    
                </ul>

            </div>

        </div>
     );
}
 
export default NavBar;