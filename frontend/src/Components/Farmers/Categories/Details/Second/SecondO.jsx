import React from 'react';
const SecondO = () => (
<>
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
            <li>
               <a className="nav-link page-scroll" href="/First">
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
    <h2 className="mb-4">WHAT IS THE NRP?</h2>
    <p className="mb-6">
    The National Rice Program (NRP) in the Philippines is a government initiative aimed at improving rice farming, increasing productivity, and ensuring food security. The 2023 national budget allocates doubled funding for the NRP to enhance the lives of Filipino rice farmers and strengthen the overall contribution of the rice sector to the country's agriculture and economy.
    </p>
    {/* Add more content as needed */}
  </div>

  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4">WHAT IS IT ABOUT?</h2>
    <p className="mb-6">
    The article discusses the allocation of P43 billion for 2023 Agriculture Priority Programs by the Department of Budget and Management (DBM) under the Marcos Jr. administration. The funding is aimed at invigorating agriculture, making it a key driver for growth and employment.    </p>
    {/* Add more content as needed */}
  </div>
  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4">When does the allocation take place?</h2>
    <p className="mb-6">
    The allocation is part of the 2023 General Appropriations Act (GAA) and reflects the commitment of the Marcos Jr. administration to prioritize agriculture.
     </p>
    {/* Add more content as needed */}
  </div>
  <div className="column1">
    {/* Content for the second column */}
    <h2 className="mb-4"> Who is involved in implementing the programs? </h2>
    <p className="mb-6">
    The Department of Agriculture (DA) is implementing the programs, including the National Rice Program, National Corn Program, National Livestock Program, National High-Value Crops Development Program, Promotion and Development of Organic Agriculture Program, and National Urban and Peri-Urban Agriculture Program. DBM Secretary Amenah F. Pangandaman emphasizes President Ferdinand R. Marcos Jr.'s focus on agriculture.
      </p>
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
</>
);

export default SecondO;
