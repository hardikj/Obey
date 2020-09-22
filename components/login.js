import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cn from 'classnames'

import Heading from '../components/heading';

function Face({children}) {
  return {children};
};

export default function Login() {

  let mainStyles = cn(styles.main, "bg-fixed h-screen bg-no-repeat bg-center bg-cover overflow-auto overflow-x-hidden");


  let authenticate = () => {
    const clientId = "a66382ce67aa41808ac922b86cfaba6f";
    let redirectUri = ''
      
    if (process.browser) {
      if (window.location.host === 'localhost:3000') {
        redirectUri = 'http://localhost:3000/';
      } else {
        //if (window.location.host === 'https://supportify.club/') {
        redirectUri = 'https://quizzical-shockley-2494e3.netlify.app/';
      }
      // } else {
      //  redirectUri = 'https://hardikj.github.io/supportify-deploy/';
      // }

      window.location.href =
        `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user-top-read&response_type=token`;
  
    }
  };

  return (
    <div className={mainStyles}>
      <div className="grid grid-cols-3 h-full gap-0 place-items-scale"> 
          <div className="col-span-3 mb-0 md:mb-0 mt-10vh mx-12vw lg:mx-24vw"> 
            <Heading>Which OBEY character are you?</Heading>
          </div>
          <div className="col-span-1">
            <div className={styles.faceImage1}>
              <img className="object-contain mb-10vh lg:mb-4 lg:ml-10vw lg:w-15vw" src="./oli image.png" />
            </div>
          </div>
          <div className="col-start-3 col-span-1"> 
            <div className={cn(styles.faceImage2, styles.faceImageBottom)}>
              <img className="object-contain mt-8vh md:mt-4vh lg:ml-40 lg:mt-8 lg:w-15vw" src="./yungblud image.png" /> 
            </div>
          </div>
          <div className="col-span-3 mx-24vw lg:mx-32vw">
            <div className="flex justify-center">
              <button className="align bg-black mb-10 w-56vw lg:w-24vw py-2 font-sans font-bold text-xl lg:text-3xl tracking-widest leading-relaxed text-white text-center" onClick={authenticate}>Find out now</button>
            </div>
          </div>
      </div>
    </div>
  )
}


// 


  
