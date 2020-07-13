import React, { Component } from 'react';
import socketClient from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBars, faSignOutAlt, faArrowLeft, faArrowCircleLeft, faUsers, faCaretRight, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import todaysDate from '../Gifted-Date/Gifted-Date';
import { Link } from 'react-router-dom';


export default class ChatRoom extends Component {
    constructor(props){
        super(props);
        this.dir= React.createRef()
        this.state={
            response:false,
            endpoint:'https:',
            file:[],
            new:[],
            message:''
        }
    }
    componentDidMount(){
       
        const {endpoint}=  this.state;
        const socket = socketClient('ws://oaiapi.herokuapp.com');
     
        socket.on('msg',(msg)=>{
           if(msg.name !==this.props.location.state.user.name){
            this.setState((prev)=>{
              return {
                new:[...prev.new, msg]
              }
          })
           }
        
          
        })
    }
    componentDidUpdate() {
      this.scrollToBottom();
    }
    scrollToBottom = () => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    getTimeAll=()=>{
      var today = new Date();
      var day = today.getDay();
      var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
      console.log("Today is : " + daylist[day] + ".");
      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      var prepand = (hour >= 12)? " PM ":" AM ";
      hour = (hour >= 12)? hour - 12: hour;
      if (hour===0 && prepand===' PM ') 
      { 
      if (minute===0 && second===0)
      { 
      hour=12;
      prepand=' Noon';
      } 
      else
      { 
      hour=12;
      prepand=' PM';
      } 
      } 
      if (hour===0 && prepand===' AM ') 
      { 
      if (minute===0 && second===0)
      { 
      hour=12;
      prepand=' Midnight';
      } 
      else
      { 
      hour=12;
      prepand=' AM';
      } 
      } 
    return (daylist[day] +": "+hour+ ":" + (minute <10 ? "0"+minute:minute) + " "+ prepand );
    

    }
    
    send=(e)=>{
      
      e.preventDefault()
      if(this.state.message){
        const socket = socketClient('ws://oaiapi.herokuapp.com');
      
        socket.emit('chat-message',{time:this.getTimeAll(), name:this.props.location.state.user.name,message:this.state.message} );
        this.setState((prev)=>{
          return {
            new:[...prev.new, {time:this.getTimeAll(), name:this.props.location.state.user.name,message:this.state.message}]
          }
      })
        this.setState({message:''})
      }
    
      
    }
    render() {
      if (!this.props.location.state){
        window.location = '/'
      }
        return (
            <div className="container-fluid">
              <div style={{height:60,top:0,left:0, right:0, position:"fixed"}} className="row bg-success">
                <h4 className="mt-3 ml-4 text-light"><FontAwesomeIcon onClick={()=>this.props.history.push('/')} className="text-light ml-1 ml-2 mr-3" icon={faArrowLeft}/> OAI chatroom <FontAwesomeIcon onClick={()=>this.props.history.push('/')} className="text-light ml-2 mr-4" icon={faUsers}/> </h4>

              </div>
             <h5 style={{fontWeight:"bold"}} className="ht text-center">You: {this.props.location.state.user.name} </h5>
            <div className="chat_cont col-md-4 col-sm-12">
             {this.state.new.map((message)=>{
               return (
                 
                 <div style={{width:240,padding:'10px 0 4px 0',backgroundColor: message.name===this.props.location.state.user.name?'lightgreen':'rgba(0,0,0,0.07)',float:message.name===this.props.location.state.user.name?'right':'left', borderRadius:10}} className={`mb-3`}  key={message.message}>
                  <h5 className="text-uppercase" style={{fontSize:13,border:'1px solid rgba(0,0,0,0.2)',backgroundColor:"white",padding:6,marginTop:-10,fontFamily:'Raleway',fontWeight:'bold', color:message.name===this.props.location.state.user.name?'green':'blue'}}>{message.name}</h5>
                  <p style={{marginTop:-6,  padding:4,borderRadius:'2px solid green'}} >{message.message}</p>
                  <p className="text-secondary" style={{marginTop:-14,fontSize:12,padding:5, fontFamily:`Roboto`,textAlign:'end'}}>{message.time}</p>
                   
                 </div>
                
               )
             })}
                   <div style={{ float:"left",marginTop:50, clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                  
                   </div>
             </div>
             <form onSubmit={this.send} style={{position:"fixed",width:"100%", bottom:10}}>
               <textarea className="tti" type="text" value={this.state.message} onChange={(e)=>{
                 this.setState({message:e.target.value})
               }}></textarea>
              <button type='submit' onClick={this.send}  style={{marginBottom:10, backgroundColor:"rgb(2, 128, 33)",border:'none', outlineColor:"transparent"}} className="send_icon ml-2"><FontAwesomeIcon style={{height:25,width:25,color:'white',marginBottom:-5}}icon={faPaperPlane}/></button> 
              
             </form>
                
            </div>
        )
    }
}
// import React,{Component} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import FilesUploadComponent from './Upload';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//          <FilesUploadComponent/>
//       </div>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// // import './App.css';

// const NavBar = () => (
//   <div className="navbar">
//     <h3>Task Manager</h3>
//     <Link to="/">Current Tasks</Link>
//     <Link to="/completed">Completed Tasks</Link>
//   </div>
// );

// const Template = (props) => (
//   <div>
//     <NavBar />
//     <p className="page-info">
//       {props.title}:
//     </p>
//     <ul className={props.status}>
//         <li>Task 1</li>
//         <li>Task 2</li>
//         <li>Task 3</li>
//         <li>Task 4</li>
//         <li>Task 5</li>
//     </ul>
//   </div>
// );

// const CurrentTasks = () => (
//   <Template title="Current Tasks" status="Current"/>
// );

// const CompletedTasks = () => (
//   <Template title="Completed Tasks" status="Completed"/>
// );

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Route exact path="/" component={CurrentTasks}/>
//           <Route path="/completed" component={CompletedTasks}/>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

