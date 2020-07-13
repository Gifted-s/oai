import React, { Component } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

export default class Value extends Component {
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
                             }} icon={faMedal}/>
                 <div className="row">
                   <div className="col-md-12 text-center get col-sm-12 ">
                       
                   <h2 className="text-center">Our Values </h2>
                   <p className="text-center">To erect a veritable bridge  <br/> connecting all of African decants globally towards rebirth of our <br/> motherland </p>

                  
                   

                              
                   </div>


                   
            </div>

            
            </div>
            </React.Fragment>
        )
    }
}
