import React from 'react';
import Header from '../Layout/Header';

const Government = () => (
  <>
    {/* Meta tags */}
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
    <title>AgriConnect</title>
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
    {/* Navigation */}
    <nav className="navbar fixed-top">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        <a
          className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll"
          href="farmers/index.html"
        >
          AgriConnect
        </a>
        {/* Image Logo */}
        {/* <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                    <img src="images/logo.svg" alt="alternative" class="h-8" />
                </a>
 */}
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
              <a className="nav-link page-scroll" href="#features">
                Features
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
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Drop
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item page-scroll" href="farmers/article.html">
                  Article Details
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item page-scroll" href="farmers/terms.html">
                  Terms Conditions
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item page-scroll" href="farmers/privacy.html">
                  Privacy Policy
                </a>
              </div>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#download">
                Download
              </a>
            </li>
          </ul>
          <span className="block lg:ml-3.5">
            <a className="no-underline" href="#your-link">
              <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5" />
            </a>
            <a className="no-underline" href="#your-link">
              <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200" />
            </a>
          </span>
        </div>{" "}
        {/* end of navbar-collapse */}
      </div>{" "}
      {/* end of container */}
    </nav>{" "}
    {/* end of navbar */}
    {/* end of navigation */}
    {/* Header */}
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
    >
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">AGRICULTURAL PROGRAM FOR FARMERS</h1>
          <p className="p-large mb-8">
            Discover programs tailored for farmers like yourself. Explore
            initiatives designed to meet the unique needs of agricultural
            professionals.
          </p>
          <a className="btn-solid-lg" href="#your-link">
            <i className="fab fa-apple" />
            Download
          </a>
          <a className="btn-solid-lg secondary" href="#your-link">
            <i className="fab fa-google-play" />
            Download
          </a>
        </div>
        <div className="xl:text-right">
          <img
            className="inline"
            src="farmers/images/header-smartphone.png"
            alt="alternative"
          />
        </div>
      </div>{" "}
      {/* end of container */}
    </header>{" "}
    {/* end of header */}
    {/* end of header */}
    {/* Features */}
    <div id="features" className="cards-1">
      <div className="container px-4 sm:px-8 xl:px-4">
        {/* Card */}
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
          <a className="btn-outline-reg" href="article.html">
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
          <a className="btn-outline-reg" href="article.html">
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
          <a className="btn-outline-reg" href="article.html">
            Details
          </a>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-4.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Multiple Languages</h5>
            <p className="mb-4">
              Choose from one of the 40 languages that come pre-installed and
              start selling smarter
            </p>
          </div>
          <a className="btn-outline-reg" href="article.html">
            Details
          </a>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-5.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Free Updates</h5>
            <p className="mb-4">
              Don't worry about future costs, pay once and receive all future
              updates at no extra cost
            </p>
          </div>
          <a className="btn-outline-reg" href="article.html">
            Details
          </a>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <div className="card-image">
            <img src="farmers/images/features-icon-6.svg" alt="alternative" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Community Support</h5>
            <p className="mb-4">
              Register the app and get acces to knowledge and ideas from the Pavo
              online community
            </p>
          </div>
          <a className="btn-outline-reg" href="article.html">
            Details
          </a>
        </div>
        {/* end of card */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of cards-1 */}
    {/* end of features */}
    {/* Details 2 */}
    <div className="py-24">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="mb-12 lg:mb-0 xl:mr-14">
            <img
              className="inline"
              src="farmers/images/details-2.jpg"
              alt="alternative"
            />
          </div>
        </div>{" "}
        {/* end of col */}
        <div className="lg:col-span-5">
          <div className="xl:mt-12">
            <h2 className="mb-6">Instant results for the marketing department</h2>
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
            <a
              className="btn-solid-reg popup-with-move-anim mr-1.5"
              href="#details-lightbox"
            >
              Lightbox
            </a>
            <a className="btn-outline-reg" href="article.html">
              Details
            </a>
          </div>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of container */}
    </div>
    {/* end of details 2 */}
    {/* Scripts */}
    {/* jQuery for JavaScript plugins */}
    {/* jQuery Easing for smooth scrolling between anchors */}
    {/* Swiper for image and text sliders */}
    {/* Magnific Popup for lightboxes */}
    {/* Custom scripts */}
  </>
);

export default Government;