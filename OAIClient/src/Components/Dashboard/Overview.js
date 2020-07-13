import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import firebase from 'firebase'
import FileUploader from "react-firebase-file-uploader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import todaysDate from '../Gifted-Date/Gifted-Date'
import swal from '@sweetalert/with-react'
import { faHandPointRight,faFolder,faChartLine,faChartPie,faChartArea, faChartBar, faPeopleCarry, faTasks, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
// import Graph from './Graph';
export default class Overview extends Component {

    constructor(props){
        super(props);
        this.state={
          items: [],
          avatar: "",
          isUploading: false,
          progress: 0,
          avatarURL: "",
            selectedItem:false,
            event:'',
            date:'',
            newCart:{},
            name:'',
            price:0,
            description:0,
            imgUrl:'',
            CartContructor: {},
            cartToArray:[],
            itemNeeded:'',
            page:2,
            changeScreen:false,
            isSubmitted:false,
            link:''
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        
        
      }



      async addItem(){
        window.scrollTo(0, 0)
         if(!this.state.name){
           return  swal('Please enter the article title','', "error")
         }
         else if (!this.state.description){
          return  swal('Please give a short description of the article','', "error")
         }
        //  else if (this.state.price ===0 ){
        //   return  swal('Please enter the price of the item','', "error")
        //  }
         else if (!this.state.imgUrl ){
          return  swal('Please upload a material or wait for file upload to be completed if you have started uploading ','', "error")
         }
        const {name , price , description , imgUrl } = this.state
        const addResponse = await fetch("https://oaiapi.herokuapp.com/addmaterial",{
          method:'Post',
          headers:{
              'Content-type':'application/json'
          },
          body: JSON.stringify({
           title:name ,
           note:description,
           fileUrl:imgUrl
          })
  
      })
      .then((response)=>response.json())
      .then(resJson => resJson)
      .catch(err => err.message)
       if(addResponse){
         this.setState({items : [ addResponse, ...this.state.items]})
        swal('Material uploaded ', `Title: (${this.state.name})`, "success")
       
        this.setState({name:'', description:'', imgUrl : ''})
       }
  
  
  
  
      }
      handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
      handleProgress = progress => this.setState({ progress });
      handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
      };
  
      handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
          .storage()
          .ref("material")
          .child(filename)
          .getDownloadURL()
          .then(url => {
            this.setState({ avatarURL: url , imgUrl:url})
  
        });
      };
  
  
  
  
    render() {
     
return (
<React.Fragment>
    <div style={{ backgroundColor:'white', height:'100vh'}} className="container-fluid">
    <div className="row" onClick={()=> this.props.close()}>
        <h4 className="text-secondary my-4 my-3 ml-3">Upload Material </h4>
         <br/>
        {/* <div className="btn btn-group">
                    <div onClick={()=> this.setState({page : this.state.page + 1})} className="btn ml-1 btn-primary">
                    Upload material
                    </div>
                   
                  </div> */}
                  <hr/>
                  
                 
                  
                      
                      
                        {this.state.page ===1 ?
                        <React.Fragment>
                        {
                          this.state.items.map((material)=>{
                            return (
                          <div key={material._id}  className="col-md-3 col-sm-6">
                             <div className="card" >
                           <img src={material.imgUrl} className="card-img-top img-fluid card__img" alt="..."/>
                           <div className="card-body">
                             <h5 className="card-title">{material.name}</h5>
                            <p className="card-text">{material.description}</p>
                            <p className="card-text">Price  ₦{material.price}</p>
                             <button type='button' onClick={()=> this.addToCart(material)}  className="btn btn-primary">Select Cake</button>
                           </div>
                         </div>
           
                             </div>
                            )
                          })
                        }
                        </React.Fragment>
          :
          
          
          <div className="adminaddform"  >
          <div className="form-group">
         <label htmlFor="name">
            Enter title of material
         </label>
         <input  onChange={(e)=> {this.setState({name:e.target.value})
         }
      
     } type="text" className="form-control" placeholder="Enter material title"/>
     </div>    
     
     <div className="form-group">
     <label htmlFor="name">
        Give a short note on this material
     </label>
     <textarea  onChange={(e)=> {this.setState({description:e.target.value})
     }
  
 } type="text" className="form-control" placeholder="Give a description for the item here">

 </textarea>
 </div>

 {/* <div className="form-group">
     <label htmlFor="name">
        Enter the price fo this item
     </label>
     <input  onChange={(e)=> {this.setState({price:e.target.value})
     }
  
 } type="number" className="form-control" placeholder="Enter the price for the item"/>
 </div> */}


 <div className="form-group">
 <label>Add pdf file(Image will show here after upload):</label>
{this.state.isUploading &&
<div>
<p style={{fontWeight:'bolder'}}>Uploading image please wait: {this.state.progress}%</p>
<div className="progress mt-2 mb-2" style={{height: 20}}>
<div className="progress-bar" role="progressbar" style={{width:`${this.state.progress}%`}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
}
{this.state.avatarURL && <> <span>Upload successful</span> <a className="ml-3"  style={{width:126, height:120}} href={this.state.avatarURL}>View material</a></>}
<FileUploader
accept="application/*"
name="avatar"
randomizeFilename
storageRef={firebase.storage().ref("material")}
onUploadStart={this.handleUploadStart}
onUploadError={this.handleUploadError}
onUploadSuccess={this.handleUploadSuccess}
onProgress={this.handleProgress}
/>
 </div>

 <div className="form-group">
    
      <input type="button" value="Submit" onClick={()=> this.addItem()} className=" btn btn-primary" />

 </div>
 </div>
          
          
          
          
          }
                      
     
     
                    
                     </div>
                
       
        
     </div>
  
    </React.Fragment>
        )
    }
}
