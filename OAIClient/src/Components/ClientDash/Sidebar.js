import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faUpload ,faWindowClose,faLink,faClock,faListAlt, faThermometer, faPen, faTasks, faMailBulk, faSms} from '@fortawesome/free-solid-svg-icons'
import { FacebookMessengerIcon } from 'react-share';

 class Sidebar extends Component {
    render() {
        const {presentPage:present} = this.props
        return (
            <div className="col-md-2 col-sm-3 sidebar">
                {window.innerWidth <=768 ?
                <div onClick={()=>this.props.toggle()} className="close_btn"  style={{float:'right'}}>
                <FontAwesomeIcon style={{width:25, height:25, color:'#3297d3'}} icon={faWindowClose}/>
            </div> :null}
            
            <div style={{width:50, height:50,display:'flex', justifyContent:'center', alignItems:'center', borderRadius:50}} className=" my-3 ml-1" >
                        <Link className="" to="/" style={{textDecorationWidth:0,borderBottomColor:'white' ,borderBottom:'none'}}>
                            
                        <img style={{width:100,marginBottom:20,marginLeft:20, height:80}} alt="loading" src={require('../Home/new.jpg')}/>
                            
                       </Link> 
                       </div>
        <div onClick={()=>{
            this.props.toggle()
            this.props.navigateTo('edit')
            }}  className="cd">
                <h5>{this.props.user.name}</h5>
                <p>{this.props.user.email}</p>
            
        </div>
        <div 
        onClick={()=>{
            this.props.navigateTo('home')
            this.props.toggle()

        }}
        
        className={present=== "home" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
             <span > <FontAwesomeIcon icon={faSms}  className={present=== "home" ? `cr cr_icon`:"sidebar_text" }/></span>  <span className="sidebar_text">Chat Room</span>
           
        </div>

        {/* <div onClick={()=>{
            this.props.navigateTo('schedule')
            this.props.toggle()

        }} className={present=== "schedule" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
        <span><FontAwesomeIcon icon={faSms} className={present=== "schedule" ? `cr cr_icon`:"sidebar_text" } /></span> <span className="sidebar_text" >Chat room</span>  
       
        </div> */}


        {/* <div
        onClick={()=>{
        this.props.navigateTo('recent')
        
        this.props.toggle()
      
        }}
       
       className={present=== "recent" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
           <span><FontAwesomeIcon className={present=== "recent" ? `cr cr_icon`:"sidebar_text" } icon={faMailBulk} /></span> <span className="sidebar_text">Message OAI members</span>
       
       </div> */}
      
       {/* <div onClick={()=>{
            this.props.navigateTo('links')
            this.props.toggle()

        }} className={present=== "links" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
          <span> <FontAwesomeIcon className={present=== "links" ? `cr cr_icon`:"sidebar_text" } icon={faUpload} /></span> <span className="sidebar_text">Upload questions</span>
       
       </div> */}
       <div
       onClick={()=>{
        this.props.navigateTo('edit')
        this.props.toggle()

        }}
       
       className={present=== "edit" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
           <span><FontAwesomeIcon className={present=== "edit" ? `cr cr_icon`:"sidebar_text" } icon={faPen} /></span> <span className="sidebar_text" >Edit Profile</span>
       
       </div>
       
       
</div>
        )
    }
}

export default withRouter(Sidebar)