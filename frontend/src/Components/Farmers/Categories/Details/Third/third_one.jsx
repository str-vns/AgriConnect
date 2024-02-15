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
    {/* Navigation */}
    <nav className="navbar fixed-top">
      <div className="container flex flex-wrap items-center justify-between sm:px-4 lg:flex-nowrap lg:px-8">
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
        </div>{" "}
        {/* end of navbar-collapse */}
      </div>{" "}
      {/* end of container */}
    </nav>{" "}
    {/* end of navbar */}
    {/* end of navigation */}
    {/* Header */}
    <header className="ex-header bg-gray text-center py-12">
      <h1 className="xl:ml-24 text-6xl">Agricultural Competitiveness Enhancement Fund (ACEF)</h1>
    </header>{" "}
    {/* end of ex-header */}
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
    {/* end of header */}
    {/* Content */}
    <div className="container px-4 sm:px-8">
      <section className="py-1">
        <h2 className="text-3xl font-bold mb-4">The Agricultural Competitiveness Enhancement Fund (ACEF)</h2>
        <p className="mb-4 text-xl">
          The primary objective of the ACEF Lending Program is to offer essential credit to farmers, fisherfolk, their cooperatives and associations, as well as micro and small enterprises, with the aim of boosting their productivity. Additionally, the program seeks to establish an agricultural lending initiative that improves the competitiveness of the intended beneficiaries or sectors, particularly small-scale farmers and fisherfolk.
        </p>
        <h3 className="text-2xl font-bold mb-2">Primary Objectives:</h3>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>Allocate essential financial resources to enhance productivity.</li>
          <li>Create an agricultural lending program that improves competitiveness.</li>
        </ul>
      </section>
      <section className="py-1">
        <h2 className="text-2xl font-bold mb-4">Who can avail?</h2>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>Independent agriculturalists and fishermen</li>
          <li>Micro and small enterprises</li>
          <li>Agricultural and aquatic industry cooperatives and associations</li>
        </ul>
      </section>

      <section className="py-1">
        <h2 className="text-2xl font-bold mb-4">Permissible projects/loan purposes</h2>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>Acquisition of agricultural supplies, machinery, or infrastructure upgrades for the farm</li>
          <li>Procurement or establishment of agricultural machinery, equipment, and facilities for production, post-production, and processing purposes.</li>
        </ul>
      </section>

      <section className="py-1">
        <h2 className="text-2xl font-bold mb-4">Maximum loanable amount</h2>
        <p className="mb-4 text-xl">
          The loanable amount is a maximum of 90% of the total project cost, with the following limitations:
        </p>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>The amount of financial assistance provided is ₱1 Million for each individual farmer or fisherfolk, and ₱5 Million for each project loan granted to farmers and fisherfolk cooperatives, associations, and micro and small enterprises (MSE).</li>
        </ul>
      </section>

      <section className="py-1">
        <h2 className="text-2xl font-bold mb-4">Rate of interest</h2>
        <p className="mb-4 text-xl">
          2% annually
        </p>
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>Collateral: Production</li>
          <li>Combination of the following: Assignment of insurance proceeds, if applicable; and Assignment of expected produce</li>
          <li>Acquisition of fixed asset</li>
          <li>Any or combination of the following: Chattel mortgage on object of financing Assignment of expected produce PCIC Insurance proceeds</li>
        </ul>
      </section>

      <a className="btn-solid-reg mb-12" href="/third">
        Back
        </a>

    </div>
    {/* end of container */}
    {/* end of content */}
    {/* Scripts */}
    {/* jQuery for JavaScript plugins */}
    {/* jQuery Easing for smooth scrolling between anchors */}
    {/* Swiper for image and text sliders */}
    {/* Magnific Popup for lightboxes */}
    {/* Custom scripts */}
  </>
);

export default THIRDONE;