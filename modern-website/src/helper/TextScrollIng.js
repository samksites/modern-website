import React from "react";
import { useState, useEffect } from "react";

const TextScrollIng = (props) => {

const [currentText, setCurrentText] = useState('');
const [currentIndex, setCurrentIndex] = useState(0);
const [currentGroup, setCurrentGroup] = useState(0);
const [flash, setFlash] = useState(true);


useEffect(() => {

    if (currentGroup < props.sentences.length) {
      
      if (currentIndex < props.sentences[currentGroup].length) {
        
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + props.sentences[currentGroup][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, 20);
    
        return () => clearTimeout(timeout);
      } else{
        if (currentGroup + 1 < props.sentences.length){
          setCurrentText(prevText => prevText + '\n');
        }
        
        setCurrentGroup(currentGroup + 1)
        setCurrentIndex(0)
      }
      
    } else{

      const timeout = setTimeout(() => {
        if (flash) {
        setCurrentText(prevText => prevText + ' _');
        setFlash(false);
        } else{
          setCurrentText(prevText => prevText.substring(0, prevText.length - 2));
          setFlash(true);
        }
      }, 800);

      return () => clearTimeout(timeout);

    }
  }, [currentIndex, props.sentence,currentGroup, flash]);
    

    return (<p className=" w-[30rem] whitespace-pre-wrap">{currentText}</p>)
}

export default TextScrollIng;