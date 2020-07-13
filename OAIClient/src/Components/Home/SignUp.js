import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import swal from '@sweetalert/with-react'
import axios  from 'axios'
import { Link } from 'react-router-dom';
import {faUser, faPenAlt,faUserCircle, faBookOpen,faArrowCircleRight, faPenFancy,faClock, faPencilAlt,faArrowAltCircleRight, faArrowAltCircleLeft, faSleigh} from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'reactstrap';

export default class Login extends Component {
    constructor(props){
        super();
        this.state={
                logPass:'',
                logEmail:'',
                name:'',
                email:'',
                password:'',
                gender:"",
                dob:'',
                retries:0,
                password2:"",
                saving:false,
                country:'',
                phone:'',
                profession:'',
                profile:'',
                term:false,
                page:1
            
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
       if(this.props.location.state){
        this.setState({page:2})
       }
      
    }
    
    proceed=()=>{
        // if(!this.state.course){
        //    return swal('Oops', 'Sorry admin has not set up this exam or test', 'error')
        // }
        // else{
        //     localStorage.setItem('user', JSON.stringify({matric_number:this.state.matno, name:this.state.name}))
        //     this.props.history.push({pathname: '/test-page',  state:{name:this.state.name, matno:this.state.matno, course:this.state.course, time:this.state.time}})
        // }
      
    }
    handleSignup=(e)=>{
        e.preventDefault()
        
        const {name, email, password, password2,phone, profession, profile,country, gender, dob, term}= this.state
        if(!name){
            return swal('', 'Please enter your name', 'error')
        }
        else if(!email){
            return swal('', 'Please enter your email', 'error')
        }
        else if(!phone){
            return swal('', 'Please enter your phone number', 'error')
        }
        else if(!password){
            return swal('', 'Please enter a password', 'error')
        }
        else if(password !== password2){
            return swal('', 'Password does not match', 'error')
        }
        else if(!profession){
            return swal('', 'Please enter your profession', 'error')
        }
        else if(!profile){
            return swal('', 'Please enter your abidge profile', 'error')
        }
        else if(!country){
            return swal('', 'Please enter your country of residence profile', 'error')
        }
        else if(!gender){
            return swal('', 'Please select your gender', 'error')
        }
        else if(!dob){
            return swal('', 'Please enter your date of birth', 'error')
        }
        else if(!term){
            return swal('', 'Please accept our terms and conditions', 'error')
        }
        else{
            this.setState({saving:true})
            this.setState({retries:this.state.retries +1})
            axios.post('https://oaiapi.herokuapp.com/signup', 
            {name, email, password, retries:this.state.retries, profession,phone, profile,country, gender, dob})
              .then(res=>{
                if(res.data.isAvailable){
                    this.setState({saving:false})
                  return swal('Signup successful', `
                  A message has been sent to your email, kindly check it to verify your email account. PLEASE NOTE THAT THE ADMIN WOULD HAVE TO PROVIDE AUTHORIZATION BEFORE YOU CAN LOGIN.
                  
                  `, 'success')
                }
                
              })

        }
    }

    sendMail(){
     
        swal({
           text: 'Enter your email address',
           content: "input",
           button: {
             text: "Submit",
             closeModal: true,
           },
         })
         .then( async(e) => {
           
           if(e){
               if(!e.includes('@gmail.com')){
                  return swal('', 'Email invalid', 'error')
               }
               swal('loading, please wait...', 'if you dont get a response has soon as possible, click OK and retry' , 'info')
               const result = await fetch('https://oaiapi.herokuapp.com/forgot', {
                   method: "Post",
                   headers : {
                       "Content-type" : 'application/json'
                   },
                   body: JSON.stringify({
                       email:e
                   })
               })
               .then(res=> res.json()).then(resJson => resJson).catch(err => err)
               if (result === "Failed to fetch"){
                   // this.setState({showSpinner1:false})
                   return swal('', 'we could not access the server try again and ensure internet connection is on', 'error')
               }
               if(result.error){
                   swal('', result.error, 'error')
               }
               if(result.accepted){
                   swal('', 'A message has been sent to your email. Please kindly check it out','success')
               }
               if(result.errno){
                  swal('', 'An error occured while we are sending an email to you, please checkout your network connection and try again', 'error')
               }
               
             
           }

       
          
         })

        
         
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.logEmail){
            return swal('Please enter your email', '', 'error')
        }
        if(!this.state.logPass){
            return swal('Please enter your password', '', 'error')
        }
       
        else{
            this.setState({saving:true})
            axios.post('https://oaiapi.herokuapp.com/signin', {
                logEmail:this.state.logEmail,
                logPass:this.state.logPass
              })
              .then(res=>{
                this.setState({saving:false})
                if(res.data.email==="admin@gmail.com" && this.state.logPass==="oaiadmin"){
                    localStorage.setItem('user', JSON.stringify({...res.data}))
                   
                    return  this.props.history.push({pathname: '/dashboard', state: {user : res.data}})
                }
                if(res.data.approved && res.data.email!=="admin@gmail.com"){
                    this.setState({saving:false})
                    localStorage.setItem('user', JSON.stringify({...res.data}))
                    return this.props.history.push({pathname: '/cdashboard', state: {user : res.data}})
                }

                if(!res.data.approved){
                    return swal('Sorry', 'Admin has not authorize this account', 'error')
                  }
                if(res.data.error){
                  return swal('Error', res.data.error, 'error')
                }

              
                  
                
              })
              .catch(err=>{
                return swal('Error', 'User invalid', 'error')
              })
            
           
        }

        // if(!this.state.course){
        //     return swal('Oops', 'Sorry admin has not set up this exam or test', 'error')
        //  }
    //    return swal(
    //         <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
    //          <h2>WELCOME</h2>
    //          <hr/>
    //          <div>
    //          <FontAwesomeIcon icon={faUserCircle}  style={{fontSize:100, color:'rgba(11, 141, 247, 0.6)'}}/>
    //          </div>

    //    <h3 className="text-secondary text-uppercase">{this.state.name}</h3>
    //    <p className="text-secondary f-4">{this.state.matno}</p>
           
    //    <h5 style={{marginTop:40}} className=" ">COURSE: {this.state.course}</h5>
    //         <div>
    //             <FontAwesomeIcon icon={faClock} style={{fontSize:40}} />
    //         </div>
    //    <h5 className="my-1">TIME: {Math.floor(this.state.time)} MIN</h5>
            
    //         </div>,
    //         {
    //             buttons: ['CANCEL',"BEGIN EXAMINATION"]
    //         }
    //     )
    //     .then(clicked=>{
    //         if(clicked){
    //             this.proceed()
    //         }
           
    //     })
    }
    render() {
       
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="left col-md-6">
                        <h2>OAI</h2>
                        <h5>One African Initiative</h5>
                         
                    </div>
                    <div className="col-md-6 right">

                    <a className="navbar-brand mt-3 text-primary" href="/"><img alt="loading" src={require('./new.jpg')}/></a>

                    {
                         this.state.page===1?
                         <React.Fragment>
                             <h4 className="login-text">Login to your OAI account</h4>
                        <p className="my-1 text-secondary">Don't have an accout? <Link onClick={()=> this.setState({page:2})}>Signup</Link></p>   
                       <form onSubmit={this.handleSubmit} className="login_form">
                      
                        <div>
                            <label className="label_login">Email</label><br/>
                            <input onChange={e=> this.setState({logEmail:e.target.value})} type="email" placeholder="Enter your email" className="input-box"/>
                        </div>

                        <div>
                            <label className="label_login">Password</label><br/>
                            <input onChange={e=> this.setState({logPass:e.target.value})}  type="password" placeholder="Enter your password" className="input-box"/>
                        </div>

                       
                        <div>

                            {
                                this.state.saving?
                                <button  className="btn btn_thick mt-4 lt_" disabled>
                                Please wait... <Spinner size="sm"/> 
                             </button>
                                :
                                <button  className="btn btn_thick mt-4 lt_">
                                Login <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft:4,color:'white'}}/>
                             </button>
                            }
                          
