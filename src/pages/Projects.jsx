// Import Modules
import React from "react";

export default function Projects() {
  return (
    <div>
      <section className="projects" id="projects">
        <h2>Projects</h2>

          <div id="gallery">
            <a href="https://www.behance.net/gallery/125086311/South-East-Local-Travel-Website" target="_blank"><img src={require('../img/projects/South-East-Local.jpg')} alt="South East Local" /></a>
            <a href="https://www.behance.net/gallery/163812443/Lunar-Exchange-React-Stocks-Application" target="_blank"><img src={require('../img/projects/Lunar-Exchange.jpg')} alt="Lunar Exchange" /></a>
            <a href="https://www.behance.net/gallery/125088133/Postal-Plants-Mockup-Plant-Marketplace-Design" target="_blank"><img src={require('../img/projects/Postal-Plants.jpg')} alt="Postal Plants" /></a>
            <a href="https://www.behance.net/gallery/147068115/Augmented-Fitness-Mirror-AR-Design-Prototype" target="_blank"><img src={require('../img/projects/Fitness-Mirror.jpg')} alt="Augmented Fitness Mirror" /></a>
            <a href="https://www.behance.net/gallery/158401327/Signs-of-Life-A-Playful-Introduction-to-Auslan" target="_blank"><img src={require('../img/projects/Signs-Of-Life.jpg')} alt="Signs of Life" /></a>
            <a href="https://www.behance.net/gallery/128766683/QShuttle-QUT-Shuttle-Bus-App-Design" target="_blank"><img src={require('../img/projects/QShuttle.jpg')} alt="QShuttle" /> </a>
          </div>

    </section>
    </div>
  );
}
  