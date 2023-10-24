import React from 'react';

export const Card = () => {
    return (
        <section className='card'>
            <div className="container">
            <h1>Skills</h1>
            <div className="row h-100 big-container">
                <div className="col-md-4 my-auto">
                <div className="card element-container">
            <div className="card-body d-flex">
                <div className="card stat" id="stat1">10%</div>  
                <div className="stat-name">
                    <hr className="color1" />
                    <h5 className="card-title">Javascript</h5>
                </div>	
            </div>
            </div>
                </div>
                <div className="col-md-4 my-auto">
                <div clasclassNames="card element-container">
            <div className="card-body d-flex">
                <div className="card stat" id="stat2">20%</div>  
                    <div className="stat-name">
                <hr className="color2" />
                <h5 className="card-title">React</h5>
                </div>
            </div>
            </div>
                </div>
                <div className="col-md-4 my-auto">
                <div className="card element-container">
            <div className="card-body d-flex">
                <div className="card stat" id="stat3">12%</div>  
                    <div className="stat-name">
                <hr className="color3" />
                <h5 className="card-title">Html</h5>
                </div>
            </div>
            </div>
                </div>
            </div>
            </div>
        </section>
    )
  }