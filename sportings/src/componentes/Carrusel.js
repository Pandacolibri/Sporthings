import Carousel from 'react-bootstrap/Carousel';
import imagen2 from '../img/3.png';
import imagen1 from '../img/1.png';
import imagen3 from '../img/5.png';

export default function Carrusel(){
 return (
    <div>
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "src('imagen1')", height: 550, width: 1500 }}
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>BIENVENIDOS A SPORTHINGS</h5>
          <p>TIENDA DONDE PODRAS ADQUIRIR GRAN VARIEDAD DE PRODUCTOS DEPORTIVOS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "src('imagen1')", height: 550, width: 1500 }}
          src={imagen2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "src('imagen1')", height: 550, width: 1500 }}
          src={imagen3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
 )
}
