import React from 'react';
import {
  MDBCard,  
  MDBCardImage,
} from 'mdb-react-ui-kit';

import imagen1  from '../img/2.png';

export default function Banner () {
    return (
        <div>
          <MDBCard background='dark' className='text-white' >
      <MDBCardImage overlay src={imagen1} alt=''  />
      <a href='Login2' className='btn btn-info'>Registrate</a>
    </MDBCard>
      </div>
    )
}