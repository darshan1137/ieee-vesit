import React from 'react';
import magazinesData from './MagazinesData';

const Magazines = () => {
  return (
    <div className="row">
      <div className="main-container">
        <p className="ieee_title">Magazines</p>
        {magazinesData.map((magazine, index) => (
          <div className="container1" key={index}>
            <div className="card">
              <div className="imgBx">
                <img src={magazine.image} alt={magazine.title} />
              </div>
              <div className="contentBx">
                <h2>{magazine.title}</h2>
                <div className="size">
                  <h3>{magazine.description}</h3>
                </div>
                <div className="color"></div>
                <a href={magazine.downloadLink} target="_blank" rel="noopener noreferrer">Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Magazines;
