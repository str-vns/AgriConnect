// Info.jsx
import React from "react";
import './card-styles.scss'; 

const Card = () => {
  return (
    <>
          {/* Additional Blog Cards */}
          <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
              <ul class="details">
               
                <li class="tags">
                  
                </li>
              </ul>
            </div>
            <div class="description">
              <h1 >Steven Barrantes</h1>
              <h2 >Leading Programmer</h2>
              <p > Responsible for translating agricultural insights into functional code, the Leading Programmer plays a pivotal role in ensuring the seamless integration of technology into the agricultural landscape.</p>
             
            </div>
          </div>
          
          <div class="blog-card alt">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
              <ul class="details">
               
                <li class="tags">
                  
                </li>
              </ul>
            </div>
            <div class="description">
              <h1>Alexandra Aquino</h1>
              <h2>Leading Documentation</h2>
              <p>From detailed technical specifications to comprehensive user manuals, the Leading Documentation professional ensures that every aspect of the AgriConnect project is thoroughly documented</p>
              
            </div>
          </div>
          
          <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
              <ul class="details">
                
                <li class="tags">
                 
                </li>
              </ul>
            </div>
            <div class="description">
              <h1 >Princess Romero</h1>
              <h2 >Researcher</h2>
              <p > Conducting thorough investigations into agricultural technologies, market trends, and user needs, the Researcher contributes valuable data and evidence to inform decision-making. .</p>
              
            </div>
          </div>

          <div class="blog-card alt">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
              <ul class="details">
               
                <li class="tags">
                  
                </li>
              </ul>
            </div>
            <div class="description">
              <h1>Melgie Balongcas</h1>
              <h2>Proofreader</h2>
              <p>systematically reviewing and refining all written materials associated with AgriConnect, from project reports to promotional content. By ensuring grammatical accuracy, clarity, and adherence to established standards</p>
              
            </div>
          </div>
      
    </>
  );
};

export default Card;
