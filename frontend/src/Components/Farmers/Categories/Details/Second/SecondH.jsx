import React from 'react';
const SecondH = () => (
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

  {/* end of ex-header */}
  {/* end of header */}
  {/* Basic */}
  <div className="ex-basic-1 py-12">
    <div className="container px-4 sm:px-8">
      <img
        className="inline mt-12 mb-4"
        src="farmers/images/article-details-large.jpg"
        alt="alternative"
      />
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  {/* Basic */}
  <div className="ex-basic-1 pt-4">
    <div className="container px-4 sm:px-8 xl:px-32">
      <p className="mb-4">
        {" "}
        Are you looking for ways to grow the user base for your mobile
        application? Then you have arrived at the right place. Here you will
        find a curated collection of landing page HTML templates that will help
        you build an engaging online presentation for your mobile app and
        convince visitors to become loyal paying users.
      </p>
      <p className="mb-12">
        {" "}
        All templates in the roundup are premium which means you need to pay for
        them but we're talking small amounts of money which won't break your
        bank account but will help authors make a living. In return you get a
        high quality, updated item together with high quality and very prompt
        technical support.
      </p>
      <h2 className="mb-4">Advantages of working with this template</h2>
      <p className="mb-4">
        Besides buying the template you need some basic web skills in order to
        customize it. Nothing too fancy HTML/CSS will do just fine and a little
        bit of image editing. You can always hire a web designer to help with
        the customization work while you provide the template and the content
        that is the most important.
      </p>
      <p className="mb-6">
        Riga is a landing page HTML template made with Tailwind CSS to help you
        showcase your mobile app online and persuade visitors to download it
        from the app stores. The author used Tailwind CSS to build the template
        and integrated a nice animated navigation that slides from outside the
        screen.

      </p>
      
    </div>{" "}
    {/* end of container */}
  </div>{" "}
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

export default SecondH;
