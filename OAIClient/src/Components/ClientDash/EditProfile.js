import React, { Component } from 'react'
import {Spinner} from 'reactstrap'
import swal from '@sweetalert/with-react'
export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            gender:"",
            phone:'',
            profession:'',
            profile:'',
            dob:'',
            saving:false,
            oldpass:"",
            newpass:"",
            country:''


        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        
      }
   async handleSubmit(e){
       
        e.preventDefault()
        if(this.state.oldpass && !this.state.newpass  ){
            return swal('','Please enter a new password', 'error')
        }
        if(!this.state.oldpass && this.state.newpass){
            return swal('','Please enter the old password', 'error')
        }

        this.setState({saving:true})
        console.log(this.state)
       const {
        name,
        gender,
        phone,
        profession,
        profile,
        dob,
        oldpass,
        newpass,
        country,
       } = this.state
        const editResponse = await fetch(`https://oaiapi.herokuapp.com/edit-user`,{
           method:'Post',
           headers:{
               'Content-type':'application/json'
           },
           body: JSON.stringify({
            name : name || this.props.user.name ,
            phone : phone || this.props.user.phone,
            email: this.props.user.email,
            oldPassword: oldpass,
            newPassword: newpass,
            profile : profile || this.props.user.profile,
            dob : dob || this.props.user.dob,
            profession : profession || this.props.user.profession,
            gender: gender || this.props.user.gender,
            country:country || this.props.user.country

           })

       })
       .then((response)=>response.json())
       .then(resJson => resJson)
       .catch(err => err.message)
        if(editResponse){
           const {passwordChanged, ...resp} =editResponse
        if(passwordChanged){
            console.log(passwordChanged)
            if(passwordChanged.status=== "error"){
                this.setState({saving :false})
               
                return swal('Password update failed', 'invalid old password was entered', 'error')
            }
            else{
                swal('Password changed', 'profile updated', 'success')
                // this.props.editProfile(resp)
            //    return    this.props.changeScreen('home')
               setTimeout(()=>{
                  
                   window.location = '/cdashboard'
               },2000)
               }
              
           
           }
        this.setState({saving :false})
       
        swal('Profile updated', 'success', 'success')
        setTimeout(()=>{
           
            window.location = '/cdashboard'
        },2000)
        
        // return  this.props.changeScreen('home')
        }
        
        

        
    }
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
                <h3>Edit profile</h3>
                <form onSubmit={ this.handleSubmit.bind(this)}>
                <div className="form-group">
                          <label htmlFor="name">
                          Full name:   {this.props.user.name}
                          </label>
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter new name here"/>
                </div>


                <div className="form-group">
                          <label htmlFor="name">
                           Email:  {this.props.user.email}
                          </label>
                          <input  onChange={(e)=> {this.setState({price:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="You can't change this" disabled/>
                </div>
                <div className="form-group">
                <label htmlFor="name">
                            Change password :
                </label>
                <div className="row">
                
                    <div className="col-md-6 mt-2 col-sm-10">
                   
                          <input  onChange={(e)=> {this.setState({oldpass:e.target.value})
                          }
                       
                      } type="password" className="form-control" placeholder=" Enter old password"/>

                    </div>
                    <div className="col-md-6 mt-2 col-sm-10">
                   
                          <input  onChange={(e)=> {this.setState({newpass:e.target.value})
                          }
                       
                      } type="password" className="form-control" placeholder=" Enter new password"/>

                    </div>
                </div>
                </div>


                <div className="form-group">
                          <label htmlFor="name">
                             Phone number:+234 {this.props.user.phone}
                          </label>
                          <input  onChange={(e)=> {this.setState({phone:e.target.value})
                          }
                       
                      } type="number" className="form-control" placeholder="Enter new phone number" />
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Profession: {this.props.user.profession}
                          </label>
                          <input  onChange={(e)=> {this.setState({profession:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter new profession here"/>
                </div>
                <div className="form-group">
                          <label htmlFor="name">
                             Abidge Profile: {this.props.user.profile}
                          </label>
                          <textarea  onChange={(e)=> {this.setState({profile:e.target.value})
                          }
                       
                      } type="text"  className="form-control" placeholder="change abidge profile">

                      </textarea>
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Gender: {this.props.user.gender}
                          </label>
                        
                           <p> Change to {this.props.user.gender ==="Male" ?"Female":"Male"}
                          <input  onChange={(e)=> {this.setState({gender:e.target.value})
                          }
                       
                      } type="checkbox" className="ml-3" value={this.props.user.gender ==="Male" ?"Female":"Male"} />
                      </p>
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Date of birth: {this.props.user.dob}
                          </label>
                          <input  onChange={(e)=> {this.setState({dob:e.target.value})
                          }
                       
                      } type="date" className="form-control" placeholder="You can't change this"/>
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Country: {this.props.user.country}
                          </label>
                          <input  onChange={(e)=> {this.setState({country:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter new country" />
                </div>
                <div>
                {
                    this.state.saving?<button className="btn btn-primary form-control my-2" type="submit" disabled>Please wait.... <Spinner style={{color:'white', width:20, height:20}}/></button> :<button  className="btn btn-primary form-control my-2" type="submit">Save</button>
                }
               
                </div>
                </form>
                
            </div>
        )
    }
}
