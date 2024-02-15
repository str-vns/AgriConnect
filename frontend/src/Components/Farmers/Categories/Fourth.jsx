import React from 'react';

const Fourth = () => (
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
            <h5 className="card-title">Platform Integration</h5>
            <p className="mb-4">
              You sales force can use the app on any smartphone platform without
              compatibility issues
            </p>
          </div>
          <a className="btn-outline-reg" href="/fourthone">
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
            <h5 className="card-title">Easy On Resources</h5>
            <p className="mb-4">
              Works smoothly even on older generation hardware due to our
              optimization efforts
            </p>
          </div>
          <a className="btn-outline-reg" href="/fourthtwo">
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
            <h5 className="card-title">Great Performance</h5>
            <p className="mb-4">
              Optimized code and innovative technology insure no delays and
              ultra-fast responsiveness
            </p>
          </div>
          <a className="btn-outline-reg" href="/fourththree">
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

export default Fourth;