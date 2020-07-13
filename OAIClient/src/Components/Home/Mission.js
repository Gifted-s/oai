import React, { Component } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons'

export default class Mission extends Component {
  constructor(props){
      super(props)
       this.state={
           scroll:false
       }
  }
componentDidMount(){
    console.log(this.props.location.state)
    if(this.props.location.state){
       this.setState({scroll:true})
    }
}
componentDidUpdate(){
    this.scrollToBottom()
}

scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

    render() {
        return (
            <React.Fragment>
            <Navbar/>
                 <div className="container pol">
                       <FontAwesomeIcon style={{height:120, width:120,
                             backgroundColor:'#20c997',
                             padding:23,
                            
                             color:'white',
                             marginBottom:30,
                             borderRadius:58,
                             }} icon={faEye}/>
                 <div className="row">
               
                   <div className="col-md-12 text-center get col-sm-12 ">
       
                             
                   <h2 className="text-center">Our Vision </h2>
                   <p className="text-center">
          To unite Africa,<br/> her people and resources towards the modernization of Africa driven by and owned by<br/> Africans </p>

                  
                   

                              
                   </div>


                   
            </div>



            <FontAwesomeIcon style={{height:120, width:120,
                             backgroundColor:'#20c997',
                             padding:23,
                             marginTop:90,
                             marginBottom:30,
                             color:'white',
                            
                             borderRadius:58,
                             }} icon={faRocket}/>
            <div className="row">
                   <div style={{clear: "both"}}
                   ref={(el) => { this.messagesEnd = el; }}
                   className="col-md-12 text-center get col-sm-12 ">

                   <h2 className="text-center"> Our Mission </h2>
                   <p className="text-center">To erect a veritable bridge <br/> connecting all of African decants globally towards rebirth of our <br/>motherland </p>

                  
                   

                              
                   </div>
                   </div>
            </div>
            </React.Fragment>
        )
    }
}
