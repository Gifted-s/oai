import React from 'react'
import Event from './Event';
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faList, faArrowRight,faHandshake,faFilePdf, faLaptopCode,faUserFriends, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import Easy2 from './Easy2';
export default class Easy extends React.PureComponent{
    render(){
        return(
            <React.Fragment>


























            {/* <div style={{ justifyContent:'center'}} className="easy"> */}
            {/* <h2 style={{marginTop:60,marginBottom:60}} className="text-center">
                        What we offer
            </h2>
            <div className="container co_">
           
                <div className="row c_i">
                        
                    <div class="col cl">
                        
                    <b>Get Informtion and Materials </b>
                    <hr/>
                    <p>
                    We  will always equip you with valuable informations through our publications and make sure you get them as fast as possible
                    </p>
                    </div>
                    <div class="col cl">
                    <b>Build Strong partnership </b>
                    <hr/>
                    <p>
                    <span className="all">Seek</span> partnership with AU and other relevant organisations and individuals like Professor Lumuba and Ambassador Arikana to leverage on their networks to achieve our goals
                    </p>
                    </div>
                    <div class="col cl">
                    <b>Build One Africa</b>
                    <hr/>
                    <p>
                        <span>We bring all Africans together by  a nice chat room to discuss great and ideas</span>
                    
                    </p>
                    </div>
                </div>
                </div>
 */}






                
            {/* <Easy2/> */}
         
                {/* <div className="row">
                    
               
              <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_right">
               <Link style={{textDecoration:'none'}} to="/signup">
               <ScrollAnimation animateIn="bounceInRight">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'rgba(235, 220, 18, 1)',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faFilePdf}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: 'rgba(235, 220, 18, 1)'}}>Get Informtion and Materils 
                         </h5>
                       
                        
                         
                        <div>
                            <p>
                            <FontAwesomeIcon className="all2" style={{height:15, width:15,
                         color:'rgba(235, 220, 18, 1)',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                         <span className="all">We</span> will always<span className="all"></span>equip you with valuable informations through our publications and make sure you get them as fast as possible
                            </p>
                        </div>

                        <div className="card">
                            <img style={{height:330}} src="https://images.pexels.com/photos/1122530/pexels-photo-1122530.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="loading..."/>
                         </div>
                         </div> 
                         </ScrollAnimation>
                 </Link> 
               </div>
              
               
               <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_right">
               <Link style={{textDecoration:'none'}} to="/signup">
               <ScrollAnimation animateIn="bounceInRight">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'rgba(235, 220, 18, 1)',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faUserFriends}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: 'rgba(235, 220, 18, 1)'}}>Build Strong partnership
                         </h5>
                       
                        
                         
                        <div>
                            <p>
                            <FontAwesomeIcon className="all2" style={{height:15, width:15,
                         color:'rgba(235, 220, 18, 1)',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                         <span className="all">Seek</span> partnership<span className="all"></span> with AU and other relevant organisations and individuals like Professor Lumuba and Ambassador Arikana to leverage on their networks to achieve our goals
                            </p>
                        </div>

                        <div className="card">
                            <img style={{height:300}} src="https://www.referenceforbusiness.com/photos/partnership-73.jpg" alt="loading..."/>
                         </div>
                         </div> 
                         </ScrollAnimation>
                 </Link> 
               </div>
            

              
              
               </div> */}
              <Event/>
            {/* </div> */}




           
            </React.Fragment>
        )
    }
}