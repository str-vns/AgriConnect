import React from 'react';
import Header from '../../../../Layout/Header';
const FOURTHTHREE = () => (
  <>
  <section className="flex h-screen">
      
      <Header />
      <section className="overflow-y-scroll w-full">
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
          </ul>
        </div>
      </div>
    </nav>
    {/* ACEF Lending Program Details */}
    <div className="ex-basic-1 py-12">
      <div className="container px-4 sm:px-8">
        <h2>Agroforestry Programs </h2>
        <div className="row3">
          <ul>
            <li>Integrates trees into farms for shade, improved soil fertility, and additional income through fruit trees, timber, and other products, promoting sustainable land management.</li>
          </ul>
        </div>
        <div className="row3">
          <div className="column3">
            <h3>Who can participate?</h3>
            <ul>
              <li>All farmers, regardless of farm size or type of agriculture.</li>
            </ul>
          </div>
          <div className="column3">
            <h3>What is agroforestry?</h3>
              <ul>
                <li>Integrating trees into your farm alongside crops or livestock.</li>
                <li>This can include fruit trees, timber trees, or nitrogen-fixing trees.</li>
              </ul>
          </div>
        </div>
        <div className="row3">
          <div className="column3">
            <h3>Benefits for you:</h3>
            <ul>
            <li><span style={{ fontWeight: 'bold' }}>Diversified income:</span> Earn extra income from fruits, timber, or other tree products.</li>
            <li><span style={{ fontWeight: 'bold' }}>Improved soil fertility:</span> Trees fix nitrogen and enrich the soil for your crops.</li>
            <li><span style={{ fontWeight: 'bold' }}>Shade and shelter:</span> Protect your crops from the sun and harsh weather.</li>
            <li><span style={{ fontWeight: 'bold' }}>Habitat and biodiversity:</span> Attract beneficial insects and birds to your farm.</li>
            </ul>
          </div>
          <div className="column3">
            <h3>Remember:</h3>
            <ul>
              <li>Choose the right trees for your soil, climate, and needs.</li>
              <li>Plan your layout carefully to ensure healthy growth of both trees and crops.</li>
              <li>Agroforestry is a long-term investment, but the benefits can last for generations!</li>
            </ul>
          </div>
        </div>
        <div className="row3"><ul><h3>Trees for Your Farm, Income for Your Future!</h3></ul></div>
        <a className="btn-outline-reg" href="/fourth"> Back </a>
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
    </section>
    </section>
  </>
);

export default FOURTHTHREE;