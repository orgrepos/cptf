/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
     
      Mon: "Montserrat, sans-serif",
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      blu:"#013571",
      Yelo:"#eacb02",
    }),
    extend: {
      colors:{
        blu:"#013571",
        Yelo:"#eacb02",
      },
      backgroundImage:{
        'hero': "url(./img/download.webp)"
       },
       animation: {
         blob: "blob 7s infinite",
         "enter-fade-l": "enter-fade-l 0.7s ease-out",
         "enter-fade-r": "enter-fade-r 0.7s ease-out",
         "enter-fade-t": "enter-fade-t 1s ease-out",
         'spin-slow': 'spin 3s ease-in-out',
         
       },
       keyframes: {
         blob: {
           "0%": {
             transform: "translate(0px,0px) scale(1)",
           },
           "33%": {
             transform: " translate(50px,-80px) scale(1.1)",
           },
           "66%": {
             transform: "translate(-40px,50px) scale(0.9)",
           },
           "100%": {
             transform: "translate(0px,0px) scale(1)",
           },
         },
         "enter-fade-l": {
           "0%": {
             transform: "translate(-300px,0px) scale(0.9) ",
             opacity: 0
           },
           "100%": {
             transform: "translate(0px,0px) scale(1) ",
             opacity: 1
           },
         },
         "enter-fade-r": {
           "0%": {
             transform: "translate(300px,0px) scale(0.9) ",
             opacity: 0
           },
           "100%": {
             transform: "translate(0px,0px) scale(1) ",
             opacity: 1
           },
         }
         ,
         "enter-fade-t": {
           "0%": {
             transform: "translate(0px,130px) scale(1.2) ",
             opacity: 0
           },
           "100%": {
             transform: "translate(0px,0px) scale(1) ",
             opacity: 1
           },
         }
       },
    },
  },
  plugins: [],
}
