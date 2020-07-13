import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios'
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBirthdayCake,faBaby, faPlus,faMinus, faCalendar,faArrowLeft, faCalendarPlus,faUserGraduate, faWindowClose,faArrowRight, faUserCheck,  faRing, faSms} from '@fortawesome/free-solid-svg-icons'

export default class ScheduleEvent extends Component {
    constructor(props){
        super(props);
        this.state={
          user:null,
          speaker:'',
          changeScreen:false,
          
           
        }
    }
 Submit = (e)=>{
    e.preventDefault()
    if(!this.state.speaker){
      return swal("Meeting must have a speaker","please enter speaker's name")
    }
    else{
      this.props.history.push({pathname: '/chatroom', state: {user : {name:this.state.speaker}}})
    }
 }
    render() {
    
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule exam">
            
             <form onSubmit={this.Submit} className="exam_form">
             <h4 className="mb-4">Schedule meeting</h4>
             <hr/>
                <div class="form-group">
                 
                  <label for="exampleInputPassword1">Enter the name of meeting speaker</label>
                  <input onChange={(e)=>this.setState({speaker:e.target.value})} type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Go to chat room <FontAwesomeIcon style={{color:'white'}} className="ml-2" icon={faSms}/> </button>
              </form>
            </div>
            
        )
    }
}
