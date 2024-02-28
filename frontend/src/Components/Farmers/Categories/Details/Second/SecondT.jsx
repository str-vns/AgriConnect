import React from 'react';
import Header from '../../../../Layout/Header';
const SecondT = () => (
<>
<section className="flex h-screen">
      
      <Header />
      <section className="overflow-y-scroll w-full">
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <meta property="og:site_name" content="" /> 
  <meta property="og:site" content="" /> 
  <meta property="og:title" content="" />{" "}
  <meta property="og:description" content="" />{" "}
  <meta property="og:image" content="" /> 
  <meta property="og:url" content="" />{" "}
  <meta name="twitter:card" content="summary_large_image" />{" "}
  <title>Details</title>

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
    <div className="container px-4 sm:px-8">
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  {/* Basic */}
  <div className="container1 px-4 sm:px-8 xl:px-32">
  <div className="column1">
    {/* Content for the first column */}
    <h2 className="mb-4">WHAT IS THE ABOUT?</h2>
    <p className="mb-6">
    The article discusses the approval of the Philippine Rural Development Project (PRDP) Scale-Up, highlighting its goal to enhance the agricultural sector by focusing on the augmentation of farmers' and fisherfolks' access to markets, increasing their incomes, and promoting competitiveness, sustainability, and technology adoption.
    </p>
    {/* Add more content as needed */}
  </div>

  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4">COMPONENTS OF THE PROJECT</h2>
    <p className="mb-6">
      <ul>
        <li><b>I-PLAN Component: </b>Involves strategic planning on national and local levels, aligning with the National Agriculture and Fisheries Modernization and Industrialization Plan (NAFMIP).</li>
        <li><b>I-REAP Component: </b>Supports small to large-scale investments and enterprise development to increase productivity and improve market access.</li>
        <li><b>I-SUPPORT Component: </b>Ensures coordinated approaches and strategies through effective project management, oversight, capacity building, and technical assistance.</li>
        <li><b>CERC Component: </b>Addresses emergencies and crises, providing rapid access to financing for disaster response.</li>
      </ul>
   </p>
    {/* Add more content as needed */}
  </div>
  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4">FUNDING AND APPROVAL</h2>
    <p className="mb-6">
      <ul>
        <li>    The World Bank Board is expected to approve the project on June 29, with a loan signing in July.</li>
        <li>The total project cost is P45.01 billion, with funding from official development assistance (ODA) loans, the national government, and local government units. </li>
     <li>Apart from PRDP Scale-Up, the DA secured approval for other projects, including Adapting Philippine Agriculture to Climate Change (APA), Philippine Fisheries and Coastal Resiliency Project (FishCoRe), and Mindanao Inclusive Agriculture Development Project (MIADP).</li>
      </ul>
      </p>
      
    {/* Add more content as needed */}
  </div>
  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4">SCOPE OF THE PROJECT</h2>
    <p className="mb-6">
    The project aims to expand its coverage in 82 provinces nationwide, emphasizing a broad geographical focus to benefit Filipino agricultural workers and consumers.      </p>
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
export default SecondT;
