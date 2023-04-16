import React from 'react';

export const Card = () => {
    return (
        <section className='card'>
            <div class="container">
            <h1>Skills</h1>
            <div class="row h-100 big-container">
                <div class="col-md-4 my-auto">
                <div class="card element-container">
            <div class="card-body d-flex">
                <div class="card stat" id="stat1">10%</div>  
                <div class="stat-name">
                    <hr class="color1" />
                    <h5 class="card-title">Javascript</h5>
                </div>	
            </div>
            </div>
                </div>
                <div class="col-md-4 my-auto">
                <div class="card element-container">
            <div class="card-body d-flex">
                <div class="card stat" id="stat2">20%</div>  
                    <div class="stat-name">
                <hr class="color2" />
                <h5 class="card-title">React</h5>
                </div>
            </div>
            </div>
                </div>
                <div class="col-md-4 my-auto">
                <div class="card element-container">
            <div class="card-body d-flex">
                <div class="card stat" id="stat3">12%</div>  
                    <div class="stat-name">
                <hr class="color3" />
                <h5 class="card-title">Html</h5>
                </div>
            </div>
            </div>
                </div>
            </div>
            </div>
        </section>
    )
  }