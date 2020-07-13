import React, { Component} from 'react';
import Here from './Here';
import Easy from './Easy';
// import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Easy2 from './Easy2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInvision } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faDivide, faFighterJet, faMedal, faRocket, faEye, faBookOpen } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ScrollAnimation from 'react-animate-on-scroll'
// import {Spinner} from 'reactstrap';
export default class Home extends Component {
  render() {
  window.scrollTo(0,0)
    return (
        <React.Fragment>
          
          <Navbar/>
          <div className="for-scorll">

        
        <div id="top" className="container-fluid background">
          
         <div className="row">
       
           <div className="col-md-12 col1">
             
            <h1 >Welcome to</h1>
            
            <h3>  <p className="divisor"></p>
            One Africa Initiatives Foundation</h3>
           </div>
           {/* <div className="col-md-6 col2 ">
           <h1>Hello</h1>
           </div> */}
         </div>
         <div className="row buttons">
           <div className="col-md-6 box1 col-sm-12 ">
           <Link style={{color:'white'}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}>
               <div className="home_btn1 btn btn_thick">
               Become a member
               </div>
               </Link>
           </div>
           <div className=" col-md-6 box2 col-sm-12 ">
           <Link style={{}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}>
           <button style={{backgroundColor:'white'}} className="home_btn2   btn btn-outline-light my-2 my-sm-0 btn_outline" type="submit"> 
           Become a volunteer  </button>
           </Link>
             </div>
         </div>

         {/* <Here/> */}
         <p className="" style={{marginTop:180,marginBottom:60,display:'flex', justifyContent:'center', flexDirection:'row', paddingLeft:10, paddingRight:10}}>
         <h2 style={{width:260}}  className="text-center bg-secondary text-light">
                      WHO WE ARE
            </h2>
         </p>
        
            {/* <div style={{backgroundColor:'red'}} className="container co_"> */}
           
                <div style={{marginTop:120}}  className="row c_i">
                        
                    <div class="col-md-4 col-sm-12 cl">
                    {/* <p className="text-center">
                    <FontAwesomeIcon style={{height:80, width:80,
                         backgroundColor:'#20c997',
                         padding:23,
                        
                         color:'white',
                        
                         borderRadius:58,
                         }} icon={faEye}/>
                    </p> */}

<p className="text-center">
                    <FontAwesomeIcon style={{height:120, width:120,
                         color:'rgba(0,0,0,0.5)',
                         backgroundColor:"white",
                         padding:23,
                        
                         
                        
                         borderRadius:58,
                         }} icon={faEye}/>
                    </p>
   
                  

                    <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">

                    <p   className="text-center text_suc"><b className="text-center">
                    
                    The Vision </b></p>
                      
                    To unite Africa, her people and resources towards the modernization of Africa driven by and owned by Africans
                    <br/>
                    <div className="tt_">
                    <Link to={{pathname:"/mission"}} style={{textDecoration:"none",fontWeight:'bold'}} className="text-warning text-center ">Read More</Link>
                    </div>
                   
                    </p>
                    </div>






                    <div className="col-md-4 col-sm-12 cl">
                    <p className="text-center">
                    <FontAwesomeIcon style={{height:120, width:120,
                        
                         padding:23,
                        
                         color:'rgba(0,0,0,0.5)',
                         backgroundColor:"white",
                        
                         borderRadius:58,
                         }} icon={faRocket}/>
                    </p>
   
                  

                    <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">

                    <p   className="text-center text_suc"><b className="text-center">
                    
                    The Mission </b></p>
                      
                    To drive the Africa<br/>
                    To erect a veritable bridge connecting all of African decants globally towards rebirth of our motherland
                    <br/>
                    <div className="tt_">
                    <Link to={{pathname:"/mission", state:{scroll:true}}} style={{textDecoration:"none",fontWeight:'bold'}} className="text-warning text-center ">Read More</Link>
                    </div>
                   
                    </p>
                    </div>





                    <div class="col-md-4 col-sm-12 cl">
                    <p className="text-center">
                    <FontAwesomeIcon style={{height:120, width:120,
                        
                         padding:23,
                        
                         color:'rgba(0,0,0,0.5)',
                         backgroundColor:"white",
                        
                         borderRadius:58,
                         }} icon={faMedal}/>
                    </p>
   
                  

                    <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">

                    <p   className="text-center text_suc"><b className="text-center">
                    
                    Our Values </b></p>
                      
                    To erect a veritable bridge connecting all of African decants globally towards rebirth of our motherland
                    <br/>
                    <div className="tt_">
                    <Link to={{pathname:"/value"}} style={{textDecoration:"none",fontWeight:'bold'}} className="text-warning text-center ">Read More</Link>
                    </div>
                   
                    </p>
                    </div>
                </div>



































                <p style={{marginTop:190}} className="text-center">
                        <FontAwesomeIcon style={{height:120, width:120,
                             backgroundColor:'#20c997',
                             padding:23,
                            
                             color:'white',
                            
                             borderRadius:58,
                             }} icon={faBookOpen}/>
                        </p>
                        <p style={{marginTop:50}}  className="text-center "><h2 className="text-center">
                        
                        Publications </h2></p>
       
                <div style={{marginTop:80}}  className="row c_i">
                        
                        <div class="col-md-4 col-sm-12 ">
                      
                      
    
                        <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">
    
                      
                          
                        To unite Africa, her people and resources towards the modernization of Africa driven by and owned by Africans
                        <br/>
                        <div className="tt_">
                        
                        </div>
                       
                        </p>
                        </div>
    
    
    
    
    
    
                        <div className="col-md-4 col-sm-12">
  
       
                      
    
                        <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">
    
                        {/* <p   className="text-center text_suc"><b className="text-center">
                        
                        The Mission </b></p> */}
                          
                        To drive the Africa<br/>
                        To erect a veritable bridge connecting all of African decants globally towards rebirth of our motherland
                        <br/>
                        <div className="tt_">
                        {/* <Link to="/about" style={{textDecoration:"none",fontWeight:'bold'}} className="text_suc text-center ">Read More</Link> */}
                        </div>
                       
                        </p>
                        </div>
    
    
    
    
    
                        <div class="col-md-4 col-sm-12 ">
                        <p className="text-center">
                        {/* <FontAwesomeIcon style={{height:80, width:80,
                             backgroundColor:'#20c997',
                             padding:23,
                            
                             color:'white',
                            
                             borderRadius:58,
                             }} icon={faMedal}/> */}
                        </p>
       
                      
    
                        <p style={{borderLeft:'1px solid rgba(0,0,0,0.1)', padding:9, marginLeft:10}} className="text-center">
    
                        {/* <p   className="text-center text_suc"><b className="text-center">
                        
                        Our Values </b></p> */}
                          
                        To erect a veritable bridge connecting all of African decants globally towards rebirth of our motherland
                        <br/>
                        <div className="tt_">
                        <Link to="/about" style={{textDecoration:"none",fontWeight:'bold'}} className="text_suc text-center ">Read More</Link>
                        </div>
                       
                        </p>
                        </div>
                    </div>
                {/* </div> */}




         <Easy/>
         
        </div>
        </div>
        
        </React.Fragment>
             
    )
  }
}
