import React from "react"


export default function Info() {
       
       return(
           
           <main>
          
           <h1 className="info--name"> Thierry Mballa </h1>
           <h2 className="info--role"> Frontend Developer </h2>
           <h3 className="info--site"> thierrymballa.website</h3>
           
           <div className="btn">
           <button className="email--btn"> <i className="fa fa-envelope"> </i> Email </button>
           <button className="linkedin--btn"><i className="fa fa-linkedin-square"></i> Linkedin</button>
           </div>
           
           
           <h3 className="about"> About </h3>
           <p className="about--me"> Highly skilled and detail-oriented Frontend Web Developer with 4 years of experience in creating visually appealing and user-friendly websites. Dedicated to delivering exceptional user experiences through efficient coding practices and a deep understanding of frontend technologies. </p>
           
           <h3 className="interest"> Interests </h3>
           
           <p className="my--interest">Fitness enthusiast. Psychology scholar. Reader. Internet fanatic. 
           Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
           Coffee fanatic. </p>
           
           </main>
       )
    
}