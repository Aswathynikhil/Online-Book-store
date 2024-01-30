import React, { useState, useEffect } from 'react'
import Darkpng from '../../assets/website/dark-mode-button.png'
import Lightpng from '../../assets/website/light-mode-button.png'

// const Darkmode = () => {

//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//     useEffect(() => {
        
//         if (theme === "dark") {
//             document.documentElement.classList.add("dark")
//             localStorage.setItem("theme", "dark")
//         } else {
//             document.documentElement.classList.remove("dark")
//             localStorage.setItem("theme", "light")
//          }
//      },[theme])

//   return (
//       <>
//       <div className='relative'>
//               <img src={Lightpng} alt='light' className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
//                   theme === 'dark' ? 'opacity-0' :'opacity-100'
//                   }`}
//               onClick={()=>setTheme(theme === "dark" ? "light" :"dark")}
//               />
              
//               <img src={Darkpng} alt='dark' className='w-12 cursor-pointer drop-shdow-[1px_1px_1px_rgba(0,0,0,0.5)] duration-300 '
//               onClick={()=>setTheme(theme === "dark" ? "light" :"dark")}
//               />
//       </div>
//       </>
//   )
// }

// export default Darkmode



const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <>
            <div className="relative ">
                <img
                    // src={theme === "dark" ? darkPng : lightPng}
                    src={Lightpng}
                    alt="dark"
                    onClick={() =>
                        setTheme((data) => (data === "dark" ? "light" : "dark"))
                    }
                    className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${theme === "dark" ? "opacity-0" : "opacity-100"
                        } `}
                />
                <img
                    src={Darkpng}
                    alt="dark"
                    onClick={() =>
                        setTheme((data) => (data === "dark" ? "light" : "dark"))
                    }
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
                />
            </div>
        </>
    );
};

export default DarkMode;