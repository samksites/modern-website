import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaPython } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";

// component that is a react icon
const Icon = (props) => {

    // uses a key to look up which react icon to use 
    const color = props.color === undefined ? '#38bdf8' : props.color;
    const iconMap = {
        'tailwind': tailwind( props.size, color),
        'javaScript': javaScript( props.size, color),
        'react': react( props.size, color),
        'doubleDown': doubleDown(props.size, color),
        'python': python(props.size, color)
    }

    const iconName = props.iconName


    return(<div className=" m-1"> {iconMap[iconName]} </div> )
}
// return tailwind icon
const tailwind = (size, color) => (<span title="TailWind"  name="tailwind" content="tailwind icon"><RiTailwindCssFill size={size} style={{'color': color}} /> </span> );

//returns javascript icon
const javaScript = (size, color) => (<span title="JavaScript" name="javaScript" content="javaScript icon"> <IoLogoJavascript size={size} style={{'color': color}}/> </span>);

// returns react icon
const react = (size, color) => (<span title="React" name="react" content="react icon"> <FaReact size={size} style={{'color': color}}/> </span>);

// returns down arrow icon
const doubleDown = (size, color) => (<span name="doubleDown" content="doubleDown icon"> <RxDoubleArrowDown size={size} style={{'color': color}}/> </span>); 

// returns python arrow icon
const python = (size, color) => (<span title="Python" name="python" content="doubleDown icon"> <FaPython size={size} style={{'color': color}}/> </span>); 




export default Icon