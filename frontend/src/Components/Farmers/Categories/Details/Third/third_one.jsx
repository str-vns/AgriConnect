import React from 'react';

const THIRDONE = () => (
  <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn */}
    <meta property="og:site_name" content="" /> {/* website name */}
    <meta property="og:site" content="" /> {/* website link */}
    <meta property="og:title" content="" />{" "} {/* title shown in the actual shared post */}
    <meta property="og:description" content="" />{" "} {/* description shown in the actual shared post */}
    <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
    <meta property="og:url" content="" />{" "} {/* where do you want your post to link to */}
    <meta name="twitter:card" content="summary_large_image" />{" "} {/* to have large image post format in Twitter */}
    {/* Webpage Title */}
    <title>Details</title>
    {/* Styles */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link href="farmers/css/fontawesome-all.css" rel="stylesheet" />
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link href="farmers/css/swiper.css" rel="stylesheet" />
    <link href="farmers/css/magnific-popup.css" rel="stylesheet" />
    <link href="farmers/css/styles.css" rel="stylesheet" />
    {/* Favicon  */}
    <link rel="icon" href="farmers/images/favicon.png" />
    <style>
      {`
        body {
          background: linear-gradient(rgb(241, 221, 128), rgba(255, 255, 255, 1));
          margin: 0; /* Reset default margin to ensure full coverage */
        }
        .row3 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .column3 {
          width: 48%; /* Adjust the width as needed */
        }
        .column3 ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }
        .column3 h3 {
          margin-bottom: 1rem; /* Increase spacing below each heading */
        }
        .column3 ul li {
          margin-bottom: 0.5rem; /* Increase spacing between list items */
        }
      `}
    </style>
    <nav className="navbar ">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">AgriConnect</a>
        <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
          <img src="farmers/images/logo2.png" alt="alternative" className="h-8" />
        </a>
        <button className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
          <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle" />
        </button>
        <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
          <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            <li>
              <a className="nav-link page-scroll active" href="#header">Home <span className="sr-only">(current)</span></a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="/categories">Categories</a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#details">Details</a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* ACEF Lending Program Details */}
    <div className="ex-basic-1 py-12">
      <div className="container px-4 sm:px-8">
        <h2>Agricultural Productivity Competitiveness Enhancement Fund</h2>
        <div className="row3">
          <ul>
          <li>The Agricultural Productivity Competitiveness Enhancement Fund (ACEF) serves as a critical 
            pillar of support for Filipino farmers, aiming to enhance their agricultural output and market 
            competitiveness. Established in 2019, this initiative by the Department of Agriculture offers 
            accessible credit solutions tailored to meet the specific needs of diverse agricultural stakeholders.</li>
          </ul>
        </div>
        <div className="row3">
          <div className="column3">
            <h3>Who can get a loan?</h3>
            <ul>
              <li>Farmers who own less than 5 hectares of land or raise small amounts of livestock/fish</li>
              <li>Groups of farmers working together (cooperatives/associations)</li>
              <li>Small businesses involved in agriculture (like selling seeds or processing food)</li>
            </ul>
          </div>
          <div className="column3">
            <h3>What can you use the loan for?</h3>
            <ul>
              <li>Buying things you need for your farm, like seeds, fertilizer, or tools</li>
              <li>Making improvements to your farm, like fixing irrigation systems or building sheds</li>
              <li>Buying equipment to process your crops or livestock products, like a rice mill or fishpond aerator</li>
            </ul>
          </div>
        </div>
        <div className="row3">
          <div className="column3">
            <h3>How much can you borrow?</h3>
            <ul>
              <li>Up to ₱1 million for individual farmers</li>
              <li>Up to ₱5 million for groups of farmers or small businesses</li>
            </ul>
          </div>
          <div className="column3">
            <h3>What are the benefits?</h3>
            <ul>
              <li>Low interest rate of 2% per year</li>
              <li>No need to pay fees to apply or end the loan early (for individual farmers)</li>
              <li>Help available to write a good plan for your farm or business</li>
            </ul>
          </div>
        </div>
        <div className="row3">
          <div className="column3">
            <h3>Things to remember:</h3>
            <ul>
              <li>You need to have a good plan for how you will use the money and pay it back.</li>
              <li>You can't have any other loans for the same project.</li>
              <li>You'll need to show proof that you can sell your crops or livestock to make money.</li>
            </ul>
          </div>
        </div>
        <a className="btn-outline-reg" href="/third"> Back </a>
      </div>
    </div>
    {/* end of ACEF Lending Program Details */}
    <div className="copyright">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
        <ul className="mb-4 list-unstyled p-small">
          <li className="mb-2"><a href="details.html">Details</a></li>
          <li className="mb-2"><a href="terms.html">Terms &amp; Conditions</a></li>
          <li className="mb-2"><a href="privacy.html">Privacy Policy</a></li>
        </ul>
        <p className="pb- p-small statement">© {new Date().getFullYear()} <a href="#your-link" className="no-underline">AgriConnect</a></p>
        <p className="pb-2 p-small statement">Designed and Developed by AgriConnect</p>
      </div>
      {/* end of container */}
    </div>
  </>
);

export default THIRDONE;