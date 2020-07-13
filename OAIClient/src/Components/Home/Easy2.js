import React from 'react'
import Event from './Event';
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faList, faArrowRight,faHandshake,faFilePdf, faLaptopCode,faUserFriends,faBrain, faLightbulb} from '@fortawesome/free-solid-svg-icons'
export default class Easy2 extends React.PureComponent{
    render(){
        return(
            <React.Fragment>

            <div style={{ justifyContent:'center'}} className="easy22">
         
               

                <div style={{paddingRight:20,paddingLeft:20}} className="row">
               
              
                <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_left">
               <Link style={{textDecoration:'none'}} to='/signup'>
               <ScrollAnimation animateIn="fadeIn">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'#20c997',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faHandshake}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: '#20c997'}}>Meet Top African Leaders
                         <FontAwesomeIcon style={{height:15, width:15,
                         color:'#20c997',
                         
                         marginLeft:20,
                        
                         }} icon={faArrowRight}/></h5>
                       
                         <p >
                           <span className="all">Meet</span> with<span className="all"></span>willing top African leaders to share your ideas with them from time to time

                         </p>
                         <div className="card">
                            {/* <img style={{height:330}} src="https://nigerianstalk.org/wp-content/uploads/2011/11/tony-elumelu.jpg" alt="loading..."/> */}
                         </div>
                         </div>
                         </ScrollAnimation>
                         </Link>
               </div>
               
               
               

               <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_left">
               <Link style={{textDecoration:'none'}} to='/signup'>
               <ScrollAnimation animateIn="fadeIn">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'#20c997',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faBrain}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: '#20c997'}}>Utilise the Know-How in the House 
                         <FontAwesomeIcon style={{height:15, width:15,
                         color:'#20c997',
                         
                         marginLeft:20,
                        
                         }} icon={faArrowRight}/></h5>
                       
                         <p >
                           <span className="all">Utilise</span> with<span className="all"></span>the Know-How in the House as resource persons to come up with a research paper on any issue that can take Africa to the next level

                         </p>
                         <div className="card">
                            {/* <img style={{height:310}} src="https://pbs.twimg.com/media/EKcyL-RWkAAr9p6.jpg" alt="loading..."/> */}
                         </div>
                         </div>
                         </ScrollAnimation>
                         </Link>
               </div>
               
            

              
              
               </div>
             
            </div>




          
            </React.Fragment>
        )
    }
}