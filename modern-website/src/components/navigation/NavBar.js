import React from "react";

const NavBar = (props) => {

    const navLinks = (text, css) => {

        return(
        <div className={"w-16 flex justify-center content-center hover:cursor-pointer [&>*]:hover:text-lg mr-1 ml-1 " + css}>
            <h3>
                {text}
            </h3>
        </div>)
    }


    return(
        <div className="h-8 w-full mt-1 flex justify-end text-white">
            {navLinks("About")}
            {navLinks("Work")}
            {navLinks("Projects", "mr-8")}

        </div>
    );
}

export default NavBar