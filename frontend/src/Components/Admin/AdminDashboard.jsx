import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from "../../Utilitys/helpers";
import MetaData from "../Layout/MetaData";
import Header from '../Layout/Header';

const AdminDashboard = () => {
  const user = getUser();

  return (
    <Fragment>
      <MetaData title={"ADMIN DASHBOARD"} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="preconnect" href="https://fonts.bunny.net" />
      <link
        href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <Header/>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main" style={{ background: '#F8FFA2' }}>
        {/* Your main content */}
      </main>
    </Fragment>
  );
};

export default AdminDashboard;