const About = () => {
    return (  
        <div name="about" className="w-full h-screen bg-[rgb(10,25,47)] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>
                           Hi, I'm Tahmina, nice to meet you. Please take a look around 
                        </p>
                    </div>
                    <div>
                        <p>I am passionate about building eye catching websites which supports all devices. I specialize in creating web applications for clients ranging from individual and small-businesses all the way to large enterprise corporations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;