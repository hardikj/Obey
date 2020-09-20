// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  	theme: {
    // 👇 this makes Tailwind merge the configuration w/o overriding it.

    extend: {
      width: {
        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "8vw": "8vw",
        "10vw": "10vw",
        "12vw": "12vw",
        "15vw": "15vw",
        "16vw": "16vw",
        "20vw": "20vw",
        "24vw": "24vw",
        "32vw": "32vw",
        "40vw": "40vw",
        "48vw": "48vw",
        "56vw": "56vw",
        "64vw": "64vw"        
      },
      spacing: {
      	"1vh": "1vh",
      	"2vh": "2vh",
      	"3vh": "3vh",
      	"4vh": "4vh",
        "5vh": "5vh",
        "6vh": "6vh",
        "8vh": "8vh",
        "10vh": "10vh",
        "12vh": "12vh",
        "16vh": "16vh",
        "20vh": "20vh",
        "24vh": "24vh",
        "32vh": "32vh",
        "40vh": "40vh",
        "48vh": "48vh",
        "56vh": "56vh",
        "64vh": "64vh",
        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "8vw": "8vw",
        "10vw": "10vw",
        "12vw": "12vw",
        "16vw": "16vw",
        "20vw": "20vw",
        "24vw": "24vw",
        "32vw": "32vw",
        "40vw": "40vw",
        "48vw": "48vw",
        "56vw": "56vw",
        "64vw": "64vw"
      }
    },
  },
}
