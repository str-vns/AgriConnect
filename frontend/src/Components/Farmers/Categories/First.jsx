import React from 'react';

const First = () => (
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
 

 
    <div id="features" className="cards-1">
      <div className="container px-4 sm:px-8 xl:px-4">
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-1.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Kapital Access for Young Agripreneurs (KAYA)</h5>
            <p className="mb-4">
            KAYA program is part of the programs of the Department of Agriculture for the youth. It will help in financing the capital requirement of a start-up and even existing agri-based projects of young entrepreneurs and agri-fishery graduates.

            </p>
          </div>
          <a className="btn-outline-reg" href="/one">
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
            <h5 className="card-title">Agri-Negosyo Program (ANYO)</h5>
            <p className="mb-4">
            The loan program of ANYO provides loans to Agriculture MSEs that may be used in the financing of their capital requirement, operations or fixed asset acquisition. Iit also provides capacity building where borrowers may have technical assistance and training in improving their business.

            </p>
          </div>
          <a className="btn-outline-reg" href="/two">
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
            <h5 className="card-title">Agrarian Production Credit Program (APCP)</h5>
            <p className="mb-4">
            The Agrarian Production Credit Program (APCP) is a joint effort by the Department of Agriculture, 
            the Department of Agrarian Reform, and LandBank of the Philippines. It assists Agrarian Reform Beneficiaries (ARBs) whose groups are not yet eligible for LandBank loans.
          
            </p>
          </div>
          <a className="btn-outline-reg" href="/three">
            Details
          </a>
        </div>
        {/* end of card */}

      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of cards-1 */}
    {/* end of features */}
  </>
);

export default First;