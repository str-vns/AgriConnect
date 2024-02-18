import React from 'react';
import Header from '../Layout/Header';
import { Dropdown } from 'react-bootstrap';
const Government = () => (
<>
<meta charSet="utf-8" />
<meta
   name="viewport"
   content="width=device-width, initial-scale=1, shrink-to-fit=no"
   />
<meta property="og:site_name" content="" />
<meta property="og:site" content="" />
<meta property="og:title" content="" />
{" "}
<meta property="og:description" content="" />
{" "}
<meta property="og:image" content="" />
<meta property="og:url" content="" />
{" "}
<meta name="twitter:card" content="summary_large_image" />
{" "}
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
               <a className="nav-link page-scroll" href="#features">
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


<div className="py-24">
   <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
         <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
               className="inline"
               src="farmers/images/8.png"
               alt="alternative"
               />
         </div>
      </div>
      {" "}
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
      </div>
      {" "}
      {/* end of col */}
   </div>
   {" "}
   {/* end of container */}
</div>
<div className="py-1">
   <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
         <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
               className="inline"
               src="farmers/images/9.png"
               alt="alternative"
               />
         </div>
      </div>
      {" "}
      {/* end of col */}
      <div className="lg:col-span-5">
         <div className="xl:mt-12">
            <h2 className="mb-6">2. Agricultural and Rural Development Programs</h2>
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
      </div>
      {" "}
      {/* end of col */}
   </div>
   {" "}
   {/* end of container */}
</div>
<div className="py-1">
   <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
         <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
               className="inline"
               src="farmers/images/10.png"
               alt="alternative"
               />
         </div>
      </div>
      {" "}
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
      </div>
      {" "}
      {/* end of col */}
   </div>
   {" "}
   {/* end of container */}
</div>
<div className="py-1">
   <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
         <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
               className="inline"
               src="farmers/images/11.png"
               alt="alternative"
               />
         </div>
      </div>
      {" "}
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
      </div>
      {" "}
      {/* end of col */}
   </div>
   {" "}
   {/* end of container */}
</div>

<>
<div className="footer">
   <div className="container px-4 sm:px-8">
      <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
      {" "}
      </h4>
   </div>
   {" "}
   {/* end of container */}
</div>
{" "}
{/* end of footer */}
{/* end of footer */}
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
</>
</>
);
export default Government;