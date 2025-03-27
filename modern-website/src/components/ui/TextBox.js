import React from "react";


const TextBox = (props) => {

    return(
        <p className={"text-white sm:text-center " + props.width + " " + props.hight + " " + props.margin}>
            Hi my name is Sam Kettlewell-Sites. I am a 27 year old software engineer based in the D.C area and grew up in Richmond VA. I attended James Madison University from 2016-2021 where I graduated with a major in Integrated Science and Technology (ISAT) and a minor in Computer Science. In college I found my joy for programming and continued that on to my professional career. Outside of work I enjoy swimming competitively both on my masters swim team which I help run (Club Tribe) as well as some larger USA swimming compations like TYR pro series meets.
        </p>
    )
}


export default TextBox