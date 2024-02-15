import React from 'react';

const Third = () => (
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
    {/* <header
  id="header"
  className="header py-2 text-center md:pt-2 lg:text-left xl:pt-2 xl:pb-2"
>


      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">AGRICULTURAL PROGRAM FOR FARMERS</h1>
          <p className="p-large mb-8">
            Discover programs tailored for farmers like yourself. Explore
            initiatives designed to meet the unique needs of agricultural
            professionals.
          </p>
        </div>
      
      </div>{" "}
    </header>{" "} */}
    <div id="features" className="cards-1">
      <div className="container px-4 sm:px-8 xl:px-4">
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-1.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Agricultural Productivity Competitiveness Enhancement Fund</h5>
            <p className="mb-4">
            The program extends financial support to farmer cooperatives and associations 
            (FCAs) and local government units (LGUs) in the financing of various activities aimed at building 
            capacities.
            </p>
          </div>
          <a className="btn-outline-reg" href="/thirdone">
            Details
          </a>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-2.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Farmers Scientist Training Program</h5>
            <p className="mb-4">
            Implemented by the Agricultural Training Institute
            in cooperation with the local government and non-government organizations. 
            It intends to provide the capability for farmers to partake in research and 
            development activities.
            </p>
          </div>
          <a className="btn-outline-reg" href="/thirdtwo">
            Details
          </a>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-3.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Climate-Smart Agriculture (CSA) Learning Platform</h5>
            <p className="mb-4">
            An online platform developed by the Philippine Rice Research Institute (PhilRice) 
            in collaboration with other partners, this platform offers farmers an access to a wide 
            range of resources on climate-smart agriculture (CSA) practices.
            </p>
          </div>
          <a className="btn-outline-reg" href="/thirdthree">
            Details
          </a>
        </div>

        <a className="btn-solid-reg mb-12" href="/government">
        Back
        </a>

        {/* end of card */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of cards-1 */}
    {/* end of features */}
  </>
);

export default Third;