                        </div>
                        <div className="mt-4">
                            <Link className="mt-4" style={{fontSize:15}} onClick={this.sendMail}>Forgot password?</Link>
                        </div>
                        
                        
                        </form> 
                         </React.Fragment>
                         :
                         <>
                           <h4 className="login-text">Signup for your OAI account</h4>
                        <p className="my-1 text-secondary">Already have an accout? <Link onClick={()=> this.setState({page:1})}>Login</Link></p>   
                       <form onSubmit={this.handleSignup} className="login_form">
                       <div>
                            <label className="label_login">Name</label><br/>
                            <input onChange={e=> this.setState({name:e.target.value})} type="text" placeholder="Enter your full name" className="input-box"/>
                        </div>
                        <div>
                            <label className="label_login">Gender</label><br/>
                            <input onChange={e=> this.setState({gender:e.target.value})} name="gender" value="Male" type="radio" className="input-box bg-success"/>
                            <span className="label_login ml-2 text-secondary">Male</span>

                            <input onChange={e=> this.setState({gender:e.target.value})} name="gender" value="Female" type="radio" className="input-box bg-success ml-4"/>
                            <span className="label_login ml-2 text-secondary">Female</span>
                        </div>


                        <div>
                            <label className="label_login">Email</label><br/>
                            <input onChange={e=> this.setState({email:e.target.value})} type="email" placeholder="Enter your email address" className="input-box"/>
                        </div>
                        <div>
                            <label className="label_login">Phone number</label><br/>
                            <input onChange={e=> this.setState({phone:e.target.value})} type="text" placeholder="Enter your phone number" className="input-box"/>
                        </div>

