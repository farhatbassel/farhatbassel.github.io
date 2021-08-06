import '../work/work.scss'
import image from "../../index.png"
import {GitHub} from '@material-ui/icons';

export default function Work() {
    return (
        <div className='work' id='work'>
           <div className="title">
               <h1>Work</h1>
            </div>
            <div className='wrapper'>
               <div className="left">
                   <img src={image} id="heatMap" alt="" />
               </div>
               <div className="right">
                   <div className="text">
                        <h1> Suitable Housing</h1>
                        <h2> I studied the house pricing on a housing</h2>
                        <h2> dataset using multiple solvers.</h2> 
                        <h2> Used stacked models as best fit.</h2>
                    </div>
                    <div className="fullwrap2">
                        <div className="buttonwrap">
                            <a href="https://github.com/farhatbassel/housePricing" target="_blank" ><button><GitHub className='github'/></button></a>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}
