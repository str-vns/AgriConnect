// Info.jsx
import React from "react";
import Header from "./Layout/Header";
import Cards from "./Cards";
import './Info.css';


const Info = () => {
  return (
    <>
      <section className="flex h-screen">
        <Header className="fixed-header" />
        <section className="overflow-y-scroll w-full">
          <div className="header">
            
            <div class="info">
              <h4><a href="#category">AGRICONNECT</a></h4>
              <h1 className="main-title">Cultivating Connections, Harvesting Success</h1>
            </div>
          </div>
          <section class="content">
            <p>Agriconnect serves as a comprehensive platform revolutionizing agriculture by
               connecting farmers directly with essential resources, information, and opportunities. 
               With its user-friendly interface and innovative technologies, Agriconnect empowers farmers
                while fostering a sustainable and resilient agricultural community. By streamlining access
                 to crucial tools and market insights, it enhances productivity and improves livelihoods, 
                 benefiting both farmers and consumers by reducing middleman markups and ensuring fair prices
                  for agricultural products. This initiative envisions a brighter future for farmers and the 
                  agricultural sector as a whole</p>
                  <div class="about-us">
  <h1>About Us</h1>
</div>

        </section>
        <Cards />
    
        </section>
        <section>
        </section>
      </section>
    </>
  );
};

export default Info;
