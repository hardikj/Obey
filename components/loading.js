import styles from '../styles/Loading.module.css'
import cn from 'classnames'
import React, { useState, useEffect } from 'react';
import Result from '../components/result';

function Loading({ calc }) {
  let background = cn(styles.background, "flex flex-col justify-center items-center h-screen w-full bg-fixed bg-cover bg-center");
  const [src, setSrc] = useState("./oli image.png");
  const [annotation, setAnnotation] = useState("Loading...");
  const [showResult, setShowResult] = useState(false);

  // show image one
  // after 2 seconds switch
  // after 2 seconds switch again
  // after 2 seconds move to next slide
  // setTimeout()

  const annotations = [ "Obey!", "I am very energetic!", "I love to dance"]

  let run = () => {
	  var c = 1;
	  var timeout = setInterval(function() {
	  	console.log("here")
	    if (c % 2 === 0) { 
        setSrc("./oli image.png")
        setAnnotation(annotations.pop())
      } else {
        setSrc("./yungblud image.png")
        setAnnotation(annotations.pop())
      }
	    c++;
	    if (c > 4) {
	      clearInterval(timeout);
	      setShowResult(true);
	    }
	  }, 3000);
  };

  useEffect(() => { return run(); }, [] );

  const renderImage = () => {
  	return <img className={cn(styles.imagePosition	, "object-contain relative mr-20 w-48 mt-20 lg:w-15vw")} src={src} />
  }

  const result = showResult ? <Result calc={calc}/> : <div className={background}>
  			<div className=""> {renderImage()} </div>
        <div className={cn(styles.bubble, "text-3xl lg:text-3xl tracking-widest leading-relaxed")}>{annotation}</div>
    </div>

  return (
  	<div>
  		{result}
  	</div>
  )
}

// <div className="bg-black p-2 font-sans text-2xl lg:text-3xl tracking-widest leading-relaxed text-white text-center m-10" style={{"font-family": "Comic Sans MS"}}> {annotation} </div>


export default Loading