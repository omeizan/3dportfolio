import {IoCodeWorking,IoLogoGithub,IoPencil } from 'react-icons/io5'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
export const about = [
    {
        id:1,
        date: "2017-2019",
        icon: <IoPencil/>,
        title: 'BSc. Computer Science',
        company: 'Covenant University, Ogun, Nigeria',
        location: 'Start of my post-secondary Education'
        
    },
    {
        id:2,
        date: "2017-2019",
        icon: <IoCodeWorking/>,
        title: 'Volunteer, Kid\'s Coding Instructor',
        company: '9jacodekids Academy, Lagos, Nigeria',
        location: 'Teaching students(grades 3-7) programming basics in Visual basic and Scratch'
        
    },
    {
        id:3,
        date: "2019",
        icon: <IoCodeWorking/>,
        title: 'Software Development Intern',
        company: 'Architalk Associates, Nigeria',
        location: 'Summer position serving as a development intern for an Architecture firm in Nigeria setting up a home security system'
        
    },
    {
        id:1,
        date: "2019-Present",
        icon: <IoPencil/>,
        title: 'BSc. Computer Science (Honors)',
        company: 'University of Manitoba, Manitoba, Canada',
        location: 'Transferred from Covenant University. Current third-year student, Computer Science major, specialization in Software Engineering'
        
    },
]

export const projects = [
    {
        id:1,
        name:'Air Quality (React)',
        imageSrc: "",
        tools:"ReactJS, CSS, OpenWeather",
        link:""

    },
    {
        id:2,
        name:'3D Shoe Csutomizer (React)',
        imageSrc: "",
        tools:"ReactJS, CSS, Three.js",
        link:""

    },
    {
        id:3,
        name:'Markup Editor (React)',
        imageSrc: "",
        tools:"ReactJS, CSS, HTML Canvas",
        link:""

    },
    {
        id:4,
        name:'Portfolio Website (React)',
        imageSrc: "",
        tools:"ReactJS, TailwindCSS, Spline",
        link:""

    },
]

export const contact = [
    {
        id:1,
        img:<IoLogoGithub className = "text-textBase text-3xl cursor-pointer"/>,
        name:'GitHub'
    },
    {
        id:2,
        img:<FaLinkedin className = "text-textBase text-3xl cursor-pointer"/>,
        name:'LinkedIn'
    },
    {
        id:2,
        img:<SiGmail className = "text-textBase text-3xl cursor-pointer"/>,
        name:'Gmail'
    },
] 
