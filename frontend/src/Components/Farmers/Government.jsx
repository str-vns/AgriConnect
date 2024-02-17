import React from 'react';
import Header from '../Layout/Header';

const Government = () => (
  <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta property="og:site_name" content="" /> {/* website name */}
    <meta property="og:site" content="" /> {/* website link */}
    <meta property="og:title" content="" />{" "}
    <meta property="og:description" content="" />{" "}
    <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
    <meta property="og:url" content="" />{" "}
    <meta name="twitter:card" content="summary_large_image" />{" "}
    <title>AgriConnect</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
    <link href="farmers/css/fontawesome-all.css" rel="stylesheet" />
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"  rel="stylesheet" />
    <link href="farmers/css/swiper.css" rel="stylesheet" />
    <link href="farmers/css/magnific-popup.css" rel="stylesheet" />
    <link href="farmers/css/styles.css" rel="stylesheet" />
    <link rel="icon" href="farmers/images/favicon.png" />

        <header id="header" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
            <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                    <h1 class="h1-large mb-5">AGRICULTURAL PROGRAM FOR FARMERS</h1>
                    <p class="p-large mb-8">Discover programs tailored for farmers like yourself. Explore initiatives designed to meet the unique needs of agricultural professionals.</p>
                    <a class="btn-solid-lg" href="#your-link"><i class="fab fa-apple"></i>Download</a>
                    <a class="btn-solid-lg secondary" href="#your-link"><i class="fab fa-google-play"></i>Download</a>
                </div>
                <div class="xl:text-right">
                    <img class="inline" src="farmers/images/header-smartphone.png" alt="alternative" />
                </div>
            </div> 
        </header> 
   
 
    <div className="py-24">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
              className="inline"
              src="farmers/images/details-2.jpg"
              alt="alternative"
            />
          </div>
        </div>{" "}
        {/* end of col */}
        <div className="lg:col-span-5">
          <div className="xl:mt-12">
            <h2 className="mb-6">1. Subsidies and Grants </h2>
            <ul className="list mb-7 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Get simple and clear advice on applying for subsidies and grants in agriculture.</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Stay in the loop with the latest news on funding opportunities and policy changes</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div> Discover practical tips for a successful application and maximizing benefits.</div>
              </li>
            </ul>
            <a className="btn-outline-reg" href="/First">
              Details
            </a>
          </div>
        </div>{" "}
        
        {/* end of col */}
      </div>{" "}
      {/* end of container */}
    </div>
    <div className="py-24">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
              className="inline"
              src="farmers/images/details-2.jpg"
              alt="alternative"
            />
          </div>
        </div>{" "}
        {/* end of col */}
        <div className="lg:col-span-5">
          <div className="xl:mt-12">
            <h2 className="mb-6">2. Credit and loan Programs </h2>
            <ul className="list mb-7 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Features that will help you and your marketers</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Smooth learning curve due to the knowledge base</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Ready out-of-the-box with minor setup settings</div>
              </li>
            </ul>
            <a className="btn-outline-reg" href="/Second">
              View More
            </a>
          </div>
        </div>{" "}
        
        {/* end of col */}
      </div>{" "}
      {/* end of container */}
    </div>
    <div className="py-24">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
              className="inline"
              src="farmers/images/details-3.png"
              alt="alternative"
            />
          </div>
        </div>{" "}
        {/* end of col */}
        <div className="lg:col-span-5">
          <div className="xl:mt-12">
            <h2 className="mb-6">3. Training and Skill Development</h2>
            <ul className="list mb-7 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Improve your farming skills by learning new tools and tricks through workshops, courses, and advice from professionals.</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Learn as much as you can about farming and gain the confidence to handle any problem that comes up in the field.</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Unlock your farming potential, get expert training to learn smarter, farm better, and reach your farming goals.</div>
              </li>
            </ul>
            <a className="btn-outline-reg" href="/Third">
              View More
            </a>
          </div>
        </div>{" "}
        
        {/* end of col */}
      </div>{" "}
      {/* end of container */}
    </div>
    <div className="py-24">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
              className="inline"
              src="farmers/images/details-2.jpg"
              alt="alternative"
            />
          </div>
        </div>{" "}
        {/* end of col */}
        <div className="lg:col-span-5">
          <div className="xl:mt-12">
            <h2 className="mb-6">4. Environmental Conservation Programs</h2>
            <ul className="list mb-7 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Programs that help farmers keep our land & air healthy and happy.</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Initiatives to farm smart, protect what matters, and grow for tomorrow.</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right" />
                <div>Actions helping farmers fight climate change and build a brighter, greener future.</div>
              </li>
            </ul>
            <a className="btn-outline-reg" href="/Fourth">
              View More
            </a>
          </div>
        </div>{" "}
        
        {/* end of col */}
      </div>{" "}
      {/* end of container */}
    </div>
  </>
);

export default Government;