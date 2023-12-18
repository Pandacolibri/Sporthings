import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prueba from '../componentes/Prueba';
import Carrusel from '../componentes/Carrusel';
import Texto from '../componentes/Texto';
import Banner from '../componentes/Banner';
import Footer from '../componentes/Footer';
import Sard from '../componentes/Tarjeta/Sard';

const Home = () => {
  return (
    <div className='Home-container'>
        <header>
          
            <Prueba />
        </header>
        <div>
                
                <body>
                      <Banner />
                    <div>
                     <Texto /> 
                    </div>
                    <div className='m-5'>
                      <Sard />
                     
                    </div>
                    <div>
                    <Carrusel />
                    </div>
                </body>
                <footer>
                  <Footer />
                </footer>
            </div>
    </div>

         
  )
}

export default Home