import React from 'react';
import Header from '../Layout/Header';
import './Analytics.css';

const Analytics = () => (
  <section className="flex h-screen">
    <Header className="fixed-header" />
    <section className="overflow-y-scroll w-full">
      <div className="container">
        <header>
          <h1>Top Sold Products</h1>
        </header>
        <div className="wrapper">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Crops</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rank">1</td>
                <td className="team">Denorado</td>
                <td className="points">24</td>
              </tr>
              <tr>
                <td className="rank">2</td>
                <td className="team">Pandan</td>
                <td className="points">25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </section>
);

export default Analytics;
