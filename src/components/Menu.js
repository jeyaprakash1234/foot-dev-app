import React from 'react';

const menu = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
   
          <div className='col-6'>
            <div className='about__img'>
              <img src='/img/pizza.jpg' alt='pizza' />
            </div>
          </div>
          <div className='col-6 p-25'>
            <h3> The pizza Menu </h3>
            <h1> CHICAGO THIN CRUST</h1>
            <p>
              
              Investigationes demonstraverunt lectores legere me liusquod ii
              legunt saepius. Claritas est etiam processus dynaus,quise sequitur
              mutationem consuetudium lectorum.
            </p>

            <div className='about__btn'>
              <a href='/' className='btn btn-smart'>
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
