import React from "react"


function About(){
    return (
        <div>
            <h1 style={{textAlign:"center",color:"white"}}><strong>Welcome To QuickNotes</strong></h1>
            
            <div>
                <h5 style={{alignItems:"center",width:"80%",padding:"40px",color:"black",letterSpacing:"2px",lineHeight:"50px;"}}>Quick Notes is a React.js Website that allows you to note down and save your ideas,
                plans, meetings quickly and with security. 
                </h5>
            </div>
            <h3 style={{marginLeft:"40px",color:"white"}}>About our Founder:</h3>
            <div style={{alignItems:"center",width:"80%",padding:"40px",color:"black",letterSpacing:"2px",lineHeight:"50px;"}}>
                <img style={{borderRadius:"10%",width:"200px",margin:'40px',marginTop:'0px'}} src="founder.png" alt="nothing"></img>
                <h5>
                Mr. Arpit Mathur was born in New Delhi, on 24 December, 2003. He is a Full Stack developer and has completed
                his B-Tech in Computer Science and Engineering from Pandit Deendayal Energy University, Gandhinagar (PDEU) in year 2025.
                </h5>
            </div>
            

           
        </div>
    )
}

export default About