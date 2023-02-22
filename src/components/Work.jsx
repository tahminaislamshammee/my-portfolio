import Quiz from '../assets/projects/quiz.png'
import KawaDawa from '../assets/projects/kawadawa.png'
import ReactPortfolio from '../assets/projects/react-portfolio.png'
import BootstrapPortfolio from '../assets/projects/portfolio-2.png'
import CafeSite from '../assets/projects/cafesite.png'
import Todo from '../assets/projects/todo.png'
const Work = () => {
    return ( 
        <div name="work" className="w-full h-auto overflow-hidden text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-2 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">//Check out some of my recent workes</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{backgroundImage: `url(${KawaDawa})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider text-center inline-block'>
                                Restaurant project - Bootstrap
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/tahminaislamshammee/restaurantProject">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://tahminaislamshammee.github.io/restaurantProject/">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${ReactPortfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider text-center inline-block'>
                                Portfolio project - React, styled components
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/tahminaislamshammee/React-portfolio">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://tahminaislamshammee.github.io/React-portfolio/">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Quiz})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider text-center inline-block'>
                                Quiz project - JS
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://codepen.io/_tahmina/full/bGqQRqj">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://codepen.io/_tahmina/full/bGqQRqj">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Todo})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider text-center inline-block'>
                                Todo project - JS
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://codepen.io/_tahmina/pen/ZEKBwzo">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://codepen.io/_tahmina/full/ZEKBwzo">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${BootstrapPortfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider inline-block text-center'>
                                Portfolio project - Bootstrap
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/tahminaislamshammee/samplePortfolio">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://tahminaislamshammee.github.io/samplePortfolio/">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${CafeSite})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'> 
                            <span className='text-2xl font-bold text-white tracking-wider text-center inline-block'>
                                Multipage project - Bootstrap, JS
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/tahminaislamshammee/CafeSite">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        code
                                    </button>
                                </a>
                                <a href="https://tahminaislamshammee.github.io/CafeSite/">
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-2'>
                                        demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Work;