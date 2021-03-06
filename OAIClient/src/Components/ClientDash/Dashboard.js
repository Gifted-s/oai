import React, { Component } from 'react'
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBars, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
// import { faUser,faBars, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import swal from 'sweetalert';
import Recent from './Recent';
import axios from 'axios';
import { isNullableType } from 'graphql/type';

const ScheduleEvent = React.lazy(()=> import('./ScheduleEvent'))
const Links = React.lazy(()=> import('./Links'))
const EditProfile = React.lazy(()=> import('./EditProfile'))

const Overview = React.lazy(()=> import('./Overview'));
export default class Dashboard2 extends Component {
    constructor(props){
        super(props);
        this.state={
            showSidebar:false,
            presentPage:'home',
            userdata: [],
            user :null
        }
    }


 componentDidMount(){ 
     const userExist = JSON.parse(localStorage.getItem('user')) 
    
    if(!userExist){
      this.props.history.push('/')
    }
    else if(!this.props.location.state){
      this.props.history.push('/')
    }
    else{

      axios.get(`https://oaiapi.herokuapp.com/get-user/${this.props.location.state.user._id}`)
      .then(res=>{
        this.setState({user:res.data})
      })
    }

    // swal({
    //     text: 'Enter secret key to access this page',
    //     content: "input",
    //     button: {
    //       text: "Submit",
    //       closeModal: true,
    //     }
    //   })
    //   .then(password =>{
    //       if(password!=="celefuta001"){
    //           swal('Invalid password', '', 'error')
    //           this.props.history.push('/')
    //       }
    //       else{
    //         swal('Access granted', '', 'success')
    //       }
          
    //   })


 }
      
toggle(){
    this.setState({showSidebar: !this.state.showSidebar})
}
changeScreen(screen){
window.scrollTo(0, 0)
this.setState({presentPage:screen})
}


    render() {
        
      
        return (
            <div  className="container-fluid dash">
                {
                    this.state.user?
                    <div className="row ">
       

                    {
                       this.state.showSidebar && window.innerWidth <=768 ?
                      
                       <Sidebar user={this.state.user} presentPage={this.state.presentPage}  navigateTo={this.changeScreen.bind(this)}  toggle= {this.toggle.bind(this)}/>
            
                        :
                       window.innerWidth>768 ?
                       <Sidebar  user={this.state.user} presentPage={this.state.presentPage}  navigateTo={this.changeScreen.bind(this)} toggle= {this.toggle.bind(this)}/>
                       :
                       null
            
                    }
            
            <div  style={{position: `${window.innerWidth<768 ? "absolute" :'relative'} `}} className="col-md-10 col-sm-3 dashboard_right">
            
            
            <div className="dash_nav">
                 <div className="icon__" style={{float:'left', marginTop:14,marginRight:30}}  >
                   <span className="__icon" onClick={this.toggle.bind(this)}><FontAwesomeIcon style={{width:30,marginLeft:14, height:27}} icon={faBars} /> 
                   </span>
                   <span style={{fontWeight:'600',color:'white' ,marginLeft:10}} className="logout_text"> 
                   {this.state.user.name.split(' ')[0]}
                   </span>
                  
                    
                   
                </div>
             
                 <div  style={{float:'right',cursor:'pointer', marginTop:14, marginRight:30}}  className="user">
                    
                   {/* <span onClick={()=> this.changeScreen('edit')}><FontAwesomeIcon icon={faUser} /></span> */}
                      <span
                      style={{fontWeight:'600', marginLeft:40, cursor:'pointer'}}  onClick={()=>{
                    swal({
                        title: "Are you sure?",
                        text: "",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                        localStorage.clear('user')
                         this.props.history.push('/')
                        } else {
                       
                        }
                    });
                 }}  className="logout_text">
                     <span >logout<FontAwesomeIcon style={{marginLeft:6, cursor:'point'}} icon={faSignOutAlt} /></span></span>
                    
                   
                </div>
              
              </div>
            {
                this.state.presentPage === 'home' ?
                 <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }>
                  <Overview user={this.state.user} change={this.changeScreen.bind(this)}  close={()=>this.setState({showSidebar:false})}/>
                 </React.Suspense>
              
                :
                this.state.presentPage === 'schedule'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }> <ScheduleEvent changeScreen={this.changeScreen.bind(this)}  close={()=>this.setState({showSidebar:false})}/>
                 </React.Suspense>
               :
                this.state.presentPage === 'links'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400,flexDirection:'column', flex:1, display:'flex', justifyContent:'center', alignItems:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }><Links  close={()=>this.setState({showSidebar:false})} /></React.Suspense>
                :
                this.state.presentPage === 'edit'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div> 
                 }>
                <EditProfile user={this.state.user} changeScreen={this.changeScreen.bind(this)}  close={()=>this.setState({showSidebar:false})} />
                </React.Suspense>
                :
            
                this.state.presentPage==="recent" ?
                <React.Suspense fallback={
                    <div  style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }>
                <Recent  changeScreen={this.changeScreen.bind(this)} close={()=>this.setState({showSidebar:false})}/>
                
                </React.Suspense>
                :
                null
                
            
            }
            
            
            
            
            
            
            
            
            
            
            
                               </div>
            
            
            
            
            
                           </div>
                   
                
                    
                    :
                    <Spinner className="ml-4 mt-4"/>
                }

                  
             
            </div>
        )
    }
}
