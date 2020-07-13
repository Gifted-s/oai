import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class Event extends React.PureComponent{

    componentDidMount(){
      
    }
    render(){
       
        return(
            <React.Fragment>
            <div className='container event' style={{zIndex:1}}>
            <ScrollAnimation animateIn="bounceInLeft">
            <div className="row first">
                <div className="col-md-6 col-sm-6">
                    <div style={{display:'flex'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLix-ygQU4RXrt56I_Ci0J8J9tbmqfPds73aTSGFaWah6l4v1p&usqp=CAU" alt="loading..." />
                    <h2 className="tt"> Building A Strong Africa</h2>
                    </div>
                   
                  <p>It is our optimum concern that we reclaim Africa for Africa by building a strong partnership among OAI members and Africans in the Diaspora for economic empowerment of our individual members and Africa</p>
                </div>
                <div className="col-md-6 col-sm-6 right__">
                <div className="standard_" style={{display:'flex', flexDirection:'row', alignItems:'center'}} >    
                            <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:70,
                                 height:70,
                                 padding:1

                             }}
                            icon={faHandshake} />
                            <h1>Always Active</h1>
                        </div>

                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                                We make sure every response is as fast as possible</h6>
                        </div>
                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                               100% perfection</h6>
                        </div>
                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                                Your data is perfectly secured with us</h6>
                        </div>
                        <div className="stand1">
                               
                               <FontAwesomeIcon
                            style={{
                                color:'#24b47e',
                                width:25,
                                height:25,
                            }}
                           icon={faArrowRight} /><h6>
                               No downtime at all</h6>
                       </div>
                        
                        
                
                </div>
            </div>
            </ScrollAnimation>
              
         
          <div className="row">
          <div className="col-md-6 col-sm-6 ready">
              <h1 className="text-secondary">Ready to get started?</h1>
              {/* <h2 className="ready_sub">Get in touch </h2> */}
          </div>
          <div className="col-md-4 col-sm-6 ready-btn">
              <div className="btn btn_thick text-uppercase">
              <Link style={{color:'white'}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}>Signup Now</Link>
                  
              </div>
              <div className="btn btn-ready2 text-uppercase">
              <Link style={{color:'inherit'}} to={{
                 pathname:'/about',
                 state:{
                   page:'contact'
                 }
               }}>Learn more</Link>
              </div>
              </div>
          </div>

         
        </div>
        <Footer/>
        </React.Fragment>
        )
    
}
}