                        <div>
                            <label className="label_login">Password</label><br/>
                            <input onChange={e=> this.setState({password:e.target.value})}  type="password" placeholder="Enter your password" className="input-box"/>
                        </div>
                        <div>
                            <label className="label_login"> Retype password</label><br/>
                            <input onChange={e=> this.setState({password2:e.target.value})}  type="password" placeholder="Retype  password" className="input-box"/>
                        </div>
                        <div>
                            <label className="label_login">Date of birth</label><br/>
                            <input onChange={e=> this.setState({dob:e.target.value})} type="date" placeholder="Enter your phone number" className="input-box"/>
                        </div>

                        <div>
                            <label className="label_login">Country of residence</label><br/>
                            <input onChange={e=> this.setState({country:e.target.value})} type="text" placeholder="Enter your country of residence" className="input-box"/>
                        </div>
                        <div>
                            <label className="label_login">Profession</label><br/>
                            <input onChange={e=> this.setState({profession:e.target.value})} type="text" placeholder="Enter your profession" className="input-box"/>
                        </div>

                        <div>
                            <label className="label_login">Your abridge profile here</label><br/>
                          <textarea onChange={e=> this.setState({profile:e.target.value})} type="text" placeholder="Enter a brief abridge profile here" className="input-box">

                          </textarea>
                        </div>
                        <div>
                        <input onChange={e=> this.setState({term: !this.state.term})} type="checkbox" className="input-box my-2"/>
                            <span className="p-2 my-3">
                                
                                By clicking on the checkbox, you agree to all OAI terms and policy</span>
                        </div>

                       
                        <div>
                        {
                                this.state.saving?
                                <button  className="btn btn_thick mt-4 lt_" disabled>
                                Please wait... <Spinner size="sm"/> 
                             </button>
                                :
                                <button  className="btn btn_thick mt-4 lt_">
                                Signup <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft:4, color:'white'}}/>
                             </button>
                            }
                         
                        </div>
                        
                        
                        </form> 
                         </>
                     }
                        







                     
                    </div>
                </div>
            </div>
        )
    }
}
