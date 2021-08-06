import './work.scss'
import thesis from "../../thesis.png"
import {GitHub} from '@material-ui/icons';
import fullThesis from "../../Density_Perturbations_From_Magnetic_Fields.pdf"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';

export default function Work() {

    gsap.registerPlugin(ScrollTrigger);
    const Secondref = useRef(null);

    useEffect( () => {
        const element = Secondref.current;
        var tl = gsap.timeline();
        
        gsap.from('.wrapper',
        {   
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top bottom'
            },
            opacity: 0,
            y: 0,
            duration: 2,
            stagger: 0.3
        });
    },);

    return (
        <div className='work' id='work'>
           <div className="title">
               <h1>Work</h1>
            </div>
            <div className='wrapper' ref={Secondref}>
               <div className="left">
                   <img src={thesis} alt="" />
               </div>
               <div className="right">
                   <div className="text">
                        <h1>Master's Thesis</h1>
                        <h2>I studied the evolution of PMFs</h2>
                        <h2> using 3D MHD equations.</h2> 
                        <h2>Currently working on the publication of the data. </h2>
                    </div>
                    <div className="fullwrap">
                        <div className="buttonwrap">
                            <a href={fullThesis} target="_blank"><button>Full Thesis</button></a>
                        </div>
                        <div className="buttonwrap">
                            <a href="https://github.com/farhatbassel/thesisPlots" target="_blank"><button><GitHub className='github'/></button></a>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}
