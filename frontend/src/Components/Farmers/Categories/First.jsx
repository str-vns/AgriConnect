import React from 'react';
import Header from '../../Layout/Header';
const First = () => (
  <>
   <section className="flex h-screen">
      
      <Header />
      <section className="overflow-y-scroll w-full">
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
 
    <style>
      {`
        body {
            background: linear-gradient(rgb(241, 221, 128), rgba(255, 255, 255, 1));
          margin: 0; /* Reset default margin to ensure full coverage */
        }
        
      `}
    </style>
    <nav className="navbar ">
   <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
      <a
         className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll"
         href="index.html">AgriConnect</a>
      <a
         className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
         href="index.html"
         >
      <img src="farmers/images/logo2.png" alt="alternative" className="h-8" />
      </a>
      <button
         className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
         type="button"
         data-toggle="offcanvas"
         >
      <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle" />
      </button>
      <div
         className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
         id="navbarsExampleDefault"
         >
         <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            <li>
               <a className="nav-link page-scroll active" href="/government">
               Home 
               </a>
            </li>
            <li>
               <a className="nav-link page-scroll" href="/categories">
               Categories
               </a>
            </li>
            <li>
               <a className="nav-link page-scroll" href="#details">
               Details
               </a>
            </li>
            <li>
               <a className="nav-link page-scroll" href="#pricing">
               Pricing
               </a>
            </li>
         </ul>
      </div>
   </div>
</nav>

    <div id="features" className="cards-1">
      <div className="container px-4 sm:px-8 xl:px-4">
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/icon-1-1.png" alt="alternative" />
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
            <img src="farmers/images/icon-1-2.png" alt="alternative" />
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
            <img src="farmers/images/icon-1-3.png" alt="alternative" />
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
        <a className="btn-outline-reg" href="/categories">
        Back
        </a>
        {/* end of card */}

      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of cards-1 */}
    {/* end of features */}
{/* Copyright */}
<div className="copyright">
  <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
    <ul className="mb-4 list-unstyled p-small">
      <li className="mb-2"><a href="details.html">Details</a></li>
      <li className="mb-2"><a href="terms.html">Terms &amp; Conditions</a></li>
      <li className="mb-2"><a href="privacy.html">Privacy Policy</a></li>
    </ul>
    <p className="pb-2 p-small statement">
      © {new Date().getFullYear()} <a href="#your-link" className="no-underline">AgriConnect</a>
    </p>
    <p className="pb-2 p-small statement">Designed and Developed by AgriConnect
    </p>
  </div>
  {/* end of container */}
</div>


{" "}
{/* end of copyright */}
{/* end of copyright */}
</section>
</section>
  </>
  
);

export default First;