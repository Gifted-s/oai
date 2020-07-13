import React  from 'react';

import {Link,withRouter} from 'react-router-dom'

import {  faArrowRight, faMailBulk} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.button = React.createRef()
  }
    render(){
      let userEist= JSON.parse(localStorage.getItem('user'))
        return (
            <React.Fragment>
            <nav  className="navbar navbar-expand-lg  fixed-top navbar-dark  bg-dark">
            <a className="navbar-brand text-primary" href="/"><img alt="loading" src={require('./new.jpg')}/> <span className="text-light" style={{fontFamily:"Muli"}}></span></a>
            <button style={{backgroundColor:'green', paddingTop:10, paddingLeft:7}} ref={this.button} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg  class="w-46 h-29" width="40px" height="30px" viewBox="-5 0 25 25"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-283, -17)" fill="white"><g transform="translate(283, 17)"><rect x="0" y="0" width="24" height="2"></rect><rect x="-4" y="8.5" width="33" height="2"></rect><rect x="0" y="17" width="24" height="2"></rect></g></g></g></svg>
            </button>
          
            <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav justify-content-end ">
              <li onClick={()=> this.button.current.click()} className="s_cont active">
                  
                  <a    className=" ml-2 s_cont_link" href="https://facebook.com/OneAfricaInitiatives">
                    <FontAwesomeIcon style={{width:22, height:22,color:'grey'}} icon={faFacebook}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>


                  <a    className=" ml-2 s_cont_link" href="https://twitter.com/OneAfricaInit">
                    <FontAwesomeIcon style={{width:22, height:22,color:'grey'}} icon={faTwitter}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>


                  <a    className=" ml-2 s_cont_link" href="https://instagram.com/OneAfricaInitiatives">
                    <FontAwesomeIcon style={{width:22, height:22,color:'grey'}} icon={faInstagram}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>
                  <a    className=" ml-2 s_cont_link" href="mailto:oneafricainitiatives@gmail.com">
                    <FontAwesomeIcon style={{width:22, height:22,color:'grey'}} icon={faMailBulk}/>
                    <span className="sr-only">(current)</span>
                    
                  </a>
                </li>
                <li className="nav-item active">
                  <Link   onClick={()=> this.button.current.click()} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active dropdown">
                
                
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link   onClick={()=> this.button.current.click()} className="dropdown-item mt-2" to="/mission">Our Vision </Link>
                <Link   onClick={()=> this.button.current.click()} className="dropdown-item mt-2" to={{pathname:"/mission", state:{scroll:true}}}>Our Mission </Link>
                <Link   onClick={()=> this.button.current.click()} className="dropdown-item mt-2" to="/value">Our Values </Link>
              </div>
      
                
                
                </li>
                <li className="nav-item active">
                 
                <Link   onClick={()=> this.button.current.click()} className="nav-link" to="/getstarted">Publications<span className="sr-only">(current)</span></Link>
              
                </li>
                <li className="nav-item active">
                  <Link onClick={()=> this.button.current.click()} className="nav-link" to="/contact">Contact us <span className="sr-only">(current)</span></Link>
                </li>
               
               
              </ul>

              <form className="form-inline my-2 my-lg-0">
                {/* <span
                onClick={


                  ()=> {this.button.current.click()
                    
                   this.state.isLoggedIn? (()=>{
                     localStorage.clear('user')
                     swal('Logged Out', 'You can login again', 'success')
                     this.setState({isLoggedIn:false})
                   })(): this.props.history.push('/signup')
                  }
                }
                style={{fontWeight:"bold"}} className="btn-custom  btn btn-outline-primary  my-2 my-sm-0" type="submit">{this.state.isLoggedIn?'Logout': 'Signup or Login'}
                <FontAwesomeIcon className="all2" style={{height:14, width:14,
                                          color:'#3297d3',
                                          marginLeft:12,
                                          }} icon={faArrowRight}/></span> */}
                <button 
                 onClick={


                  ()=> {this.button.current.click()
                 
                  if(userEist){
                   return this.props.history.push({pathname:'/cdashboard', state:{user:userEist}})
                  }
                  else{
                    this.props.history.push('/signup')
                  }
                    
                  }
                }
                type="button" className="btn_thick mr-3 ">
                   {userEist? 'Dashboard': 'Signup or Login'}
                </button>
              </form>
           
            </div>
          </nav>
          </React.Fragment>
        )
    }
   
}

export default withRouter(Navbar)