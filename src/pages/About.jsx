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

            <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis arcu ac nisl porta, sit amet dignissim turpis tincidunt. Sed eu fringilla erat. Aenean ullamcorper, tellus eget dignissim pulvinar, felis augue maximus sem, at euismod sem dolor sit amet turpis. Ut fringilla ac magna id scelerisque. Donec sit amet metus risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis suscipit dui dui, et imperdiet mi malesuada et. Cras at sapien semper, venenatis purus a, porttitor magna. Nam tristique lorem nec quam interdum, vel facilisis risus tempus. Pellentesque non nibh enim. Proin luctus ornare mollis. Aenean lacus magna, ornare eu rutrum non, consequat lacinia mi. Duis sollicitudin euismod felis sed tincidunt.
                Vivamus gravida purus pharetra, sagittis leo vel, tristique mi. Aliquam vulputate ligula in gravida tempus. Pellentesque rhoncus felis a erat malesuada, sit amet placerat augue mollis. Fusce facilisis mauris quis rutrum cursus. Sed tincidunt dictum ligula, vitae fermentum sapien pulvinar in. Duis vitae mauris elit. Etiam pharetra nibh sed consequat cursus.</a>
            </div>
            <div className="column-right">
              {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#CBC3E3" d="M48.5,-67.1C59.1,-59.2,61.1,-39.8,66.2,-22C71.3,-4.2,79.5,12.2,78.3,28.3C77,44.5,66.3,60.5,51.7,64.9C37,69.3,18.5,62.1,1,60.8C-16.6,59.4,-33.1,63.9,-46.3,59C-59.5,54.2,-69.4,40,-71.7,25.1C-74.1,10.2,-69,-5.3,-64.2,-21.1C-59.4,-37,-54.9,-53.2,-44.3,-61.1C-33.6,-69,-16.8,-68.6,1.1,-70.1C19,-71.6,38,-75,48.5,-67.1Z" transform="translate(100 100)"/>
              </svg> */}
            </div>
        </div>
        
    </section>

  );
}
  