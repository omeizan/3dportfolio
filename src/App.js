
import Spline from '@splinetool/react-spline'
import {useState} from "react";
import {IoMenu,IoLogoGithub} from 'react-icons/io5'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AnimatePresence, motion } from 'framer-motion'
import {about,projects,contact} from './info'
function App() {
  const [isFull,setIsFull] = useState(false)
  return (
      <AnimatePresence initial = {false}>
      <div className ="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20" >
        {/*NavBar*/}
        <nav className = "w-full px-3 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full  bg-navBar p-4 rounded-2xl flex items-center">
            <p className='text-2xl font-bold italic text-slate-200'>{`</n>`}</p>
            <div className = "w-full flex items-right">
            <div className = "hidden md:flex items-center gap-6 ml-6 flex-1 justify-end">
              <a 
              className = " text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
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
              href = "contact"
              >
                Contact
              </a>
            </div>
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
          <div className = "absolute top-20 w-full justify-left items-left flex flex-col">
            
              <p className =  "text-3xl font-bold italic text-white px-10 pt-10">NOEL OMEIZA</p>
              <p className = "text-textBase px-10">Full-Stack Web Developer</p>
            
          </div>
        </div>

        <main className = "w-[80%] wt-5">
              <section className="w-full grid grid-cols-1  gap-4 my-24"
              id = "about">
                <div className = "w-420 h-420 flex flex-col items-center justify-center">
                  <p className = "break-normal w-full text-lg text-textBase text-center">
                    I a third-year Computer Science {`(Honors)`} student at the University of Manitoba,
                    currently seeking an internship/co-op position as a web developer.
                  </p>
                   <p className = "break-normal w-full text-lg text-textBase text-center">
                   I have experience using HTML, CSS, JavaScript, ReactJS, TailwindCSS, MongoDB, Express, FireBase, Google Tag Manager and AWS.
                   </p>
                </div>
              </section>
              <section>
                <VerticalTimeline>
                  {
                    about && about.map((n)=>(
                      <VerticalTimelineElement
                      key = {n.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(58, 60, 74)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(58, 60, 74)' }}
                      date={n.date}
                      iconStyle={{ background: 'rgb(58, 60, 74)', color: '#fff' }}
                      icon = {n.icon}
                    >
                      <h3 className="vertical-timeline-element-title">{n.title}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{n.company}</h4>
                      <p>
                        {n.location}
                      </p>
                    </VerticalTimelineElement>
                    ))
                  }
                
                  
                </VerticalTimeline>
              </section>
              <section className = "flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
                {projects && projects.map((n)=>(
                    <div key = {n.id}className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px]hover:border-zinc-600 duration-100 ease-in-out'>
                    <p className='text-md text-textBase font-medium uppercase'>
                      {n.name.length >25?`${n.name.slice(0,25)}...`:n.name}
                    </p>
                    <img src={n.imgSrc}alt="Project Capture" className="w-full h-full object-cover rounded-md my-4"/>
                    <div classNme="flex flex-1 items-center justify-center">
                      <p className = "text-lg text-gray-300">
                        
                          <span className = "block-text-sm text-gray-500">
                              {n.tools}
                          </span>
                      </p>
                      <a href ={n.link}>
                        <div>
                          <IoLogoGithub className = "text-textBase text-3xl cursor-pointer"/>
                        </div>
                      </a>
                    </div>
                </div>

                ))}
                  
                  
                  
              </section>
              <p className = "text-2x text-gray-400 capitalize">Contact</p>
              <section id = "contact" className="flex flex-col items-center justify-center w-full my-24">
                {contact && contact.map((n)=>(
                  <div key = {n.id}className = "flex items-center justify-center w-full my-4 flex-wrap gap-4">
                  <a href ={n.link} className = "w-full md:w-auto px-3 md:px-5 py-5 border border-zinc-800 rounded-2xl hover:border-zinc 600 duration 100 ease-in-out curser-pointer flex items-center justify-center gap-3">
                      {n.img}
                      <p className = "text-lg text-textBase">{n.name}</p>
                  </a>
                </div>
                ))}
                
                
              </section>  
        </main>
      </div>
      </AnimatePresence>
  );
}

export default App;
