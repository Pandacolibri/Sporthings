import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css'
import tennis1 from '../../img/tennis1.png'
import descarga1 from '../../img/descarga (1).jpeg'
import descarga2 from '../../img/descarga (2).jpeg'
import imagen from '../../img/images (2).jpeg'


export default function Sard(){
    return(
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={tennis1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Tennis</MDBCardTitle>
            <MDBCardText>
            *Ideal para la rutina diaria de ejercicio!
            *Excelente calidad
            *Tu ropa se mantiene fresca.
            *Se amolda perfectamente al cuerpo.
            </MDBCardText>
          </MDBCardBody>
          <a href='Login2' className='btn btn-info'>Visualiza</a>
          <MDBCardFooter>
            <small className='text-muted'>Producto reciente</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={descarga1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Playera</MDBCardTitle>
            <MDBCardText>
              Material termico, ideal para el dia a dia, fibras altamente felibles que mantienen su figura incluso depues de varias lavadas
            </MDBCardText>
          </MDBCardBody>
          <a href='Login2' className='btn btn-info'>Visualiza</a>
          <MDBCardFooter>
            <small className='text-muted'>Producto reciente</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={imagen}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Pesas</MDBCardTitle>
            <MDBCardText>
             Tamaño perfecto para el desarrollo de musculatura en principiantes
            </MDBCardText>
          </MDBCardBody>
          <a href='Login2' className='btn btn-info'>Visualiza</a>
          <MDBCardFooter>
            <small className='text-muted'>Producto</small>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
        <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={descarga2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Raqueta de tennis</MDBCardTitle>
            <MDBCardText>
              Raqueta tipo inglesa con mango suave y fexible, malla resistente al desgaste.
            </MDBCardText>
          </MDBCardBody>
          <a href='Login2' className='btn btn-info'>Visualiza</a>
          <MDBCardFooter>
            <small className='text-muted'>Producto</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    )
}