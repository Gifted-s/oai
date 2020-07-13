import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import axios from 'axios'
import {  faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'reactstrap'
export default class GetStarted extends Component {
    constructor(props){
        super(props)
        this.state={
            materials:[]
        }
    }
    componentDidMount(){
     window.scrollTo(0,0) 
     axios.get('https://oaiapi.herokuapp.com/getmaterials')
      .then(res=>{
          console.log(res)
        if(res.data){
            this.setState({materials:res.data})
        }})
    }
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <h1 className="text-center text-uppercase pu_">Our publications</h1>
                 

                    
                    <div className='row justify-content-center align-items-center'>
                        <div className="col-md-7 col-sm-10">
                    {
                        this.state.materials.length >0?
                          this.state.materials.map(material=>{
                        return(
                            <div className="pdf_cont my-3">
                            <h4>{material.title}</h4>
                            <p style={{fontSize:13}}>{material.note}</p>
                            <a href={material.fileUrl} className="btn btn-primary btn-sm" download>
                         Download material <FontAwesomeIcon style={{color:'white'}} className="ml-2" icon={faDownload}/>
                          </a>
                        </div>  
                        )      
                        
                          })
                        :
                        <div className="pdf_cont my-3">
                        <Spinner/>
                        </div> 
                    }
                        


                       

                   

                    
                    </div>
                   
                    </div>
                </div>

            <Footer/>
           
            </React.Fragment>
           
        )
    }
}
