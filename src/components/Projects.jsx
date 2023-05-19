import React from 'react'
import Image1 from '../assets/assets/observer.png'
import Image2 from '../assets/assets/tictactoe.png'
import Image3 from '../assets/assets/g.png'
import Image4 from '../assets/assets/birthday.png'
import Image5 from '../assets/assets/cuisine.png'
import Image6 from '../assets/assets/movies.png'
import Image7 from '../assets/assets/cover-7.png'
import Image8 from '../assets/assets/mupando.png'
import Image9 from '../assets/assets/dozai.png'
import Image10 from '../assets/assets/nyumba.png'
import Image11 from '../assets/assets/beog.png'
import Image12 from '../assets/assets/system.png'
import Image13 from '../assets/assets/analasad.png'
import 'aos/dist/aos.css'
import isEven from 'is-even'

export const Projects = () => {

    const projects = [
        {
            name: "Observer",
            description: "Simulation which is created with Javascript canvas",
            img: Image1,
            demo: "https://jekson365.github.io/PortfolioApp/observer/home.html",
            source: "https://github.com/Jekson365/PortfolioApp/tree/main/observer",
            tools: [
                './assets/js.png',
                './assets/html.png'
            ]

        },
        {
            name: "Tic Tac Toe",
            description: "most famous game propably. with this project I wanted to develope my skills in Javascript. I built it using HTML / CSS and JS",
            img: Image2,
            demo: "https://jekson365.github.io/PortfolioApp/TicTacToe/index.html",
            source: "https://github.com/Jekson365/PortfolioApp/tree/master/TicTacToe",
            tools: [
                './assets/js.png',
                './assets/html.png'
            ]
        },
        {
            name: "Landing Page",
            description: "design from Nicepage.com",
            img: Image3,
            demo: "https://jekson365.github.io/p1/g/",
            source: "https://github.com/Jekson365/p1",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Birthday Part Website",
            description: "Creating with HTML / CSS / Bootstrap and React JS. Design is takan from Nicepage.com",
            img: Image4,
            demo: "https://jekson365.github.io/Birthday-party/",
            source: "https://github.com/Jekson365/Birthday-party",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Recipies App",
            description: "Application is built in React. I am using https://spoonacular.com/ API for it. Application has 2 pages. Discover and home.",
            img: Image5,
            demo: "https://jekson365.github.io/Recipies-App/",
            source: "https://github.com/Jekson365/Recipies-App",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]

        },
        {
            name: "Cinema App",
            description: "Application is built in React. Using themoviedb API. it contains 4 pages: Discover,Home,Registration and Login.Libraries I used: styled components,React router,bootstrap,react-icons",
            img: Image6,
            demo: "https://jekson365.github.io/MoviePage/#/",
            source: "https://github.com/Jekson365/MoviePage",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Shopify template",
            description: "website template is picked from shopify.built in react. (not completed yet)",
            img: Image7,
            demo: "https://jekson365.github.io/ShopifyTemplates/",
            source: "https://github.com/Jekson365/mupando",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Mupando Clone",
            description: "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos",
            img: Image8,
            demo: "https://jekson365.github.io/mupando/",
            source: "https://github.com/Jekson365/Birthday-party",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Dozai Clone",
            description: "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos. for styling SASS",
            img: Image9,
            demo: "https://jekson365.github.io/dozai/",
            source: "https://github.com/Jekson365/Dozai ",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Nyumba Clone",
            description: "webflow.io website template clone.coded in React-JS using libraries such as Bootstrap,SASS,AOS,framer-motion",
            img: Image10,
            demo: "https://jekson365.github.io/nyumba",
            source: "https://github.com/Jekson365/nyumba",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Beog Clone",
            description: "webflow.io website template clone.coded in React-JS using libraries such as Bootstrap,SASS,AOS,framer-motion",
            img: Image11,
            demo: "https://6421b7962d1024096b65afbe--incandescent-daifuku-cad413.netlify.app/",
            source: "https://github.com/Jekson365/beog.git",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "user Managment system",
            description: "Propably my biggest javascript project which demonstrates my skills in Javascript. programm gives you opportunite to manage users by adding,deleting,editing them. some more features this softwares is that: you can export table in excel file,filter and search users. is usees localstorage as database",
            img: Image12,
            demo: "https://642babdc88895555b06a3fac--graceful-souffle-f20f52.netlify.app/",
            source: "https://github.com/Jekson365/javascript-project",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
        {
            name: "Analytics Page",
            description: "MY first project using Material-UI. I just created simple visual to demonstrate what I learned in past one week. Tools and Libraries I Used are: React,Typescript,Material-UI,recharts,react-reveal",
            img: Image13,
            demo: "https://64672428bfe24a4f7b9070ec--ubiquitous-dieffenbachia-8b8a82.netlify.app/",
            source: "https://github.com/Jekson365/constClone",
            tools: [
                './assets/js.png',
                './assets/html.png',
                './assets/atom.png',
                './assets/bootstrap.png'
            ]
        },
    ]
    return (
        <>
            {projects.reverse().map((each) => {
                return (
                    <>
                        <div data-aos='fade-up' className="container-fluid mw-1300 project-parent" style={{ "min-height": "50vh" }}>
                            <div className="daz row h-100 align-items-center">
                                <div className="col-md-7 cont-box d-flex flex-column p-5">
                                    <h1 className='title'>{each.name}</h1>
                                    <p className='desc'>{each.description}</p>
                                    <div className="row buttons">
                                        <button className='w-25'>
                                            <a href={each.demo}>
                                                Demo
                                            </a>
                                        </button>
                                        <button className='w-25'><a href={each.source}>Source Code</a></button>
                                    </div>
                                </div>
                                <div className="col-md-5 sxz" data-aos={isEven(projects.indexOf(each)) ? "flip-left" : "flip-right"} data-aos-duration='1000'>
                                    <img src={each.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
