// Import Modules
import React from "react";
import Typewriter from "typewriter-effect";

export default function Contact() {
  return (
    <section className="about" id="about">
        <div className="row">
            <div className="column-left">
            <h2>
              <Typewriter 
                options={{loop: true,}}
                onInit={(typewriter)=> {
                typewriter
                
                .typeString("Front End Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("UX/UI Designer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Creative Coder")
                .pauseFor(1000)
                .start();
                }}/>
                </h2>
            <br/>
            
            <div className="paragraph">
              <p>Hello, I’m Tayah, a Front End Developer, UX/UI Designer and Creative Coder with 4+ years of web design and development education. I have recently graduated with Distinctions from the Queensland University of Technology with a Bachelors of Information Technology (Computer Science) and a Bachelors of Design (Interaction Design) and am looking to kickstart my career as a <b>‘Junior Front End Developer’.</b></p>

              <p>As a developer with a passion for design I enjoy challenging myself with staying up to date with current web design trends that can influence the way I design and code. I am entirely user focused when it comes to my work and believe over all else a well built user experience is key to the success of any modern digital platform. I have excellent at time management and organization skills and enjoy problem solving everyday challenges to find modern innovative solutions.</p>

              <p>My core values and skills stem from the numerous opportunities and industry experiences I have partaken in, all of which shaped me to become the developer and designer I am today. In particular, over the last year I had the opportunity to, work with the Brisbane City Council on a UX/UI proposal, intern with a high-end web development team as a junior designer, travel internationally to be a part of Austrias ‘ARS Electronica’ design, technology and society festival, and showcase my interactive game experience at QUT’s graduate design festival.</p>
            </div>
            </div>
            <div className="column-right">
            </div>
        </div>
        
    </section>

  );
}
  