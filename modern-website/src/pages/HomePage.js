import React from "react";
import { useRef } from "react";
import NavBar from "../components/navigation/NavBar";
import ProjectCard from "../components/ui/ProjectCard";
import ImageCycle from "../components/ui/ImageCycle";
import TimeLine from "../components/ui/TimeLine";
import TextScrollIng from "../helper/TextScrollIng";
import text from "../assets/text/text.json"
import background from '../assets/images/background.jpg'
import AboutImage from "../components/ui/AboutImage";

const HomePage = (props) => {

    const aboutRef = useRef();

    const workRef = useRef();

    const projectRef = useRef();



    return(
    <div className=" flex flex-col">
        
        <NavBar refs={[[aboutRef, 'About'], [workRef, 'Work'], [projectRef, 'Projects']]}/>
        
        <img alt="The night sky" className=" fixed left-0 top-0 -z-[1000] w-full h-full" src={background} />
        <div className="text-white  flex-col justify-center content-center w-full mt-20">
            <div className="w-full flex items-center content-center flex-col">
                <div className="flex flex-col items-start w-full ml-[20vw]">
                    <h1 className=" textColorGrade text-3xl sm:text-4xl mb-8">
                        Hi,<br/>
                        I'm Samuel
                    </h1>
                    <TextScrollIng sentences={[text.homePage]} />
            
                </div>
                <div className=" flex  mt-20 justify-center w-full h-96">
                    <ImageCycle photos={['florida', 'charlottesville','hershey', 'floridaSwimming', 'starWars', 'califronia', 'carterSamDate', 'panda']} css={'  rounded-xl h-80 size-full  absolute '}/>
                </div>
            </div>
            <div ref={aboutRef} className="flex flex-col items-center w-full">
                    <h1 className=" textColorGrade text-3xl sm:text-4xl mb-4 mt-10">
                        About me 
                    </h1>
                    <div className="flex w-full flex-row flex-wrap justify-center">
                        <AboutImage text={text.growingUp} title={"Early life"} image={'richmondPhoto'}/>
                        <AboutImage text={text.swim} title={"Swimming"} image={'sanAntonio_swim'}/>
                        <AboutImage text={text.college} title={"College"} image={'jmu'}/>
                        <AboutImage text={text.adult} title={"Post College"} image={'westCoastRacer'}/>
                        <AboutImage text={text.hobbies} title={"Hobbies"} image={'snowBoard'}/>
                    </div>
                    
            </div>
                
            
                  
            <div ref={workRef} className="flex flex-col items-center w-full mb-6 mt-6">
                <h1 className=" textColorGradeWork text-3xl sm:text-4xl mb-2">Work experience</h1>
                <TimeLine  timeElements={[text.brit,text.promoted,text.interns,text.automationTeam,text.interfaceTeam,text.conversionTeam,text.startJob]}/>
            </div>

                  
            <div ref={projectRef} className="flex flex-col items-center w-full mb-6 mt-32">
                <h1 className=" textColorGradeProject text-3xl sm:text-4xl mb-4">Personal projects</h1>
            </div>
            <div className="w-full flex justify-center flex-wrap mt-8">
                <ProjectCard link={'https://github.com/samksites/modern-website'} iconParams={[{'key': 'tailwind'}, {'key': 'react'}]} cardTitle={text.personalWebsite.header} desc={text.personalWebsite.desc}/>
                <ProjectCard iconParams={[{'key': 'python'}]} cardTitle={text.ncaaRanking.header} desc={text.ncaaRanking.desc} />
            </div>
        </div>
    </div>
    )
}


export default HomePage