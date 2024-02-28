import React from 'react';
import Header from '../../../../Layout/Header';
const Three = () => (

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
    <meta property="og:title" content="" />{" "}
    {/* title shown in the actual shared post */}
    <meta property="og:description" content="" />{" "}
    {/* description shown in the actual shared post */}
    <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
    <meta property="og:url" content="" />{" "}
    {/* where do you want your post to link to */}
    <meta name="twitter:card" content="summary_large_image" />{" "}
    {/* to have large image post format in Twitter */}
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
                 <a className="nav-link page-scroll active" href="#header">
                 Home <span className="sr-only">(current)</span>
                 </a>
              </li>
              <li>
                 <a className="nav-link page-scroll" href="/categories">
                 Categories
                 </a>
              </li>
             
           </ul>
        </div>
     </div>
  </nav>
  
    {/* end of ex-header */}
    {/* end of header */}
    {/* Basic */}
    <div className="ex-basic-1 py-12">
      {/* end of container */}
    </div>{" "}
    {/* end of ex-basic-1 */}
    {/* end of basic */}
    {/* Basic */}
    <div className="container1 px-4 sm:px-8 xl:px-32">
    <div className="column1">
      {/* Content for the first column */}
      <h2 className="mb-4">What is Agrarian Production Credit Program (APCP)</h2>
      <p className="mb-6">
      The Agrarian Production Credit Program (APCP) is a partnership between the Department of Agriculture (DA), the Department of Agrarian Reform (DAR), and the LandBank of the Philippines. It supports Agrarian Reform Beneficiaries (ARBs) through loans distributed by Agrarian Reform Beneficiary Organizations (ARBOs) for agricultural production projects. To finance the requirements for agriculture and fisheries, agri-enterprise and/or livelihood projects     </p>
      {/* Add more content as needed */}
    </div>
  
    <div className="column1">
      {/* Content for the second column */}
      <h2 className="mb-4">WHO ARE ELIGIBLE?</h2>
      <p className="mb-6">
        <ul>
          <li>1. Agrarian Reform Beneficiary Organizations (ARBOs)</li>
          <li>2. Farmer Organizations or People's Organizations with ARB or ARB household members</li>
          <li>3. Other conduits (Cooperatives, NGOs, and rural banks only) with ARB or ARB household members, or APCP ineligible ARBOs as clients</li>
      </ul>
      </p>
      {/* Add more content as needed */}
    </div>
    <div className="column1">
      {/* Content for the second column */}
      <h2 className="mb-4">LOANS DETAILS</h2>
      <p className="mb-6">
          <ul>
            <li>1. <b>INCENTIVE: </b>Interest rebate of 2% per annum based on the principal amount paid</li>
            <li>2. <b>INTEREST FEE: </b>The short-term loan interest rate is 8.5% per annum, while the term loan interest rate is 9.5% per annum.</li>
            <li>3. <b>PENALTY ON LATE PAYMENT: </b>3% per annum</li>
        </ul>     
       </p>
      {/* Add more content as needed */}
    </div>
    <div className="column1">
      {/* Content for the second column */}
      <h2 className="mb-4">TERM OF LOAN</h2>
      <p className="mb-6">
      <ul>
            <li>1. Loan term based on project cash flow, maximum 7 years</li>
            <li>2. Grace period up to 3 years on the principal</li>
            <li>3. Semi-annual/annual crops (e.g., rice, corn) with up to 1-year cycle</li>
            <li>4. Plantation crops (e.g., coffee, cacao, coconut) with a max term of 7 years</li>
        </ul>            </p>
      {/* Add more content as needed */}
    </div>
  </div>
    <div className="copyright">
    <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
      <ul className="mb-4 list-unstyled p-small">
        <li className="mb-2"><a href="details.html">Details</a></li>
        <li className="mb-2"><a href="terms.html">Terms &amp; Conditions</a></li>
        <li className="mb-2"><a href="privacy.html">Privacy Policy</a></li>
      </ul>
      <p className="pb- p-small statement">
        © {new Date().getFullYear()} <a href="#your-link" className="no-underline">AgriConnect</a>
      </p>
      <p className="pb-2 p-small statement">Designed and Developed by AgriConnect
      </p>
    </div>
    {/* end of container */}
  </div>
  </section>
</section>
  </>
  );

export default Three;
