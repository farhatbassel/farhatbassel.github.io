import './work1.scss'
import pointPlot from "../../PointPlot.png"
import {GitHub} from '@material-ui/icons';

export default function Work() {
    return (
        <div className='work' id='work'>
           <div className="title">
               <h1>Work</h1>
            </div>
            <div className='wrapper'>
               <div className="left">
                   <div className="text">
                        <h1> Learning from the disaster</h1>
                        <h2> I studied the survival rate </h2>
                        <h2> from the titanic.</h2>
                        <h2> Used Random Forest as best fit model.</h2>
                    </div>
                    <div className="fullwrap">
                        <div className="buttonwrap">
                            <a href="https://github.com/farhatbassel/Titanic" target="_blank"><button><GitHub className='github'/></button></a>
                        </div>
                   </div>
               </div>
               <div className="right">
                   <img src={pointPlot} alt="" />
               </div>
            </div>
        </div>
    )
}
