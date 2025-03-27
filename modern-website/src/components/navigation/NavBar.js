import React, { useState } from "react";
import "../../App.css"
import "../../css/utility.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const NavBar = (props) => {

    const [open, setOpen] = useState(false);

    return(


        <nav className="h-8 w-full ">
            <ul className=" w-full h-full flex justify-end pr-12">
                <NavItem openVar={open} openFunc={setOpen}>
                    <DropDown passDown={props} />
                </NavItem>
            </ul>
        </nav>

    );
}

const NavItem = (props) => {
    

    return(
        <li className="w-6 flex justify-center items-center hover:cursor-pointer" onClick={() => props.openFunc(!props.openVar)}>
            <a title="Download resume" className="  hover:scale-110 mr-4" href="../../assets/text/Resume.pdf"  download>
                <ImProfile size={'19'} style={{ color: 'rgb(0, 211, 18)' }} />
            </a>
            <a title="GitHub" className=" hover:scale-110 mr-4"  href="https://github.com/samksites">
                <FaGithub size={'19'} style={{ color: 'rgb(0, 211, 18)' }} />
            </a>
            <a className=" hover:scale-110">
                <RxHamburgerMenu size={'25'} style={{ color: 'rgb(0, 211, 18)' }} /> 
            </a>
            
            {props.openVar && props.children}
        </li>
    )
    
}

const DropDown = (props) => {

    const dropDownItems = props.passDown.refs.map((item) => <DropDownItem key={item[1]} name={item[1]} ref={item[0]} />)
    
    return(
        <div className=" bg-greyColor rounded-md absolute top-8 w-24 overflow-hidden flex flex-col">
            {dropDownItems}
        </div>
    )
};

const DropDownItem = (props) => {
   
    return(
        <a className="textColor test hover:scale-105 m-2 rounded-md hover:bg-slate-800 h-10 flex items-center justify-center" onClick={() => {props.ref.current.scrollIntoView({behavior: 'smooth'})}}>
            {props.name}
        </a>

    );
}

    //     <div onClick={() => {ref.current.scrollIntoView({behavior: 'smooth'})}} className={"w-20 ml-4 h-full items-end flex justify-center  hover:cursor-pointer shadow-lg nav-shadow   [&>*]:hover:text-xl mr-1 ml-1 " + css}>
    //         <h2 className=" text-end text-lg text-linux-green text-base h-8 leading-7 mt-1 ">
    //             {text}
    //         </h2>
    //     </div>)
    // }

        // <div className="h-12 w-full mt-1 flex justify-center  text-white">
        //     <div className=" h-8 ml-8 w-1/2 flex justify-start content-end">

        //     </div>
        //     <div className=" h-full w-1/2 flex justify-end content-end">
        //         {navLinks("About",'',props.refs[0])}
        //         {navLinks("Work",'',props.refs[1])}
        //         {navLinks("Projects", "mr-8",props.refs[2])}

        //     </div>
            

        // </div>

export default NavBar