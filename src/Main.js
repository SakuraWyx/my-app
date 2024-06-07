import React from 'react';
import './App.css';

function Main(){
    return(
        <main className='main'>
          <section >
             <h1 >Little Lemon Resturant</h1>
             <h2 >Chicago</h2>
             <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus pharetra feugiat. Vivamus interdum, mauris ut volutpat rhoncus, lacus enim facilisis tellus, at tempus massa sem ac risus. Ut blandit lobortis purus, pretium aliquam justo scelerisque vel. In sollicitudin sapien tellus, in dapibus elit gravida non. Nam consequat pharetra lorem. Vestibulum ac est sagittis, cursus dui lacinia, semper odio. Integer rutrum lacus sed quam congue volutpat. Morbi eget varius urna, a eleifend ante. Quisque volutpat tincidunt malesuada. Morbi in consectetur ipsum, non efficitur quam. Ut ultrices erat elit.
             </p>
             <button>Reservation</button>
          </section>
          <img src='littlelemon.png' alt='restaurant pic' />

        </main>
    )
}

export default Main;