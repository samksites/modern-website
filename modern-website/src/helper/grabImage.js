import React from "react";
import '../App.css';
import snowBoard from "../assets/images/Sam_Carter_snowboard.jpeg";
import florida from "../assets/images/Florida_Group.jpeg";
import SamCarterCvill from "../assets/images/Sam_Carter_Cvill.jpeg";
import sanAntonioSwim from "../assets/images/SanAntonioSwimming.jpeg";
import westCoastRacer from '../assets/images/westCoastRacer.jpeg';
import floridaSwimming from '../assets/images/floridaSwimming.jpeg';
import richmond from '../assets/images/richmondVA.jpg';
import arlington from '../assets/images/arlingtonSunSet.jpeg';
import california from '../assets/images/califronia.jpeg';
import carterSamDate from '../assets/images/carterSamDate.jpeg';
import hershey from '../assets/images/hershey.jpeg';
import panda from '../assets/images/panda.jpeg';
import jmu from '../assets/images/jmu.jpg';
import starWars from '../assets/images/starWars.jpeg';

const snowBoardPhoto = {'id':'snowBoarding', 'src': snowBoard, 'alt': 'Snowboarding on snowy mountain'}

const floridaPhoto = { 'id':'florida',  'src': florida, 'alt': 'Photo of 4 people sitting on a giant chair on Florida beach.'}

const SamCarterCvillPhoto = {'id':'Cvill', 'src': SamCarterCvill, 'alt': 'Photo of myself and carter in Charlottesville VA. '}

const sanAntonioSwimPhoto = {'id': 'sanAntonio', 'src': sanAntonioSwim, 'alt': 'Photo of three men in front of pool posing.'}

const westCoastRacerPhoto = {'id': 'westRacer', 'src': westCoastRacer, 'alt': 'Selfie in front of rollercoaster'}

const floridaSwimmingPhoto = {'id': 'florida', 'src': floridaSwimming, 'alt': '4 swimmers with medals in front of pool'}

const richmondPhoto = {'id': 'richmondPhoto', 'src': richmond, 'alt': 'Train bridge in Richmond VA'}

const arlingtonPhoto = {'id': 'arlington', 'src': arlington, 'alt': 'Sunset in Arlington'};

const californiaPhoto = {'id': 'califronia', 'src': california, 'alt': 'Selfie on beach in Califronia'};

const carterSamDatePhoto = {'id': 'carterSamDate', 'src': carterSamDate, 'alt': 'Selfie before date night'};

const hersheyPhoto = {'id': 'hershey', 'src': hershey, 'alt': 'Photo with 3 friends in front of fountain'};

const pandaPhoto = {'id': 'panda', 'src': panda, 'alt': 'Photo of a panda'};

const jmuPhoto = {'id': 'jmu', 'src': jmu, 'alt': 'Photo of a jmu Photos courtesy of James Madison University'};

const starWarsPhoto = {'id': 'starWars', 'src': starWars, 'alt': 'Photo of Disney star wars ride.'};

const photoCollection = { 
    'snowBoard' : snowBoardPhoto,
    'florida' : floridaPhoto,
    'charlottesville' : SamCarterCvillPhoto,
    'sanAntonio_swim': sanAntonioSwimPhoto,
    'westCoastRacer': westCoastRacerPhoto,
    'floridaSwimming': floridaSwimmingPhoto,
    'richmondPhoto': richmondPhoto,
    'arlington': arlingtonPhoto,
    'califronia': californiaPhoto,
    'carterSamDate': carterSamDatePhoto,
    'hershey': hersheyPhoto,
    'panda': pandaPhoto,
    'jmu': jmuPhoto,
    'starWars': starWarsPhoto




}

const grabImage = (imageSelection, css, number) => {



    var photoList = imageSelection.map((photoName) => photoCollection[photoName]);


    return (
            photoList.map((image) => (

                <img className={css} key={image.id + number} src={image.src} alt={image.alt} />
                
            ))

    )
}

export default grabImage