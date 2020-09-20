import styles from '../styles/Home.module.css'
import cn from 'classnames'
import React, { useState, useEffect } from 'react';

import Heading from '../components/heading';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'



function Result({ calc }) {
  let background = cn(styles.main, "h-screen bg-cover bg-center bg-fixed overflow-auto");
  const {matches, matchesAny, matchesAll} = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 450px)'
  })

  // 331px = 100% = 24.4vw
  // 1% = 3.31px
  // 66% = 3.31*66

  let energy = Number((calc.energy*100*3.31).toFixed(1));
  let dance = Number((calc.dance*100*3.31).toFixed(1));
  let valence = Number((calc.valence*100*3.31).toFixed(1));

  if (matches && !matches.width) {
    energy = energy / 1.8;
    dance = dance / 1.8;
    valence = valence / 1.8;
  }

  energy = energy+"px";
  dance = dance+"px";
  valence = valence+"px";

  /* Calculations
  *  more energy = oli
  *  more valance = yunblud 
  *  more dancability = yungblud
  */

  const oliScore = calc.energy*100*0.6+calc.dance*100*0.2+calc.valence*100*0.2;
  const yungblud = calc.energy*100*0.3+calc.dance*100*0.4+calc.valence*100*0.3;

  let scr = "./yungblud image.png";
  let robo = "Yungblud's robot";
  let name = "Yungblud's"
  if (oliScore > yungblud) {
    scr = "./oli image.png";
    robo = "Oli's robot";
    name = "Oli's"
  }

  return (
  	<div className={background}>
  		<div className="grid grid-cols-3 gap-8 place-items-scale h-screen"> 
        <div className="col-span-3 lg:col-span-1 flex flex-col mx-6vw lg:ml-32 lg:mx-0">
          <div className="flex justify-center">
       	    <img className={cn(styles.imagePosition  , "object-contain relative w-32vw lg:w-15vw")} src={scr} />
          </div>
          <Heading> Oli's Robot </Heading>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-black p-8 lg:p-8vh mx-9vw lg:mx-10vw lg:my-6vh overflow-auto">
            <div className="text-2xl lg:text-4xl text-white font-bold mb-10"> Your tracks history analysis is similar to {name}: </div>
            <div className="flex flex-wrap flex-col float-left">
              <div className="bg-white my-2vh h-5 lg:h-10" style={{width:energy}}>  </div>
              <div className="bg-white my-2vh h-5 lg:h-10" style={{width:dance}}>  </div>
              <div className="bg-white my-2vh h-5 lg:h-10" style={{width:valence}}>  </div>
            </div>
            <div className="flex flex-col float-right">
              <div className="float-right lg:text-2xl leading-5 lg:leading-8 text-white my-2vh h-5 lg:h-10"> {Math.floor(calc.energy*100)}% Energetic </div>
              <div className="lg:text-2xl text-white leading-5 lg:leading-8 my-2vh h-5 lg:h-10"> {Math.floor(calc.dance*100)}% Dancable </div>
              <div className="lg:text-2xl text-white leading-5 lg:leading-8 my-2vh h-5 lg:h-10"> {Math.floor(calc.valence*100)}% Positive </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mx-0 lg:mx-6vw">
          <div className="text-left"> 
            <Heading>
              <div className="flex justify-center">
                <span> Stream: </span>
                <a href="https://open.spotify.com/album/5J7qci2JWfVtHdnhzCupbJ?si=11nOn3NBQbKw1J1R5JQKww"> <img className="ml-8 mt-1 lg:mt-2 w-8 h-8 object-center" src="./spotify.png" /> </a>
                <a href="https://music.apple.com/us/album/obey-with-yungblud-single/1529004557"> <img className="ml-8 mt-1 lg:mt-2 w-8 h-8 object-center" src="./apple.svg" /> </a>
              </div>
            </Heading> 
          </div>
        </div>
      </div>
  	</div>
  )
}

export default Result;