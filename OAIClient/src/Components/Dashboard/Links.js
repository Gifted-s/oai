import React, { Component } from 'react'
import axios from 'axios';
import swal from '@sweetalert/with-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFileArchive} from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'reactstrap';
export default class Links extends Component {
    constructor(props){
      super(props)
      this.state={
        materials:[],
        deletedNames: []
    }
            
    }
    componentDidMount(){
      window.scrollTo(0,0) 
      axios.get('https://oaiapi.herokuapp.com/getusers')
       .then(res=>{
           console.log(res)
         if(res.data){
             this.setState({materials:res.data})
         }})
     }


     





     delete=(id)=>{
      axios.get(`https://oaiapi.herokuapp.com/delete-user/${id}`)
      .then(res=>{
          console.log(res)
        if(res.data){
            swal('User deleted', '', 'success')

           let material= this.state.materials.find((material)=> material._id = id)
          
           this.setState({deletedNames:[...this.state.deletedNames, material.name]})
        }})
       .catch(err=>{
        swal('Error', 'Cannot delete at the moment ', 'error')
       }) 
     }
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
              <h4>OAI members</h4>
               <div style={{marginLeft:-40}} className='row'>
                  {
                        this.state.materials.length >0?
                          this.state.materials.map(material=>{
                        return(
                          <React.Fragment>

                        {
                          this.state.deletedNames.includes(material.name) <1 && material.name !== "Admin" ?
                          <div style={{backgroundColor:'#efefef', padding:14}} className="col-md-3 ml-3 mt-4">

                          <p>Name: <b>{material.name}</b></p>
                          <p>Email:   <b>{material.email}</b></p>
                          <p>Phone Number: <b> {material.phone}</b></p>
                          <p>Gender: <b>{material.gender}</b></p>
                          <p>Profession: <b>{material.profession}</b></p>
                          <p>Country: <b>{material.country}</b></p>
                          <p>Profile: <b>{material.profile}</b></p>
                          <div className="btn-group">
                          <div onClick={()=>this.delete(material._id)} className="btn btn-danger">Delete User</div>
                          </div>
                          </div>
                          :
                           null
                        }
                          
                        </React.Fragment>
                        )      
                        
                          })
                        :
                        <div className="pdf_cont my-3">
                        <Spinner/>
                        </div> 
                    }
                        



              

                  
               </div>
            </div>
        )
    }
}
