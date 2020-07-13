import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default class About extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
     
        return (
            <React.Fragment>
                <Navbar/>
                <div className="about container">
                   
                       <div className="col-md-12 text-center col-sm-12 ab">
                       <a className="navbar-brand text-primary" href="/">
                           <img className="pu_" style={{height:120,width:200}} alt="loading" src={require('../Home/new.jpg')}/></a>
                           <h1 >About OAIF</h1>
                           <h4>One Africa Initiatives Foundation</h4>
                           <p>
                               MOTTO: AFRICA BY AFRICANS


                               <h4 style={{color:'black'}} className="mt-4">
                                   WHICH PROBLEMS ARE WE SOLVING?
                               </h4>

                               <p style={{fontWeight:'bold'}}>
                                   Mordernisation and Unity in Africa
                               </p>


                               <h4 className="mt-4">
                                   DELIVERABLES:
                               </h4>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Reclaim Africa for Africa</span>
                               </p>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Build a strong partnership among OAI members and Africans in the Diaspora for economic empowerment
                                       of your individual members and Africans
                                   </span>
                               </p>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Become a strong advocacy VOICE defending Africans against any form of slavery and human rights abuse
                                   </span>
                               </p>


                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Generate fresh and realistic solutions for African Political And Business leaders with a view to optimizing opportunities for Africa in the New World order
                                   </span>
                               </p>

                               
                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Keep eagles eyes on Global events: evaluate the potential risks and opportunities and Alert African leaders accordingly.
                                   </span>
                               </p>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Come up with concrete action plans to encourage Africans in the Diaspora to return home to start the process of Modernisation. Study the Ghana model ( YEAR OF RETURN) and help the government to strengthen it.
                                   </span>
                               </p>

                               <h4>STRATEGIES : </h4>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Meet with  willing African leaders to share our ideas with them from time to time.
                                   </span>
                               </p>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Seek partnership with AU and other relevant organisations  and individuals like Professor Lumuba and Ambassador Arikana to leverage on their networks to achieve our goals.
                                   </span>
                               </p>

                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Utilise the Know -How in the House as resource persons to come up with a research paper on any issue that can take Africa to the next level. The research papers to be discussed weekly - from Friday till Wednesday of the following week.
                                   </span>
                               </p>
                               <p className="de">
                                   <FontAwesomeIcon className="mr-3" icon={faCheck} style={{color:'#20c997'}}/>
                                   <span>Use Social  and the conventional media to disseminate the research papers.
                                   </span>
                               </p>
                            <br/>
                            <Link style={{}} to={{
                            pathname:'/contact'
                        }}><span className="btn p-2 my-4 btn-primary">
                        Contact us today
                    </span></Link>
                           </p>
                           <br/>
                           {/* <p style={{marginTop:20, fontFamily:"Muli"}} className="text mt-4 text-secondary">
                             RC: 2744543
                           </p> */}
          
                       </div>

                      

                     </div>
                     <Footer/>
              
              
               
            </React.Fragment>
         
        )
    }
}
