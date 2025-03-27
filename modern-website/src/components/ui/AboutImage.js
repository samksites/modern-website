import React from "react";
import grabImage from "../../helper/grabImage";
import '../../css/flipImage.css'

const AboutImage = (props) => {



    return(
        
                <div className="h-[35rem] about-title m-8">
                    <h2 className=" text-center text-2xl mb-3">{props.title}</h2>
                <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                    {grabImage([props.image],' h-[30rem] w-auto  rounded-[2em] hover:cursor-pointer',0)}
                </div>
                <div className="flip-card-back  p-5 pt-5 ">
                    <p>{props.text}</p>
                    
                </div>
                </div>
            </div> 
          </div>
    );
}

export default AboutImage;