import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import firebase from 'firebase'
import axios from 'axios'
import FileUploader from "react-firebase-file-uploader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import todaysDate from '../Gifted-Date/Gifted-Date'
import swal from '@sweetalert/with-react'
import { faHandPointRight,faFolder,faChartLine,faChartPie,faChartArea, faChartBar, faPeopleCarry, faTasks, faMoneyBillWave, faSms} from '@fortawesome/free-solid-svg-icons'
// import Graph from './Graph';
export default class Overview extends Component {

    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        
        
      }



     
      
  
  
  
    render() {
     
return (
<React.Fragment>
    <div style={{ backgroundColor:'white', height:'100vh'}} className="container-fluid">
    <div className="row" onClick={()=> this.props.close()}>
        <h4 className="text-secondary my-4 my-3 ml-3">Click on the button to join OAI chat room </h4>
        <div className="col-md-12 col-sm-12"  >
        <Link className="btn btn-primary" to={{
            pathname:'/chatroom',
            state:{
                user:this.props.user
              }
        }}>Join group chat <FontAwesomeIcon style={{color:'white'}} className='ml-2' icon={faSms}/></Link>
        </div>
      

        </div>
                
       
        
     </div>
  
    </React.Fragment>
        )
    }
}
