import React from "react";
import '../../App.css'
import grabImage from "../../helper/grabImage";
import { useState, useEffect } from "react";




const ImageCycle = (props) => {

    const [photoNumber, setPhotoNumber] = useState(0);
    const [imageListLength] = useState(props.photos.length);
    const [imageList, setImageList] = useState([grabImage([props.photos[1]], props.css + " animate-longFadeOut", -1)[0],grabImage([props.photos[0]], props.css  + " animate-fadeOut", 0)[0]])
 

    useEffect(() => {
        const intervalId = setInterval(() => {
            var imageNumber = (photoNumber + 2) % imageListLength;
            var flipImageList = [];
            flipImageList[1] = imageList[0];

            flipImageList[0] = grabImage([props.photos[imageNumber]], props.css + " animate-longFadeOut",photoNumber)[0]
            setImageList(flipImageList)
            setPhotoNumber(photoNumber + 1);
            
        }, 15000); // 5000 milliseconds = 5 second
    
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, [photoNumber,imageList,imageListLength]);

    return (
        <div className=" h-96 w-60 scale-125 ">
            {imageList}
            
            
        </div>
        
        
    )

}


export default ImageCycle