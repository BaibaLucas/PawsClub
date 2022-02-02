/* Package imports */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

/* Local imports */
import sylvanas from '../../assets/images/sylvanas.jpg';
// Components

const Newsdetails = () => {
  return(
    <div className='newsdetails'>
      <div className='container'>
        <div className='container__details'>
          <div className='container__details__back'>
            <div className='container__details__back__logo'><BiArrowBack size={30} /></div>
            <div className='container__details__back__content'>Back</div>
          </div>
          <img className='container__details__image' alt='news illust' src={sylvanas} />
          <div className='container__details__date'> Mer. 2 févr.</div>
          <div className='container__details__title'>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className='container__details__content'>
            Nam sit amet eros sit amet arcu cursus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mattis turpis ac felis pellentesque, vitae ullamcorper purus gravida. Quisque sed fermentum justo, et varius odio. Nunc sed vehicula neque. Nam imperdiet nibh ipsum, in tempor lacus tristique id. Sed dui velit, tincidunt at sollicitudin in, placerat id dolor. Nam nec odio vestibulum, congue orci non, dignissim turpis. Donec ante quam, convallis quis tempus at, volutpat at ligula. Curabitur gravida odio lorem, ut consequat urna iaculis a. Ut mattis odio ut mi volutpat luctus.
          </div>
          <div className='container__details__author'>
            Reape
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsdetails;