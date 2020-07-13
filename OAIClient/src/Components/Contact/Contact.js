import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
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
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import {  faListAlt,faTrash, faPhone} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Home/Footer';
import { Spinner } from 'reactstrap';
export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            sending:false,
            name:"",
            phone:"",
            address :"",
            message:""
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    handleSubmit=(e)=>{
        e.preventDefault()


        const {name, phone, message, address} = this.state
     if(!name){
       return swal('', 'Please enter your name', 'error')
     }
   else if(!phone){
    return swal('', 'Please enter your phone number', 'error')
    }
   else if(!address){
    return swal('', 'Please enter your address', 'error')
    }
   else if(!message){
    return swal('', 'Please enter your message', 'error')
    }
    else{
        this.setState({sending:true})
        // const templateId = 'meddem123';
        // e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        // emailjs.sendForm('gmail', templateId, e.target , "user_CD11lZvX5OdbyivXmWHIP")
        //   .then((result) => {
        //       this.setState({sending:false})
        //     return swal('Congratulations', 'We successfuly recieved your message ', 'success')  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        //   }, (error) => {
        //     swal('Oops', 'Sorry, we could not send your email, check internet connection and try again ', 'error')
         
        //     this.setState({sending:false})
        //       console.log(error.text);
        //   });
    
    }

    
    }

    render() {
       
        return (
            <React.Fragment>
            <Navbar/>
            <div style={{paddingTop:70}}  className="container cont__">
              
                    <div  className="col-md-6 col-sm-12">
                            <form style={{border:'1px solid rgba(0,0,0,0.09)', padding:20}} onSubmit={this.handleSubmit}>
                                <h3>Contact us</h3>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter your name</label>
                                    <input type="text" name="message_from" onChange={(e)=> this.setState({name:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="Enter you name"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter your phone number</label>
                                    <input name="message_phone" type="text" onChange={(e)=> this.setState({phone:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter your address</label>
                                    <input name="message_address" type="text" onChange={(e)=> this.setState({address:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="Enter your address"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Describe your problem</label>
                                    <textarea name="message_html" onChange={(e)=> this.setState({message:e.target.value})} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    {
                                        this.state.sending?
                                        <button style={{opacity:0.4}} type="button" className="form-control btn my-3 btn-primary" disabled>Sending, please wait... <Spinner style={{float:"right"}} size="sm"/> </button>
                                        :
                                        <button type="submit" className=" btn my-3 btn_thick">Send message</button>
                                    }
                                   
                                   
                                </div>

                                
                        </form>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        {/* <h2>You can also message us on</h2>
                        <div className="logo_cont">
                        <a className="ml-2" href="https://facebook.com/meddemconcepts">
                                <FacebookIcon size={70} round={true}/>
                        </a>

                            <span> <a className="ml-1" href="https://facebook.com/meddemconcepts"> @facebook</a> </span>
                        </div>
                        <div className="logo_cont">
                        <a className="ml-2" href="mailto:Meddemtechnology@gmail.com?subject=Contact US || Make you enter your name and contact&cc=https:meddem.com@example.com">
                      
                                <EmailIcon size={70} round={true}/>
                           </a>

                            <span><a className="ml-1" href="mailto:Meddemtechnology@gmail.com?subject=Contact US || Make you enter your name and contact&cc=https:meddem.com@example.com">@gmail</a> </span>
                        </div>
                         <div className="logo_cont">
                         <a className="ml-2" href="https://twitter.com/MeddemT">
                            
                                <TwitterIcon size={70} round={true}/>
                        </a>

                            <span><a className="ml-2" href="https://twitter.com/MeddemT">@twitter</a></span>
                        </div>
                        <div className="logo_cont">
                        <a className="ml-2" href="https://instagram.com/meddemconcepts">
                        <FontAwesomeIcon  icon={faInstagram} size="4x" style={{color:"#eb3223",float:"left", marginRight:9}}/>
                        </a>
                        <span className="insta"><a className="ml-2" href="https://instagram.com/meddemconcepts">@instagram</a></span>
                        </div>

                        <div className="logo_cont">
                        <a className="ml-2" href="#">
                        <FontAwesomeIcon  icon={faPhone} size="4x" style={{color:"rgba(0,0,0,0.6)",float:"left", marginRight:9}}/>
                        </a>
                        <span className="insta">08023979413</span>
                        </div>
                            */}
                    </div>
                </div>
                
         
            <Footer/>
        </React.Fragment>
        )
    }
}
