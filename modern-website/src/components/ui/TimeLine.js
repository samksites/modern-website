import React from "react";
import '../../App.css'
import '../../css/utility.css'
import Icon from "../icons/Icon";
import { useState } from "react";


const TimeLine = (props) => {

    var timeLineElements = props.timeElements.map((element,index) => getBlurb(element.header, element.time, element.summary,index));

    /**
     * Creates time line section
     * @param {object} elements different html elements
     * @param {int} index index of the blurb 
     * @returns html of blurb box
     */
    const blurb = (elements,index,position) => {
        
        var spin = ''
        var expand = ''
        if(position % 2 === 1){
            spin = position > 1 ?  ' -rotate-180  transition transform duration-1000 rotate-0' : '';
            if(position > 1){
                const element = document.getElementById("timeLine" + index);
                
                element.scrollIntoView({ behavior: "smooth" });
            }
        }else{
            expand = 'quick-example-test'
            spin = ' transition transform duration-1000 -rotate-180'
            
            
        }


        return (
        <div onClick={() => {var newList = [...timeLineBlurbs]; newList[index] = blurb(elements,index,position + 1); setTimeLineBlurbs(newList);}} key={"timeLine" + index} className="  pb-10 pt-10  w-3/4 sm:w-1/2 flex justify-start items-center  leftRighBorder">
            
            <div className="w-8  bg-white h-0.5 relative ">    
            </div>
            <div className={"flex flex-col justify-start items-center px-2 py-1 text-balance rounded-lg background w-full sm:w-3/4 timeLineBlurb text-black hover:cursor-pointer hover:shadow-blurbGlow  " + expand}>
                {elements.header}
                {elements.time}
                <div className={"quick-example " + expand}>
                    <div>
                        {elements.inDepth}
                    </div>
                    
                </div>
                <div className={" h-full flex col items-end bounceArrow"}>
                    <div className={"mt-4 arrow "}>
                        <div className={"flex justify-center items-center " + spin}>
                            <Icon key={"doubleDown1"} iconName={"doubleDown"} color={"white"} sizeParam={22} />
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>)
    }
    const [timeLineBlurbs, setTimeLineBlurbs] = useState(timeLineElements.map((elements,index) => {return( blurb(elements,index,1))}));
    

    return(
        <div className=" w-full flex flex-col ml-8 sm:ml-0 mt-20  ">
            
               {timeLineBlurbs}
            
            </div>
    )
}


const getBlurb = (header,time, inDepth,index) => {

    var blurb = {};

    blurb['header'] = <h3 id={"timeLine" + index} className="mt-1 text-2xl mb-2 text-center textColor">{header}</h3>

    blurb['time'] = <h3 className="mt-1 mb-2 text-center textColor">{time}</h3>

    blurb['inDepth'] = <p className="text-center ">{inDepth}</p>


    return blurb;
}


export default TimeLine;

