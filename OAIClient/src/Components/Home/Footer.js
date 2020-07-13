import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    TwitterIcon,
    InstapaperIcon,
    TelegramIcon,
    FacebookMessengerIcon,
  } from "react-share";
  import swal from '@sweetalert/with-react'
  import emailjs from 'emailjs-com';
  import {
    faInstagram, faFacebook, faTwitter
  } from "@fortawesome/free-brands-svg-icons";

import { faArrowCircleUp, faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class Footer extends React.PureComponent{
    render(){
        return(
            <div  className="container-fluid footer">
                
                <hr/>
                <div className="row">
                   <div className="col-md-3 col-sm-12">
                   <a style={{height:120, marginLeft:-20}} className="navbar-brand bbb text-primary" href="/"><img style={{height:110,width:120}} alt="loading" src={require('./new.jpg')}/></a>
                   </div>
                   <div className="col-md-3 col-sm-12">
                          <h5>Company</h5>
                          <Link to="about" className="footer_list_item">
                           <div>
                                About
                            </div>
                           </Link>
                           <Link to="/getstarted" className="footer_list_item">
                           <div>
                                Get started
                            </div>
                           </Link>
                            {/* <div className="footer_list_item">
                                Jobs
                            </div> */}
                  </div>
                  <div className="col-md-3 col-sm-12">
                      <h5>Resources</h5>
                      <Link to="/policy" className="footer_list_item">
                           <div>
                               Policy and terms
                            </div>
                           </Link>
                           <Link to="/support" className="footer_list_item">
                           <div>
                                Support
                            </div>
                           </Link>
                 </div>
                 <div className="col-md-3 col-sm-12">
                        <h5>Contact</h5>
                        
                        <div className="footer_list_item">
                        {/* <div className="footer_link">
                        <a className="ml-2" href="https://facebook.com/meddemconcepts">
                                <FacebookIcon size={30} round={true}/>
                        </a>

                            <span> Facebook </span>
                        </div>
                        <div className="footer_link">
                        <a className="ml-2" href="mailto:Meddemtechnology@gmail.com?subject=Contact US || Make you enter your name and contact&cc=https:meddem.com@example.com">
                      
                                <EmailIcon size={30} round={true}/>
                           </a>

                            <span>Gmail </span>
                        </div>
                         <div className="footer_link">
                         <a className="ml-2" href="https://twitter.com/MeddemT">
                            
                                <TwitterIcon size={30} round={true}/>
                        </a>

                            <span>Twitter</span>
                        </div>
                        <div className="footer_link">
                        <a className="ml-2" href="https://instagram.com/meddemconcepts">
                        <FontAwesomeIcon  icon={faInstagram} size="2x" style={{color:"#eb3223", marginRight:9}}/>
                        </a>
                        <span >Instagram</span>
                        </div> */}

                        <div className="footer_link">
                        <a className="ml-2" href="#">
                        <FontAwesomeIcon  icon={faPhone} size="2x" style={{color:"white", marginRight:9}}/>
                        </a>
                        <span style={{fontFamily:"Roboto"}} className="insta">+2348155085622</span>
                        </div>
                        </div>
                        <a href="#top">
                        <div style={{backgroundColor:'white'}} className="top_icon">
                            <FontAwesomeIcon
                             style={{
                                 color:'green',
                                 width:60,
                                 height:60,
                                 padding:1

                             }}
                            icon={faArrowCircleUp} />
                        </div>
                        </a>
                        
                  
                 </div>
                 <li onClick={()=> this.button.current.click()} style={{listStyle:'none'}} className="s_cont mt-4 active">
                  
                  <a    className=" ml-2 s_cont_link" href="https://facebook.com/OneAfricaInitiatives">
                    <FontAwesomeIcon style={{width:24, height:24,color:'white'}} icon={faFacebook}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>


                  <a    className=" ml-2 s_cont_link" href="https://twitter.com/OneAfricaInit">
                    <FontAwesomeIcon style={{width:24, height:24,color:'white'}} icon={faTwitter}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>


                  <a    className=" ml-2 s_cont_link" href="https://instagram.com/OneAfricaInitiatives">
                    <FontAwesomeIcon style={{width:24, height:24,color:'white'}} icon={faInstagram}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>
                  <a    className=" ml-2 s_cont_link" href="mailto:oneafricainitiatives@gmail.com">
                    <FontAwesomeIcon style={{width:24, height:24,color:'white'}} icon={faMailBulk}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>
                </li>
                </div>
                
                

            <p style={{textAlign:'center', marginTop:70, color:'white'}}>© 2020 OAI developer team</p>
            </div>
        )
    }
}