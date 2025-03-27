import React from "react";
import Icon from "../icons/Icon";
import { FaGithub } from "react-icons/fa";
import '../../App.css'

const ProjectCard = (props) => {

    var icons = props.iconParams.map((iconParams,index) => (<Icon color={'rgb(0, 211, 18)'}  key={iconParams.key + index} iconName={iconParams.key} sizeParam={22} />))
    return(
    <div className="background text-black w-96 h-72 flex flex-col m-4 rounded-md border-solid">
        <div className="w-full text-center borderStyle border-b-2">

                <h3 className="mt-2 mb-2 textColor text-xl">
                    {props.cardTitle}
                </h3>

        </div>
        <div className="w-full mt-4 ml-2 flex flex-row justify-start items-center">
            <h4 className="mr-1 text-center">
                Technologies:
            </h4>
            <div className="flex ">
                {icons}
            </div>
            
        </div>
        <div className="w-full mt-4 flex flex-row justify-center borderStyle border-t-2 pt-4">
            <p className="text-sm text-center">
                {props.desc}
            </p>
            
        </div>
        <div className=" w-full flex justify-center items-end h-full pb-2">
            <a  href={props.link}>
                <FaGithub style={{ color: 'rgb(0, 211, 18)' }}  className=" cursor-pointer size-6 hover:size-7" />
            </a>
            
        </div>

    </div>)
}




export default ProjectCard;