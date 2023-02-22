import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Bootstrap from '../assets/Bootstrap-logo.png';
import Scss from '../assets/scss.png';
const Skills = () => {
    return ( 
        <div name="skills" className='bg-[rgb(10,25,47)] text-gray-300 w-full h-auto md:h-screen'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex-col flex justify-center w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-5'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-0
                    '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-2'>HTML</p>
                        <p>Expert</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                        <p className='my-2'>CSS</p>
                        <p>Expert</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="js icon" />
                        <p className='my-2'>JavaScript</p>
                        <p>Intermediate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                        <p className='my-2'>React</p>
                        <p>Intermediate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                        <p className='my-2'>Tailwind</p>
                        <p>Expert</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={Scss} alt="scss icon" />
                        <p className='my-2'>SCSS</p>
                        <p>Expert</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={FireBase} alt="firebase icon" />
                        <p className='my-2'>Firebase</p>
                        <p>Intermediate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={GitHub} alt="github icon" />
                        <p className='my-2'>Github</p>
                        <p>Intermediate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="bootstrap icon" />
                        <p className='my-2'>Bootstrap</p>
                        <p>Expert</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;