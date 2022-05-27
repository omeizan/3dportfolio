
import Spline from '@splinetool/react-spline'
import {useState} from "react";
import {IoMenu} from 'react-icons/io5'
function App() {
  const [isFull,setIsFull] = useState(false)
  return (
      
      <div className ="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20" >
        {/*NavBar*/}
        <nav className = "w-full px-3 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full  bg-navBar p-4 rounded-2xl flex items-center">
            <p className='txt-lg text-slate-200 font-medium'>NOEL</p>

            <div className = "hidden md:flex items-center gap-6 ml-6 flex-1">
              <a 
              className = " float-right text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#home"
              >
                Home
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#about"
              >
                About
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#projects"
              >
                Projects
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#projects"
              >
                Contact
              </a>
            </div>

            <div className = "block md:hidden ml-auto cursor-pointer hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            onClick = {()=>setIsFull(!isFull)}
            >
                <IoMenu className = "text-2xl text-textBase"/>
            </div>
            {isFull && (
              <div className = "p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
              <a 
              className = " text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#home"
              onClick = {()=>setIsFull(false)}
              >
                Home
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#about"
              onClick = {()=>setIsFull(false)}
              >
                About
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#projects"
              onClick = {()=>setIsFull(false)}
              >
                Projects
              </a>
              <a 
              className = "text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              href = "#projects"
              onClick = {()=>setIsFull(false)}
              >
                
                Contact
              </a>
              </div>
            )}
          </div>
        </nav>
        <div className = "relative" id ="home">
          <Spline scene="https://prod.spline.design/OMi17k0PbFfnAKVc/scene.splinecode" />
          <div className = "absolute bottom-10 w-full justify-center items-center flex">
            <div className = "shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className = "text-white">Press and drag to orbit</p>
            </div>
          </div>
          <div className = "absolute top-20 w-full justify-left items-left flex">
            
              <p className = "text-white p-10">NOEL OMEIZA</p>
            
          </div>
        </div>
      </div>
     
  );
}

export default App;
