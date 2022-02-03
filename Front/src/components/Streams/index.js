/* Package imports */
import React from 'react';


/* Local imports */
import sylvanas from '../../assets/images/sylvanas.jpg';
import clawlogo from '../../assets/images/clawlogo.jpg';
import talent from '../../assets/images/talent.png';

// Components

const Streams = () => {
  return (
    <div className='streams'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>STREAM</h1>
          </div>
          <div className='container__presentation__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum nisi tortor, porta ornare turpis placerat sit amet.
          </div>
        </div>
        <div className='container__streambox'>
          <div className='container__streambox__card'>
            <img className='container__streambox__card__image' alt='stream illust' src={sylvanas}/>
            <div className='container__streambox__card__title'>
              Lorem ipsum dolor sit amet !
            </div>
          </div>
          <div className='container__streambox__card'>
            <img className='container__streambox__card__image' alt='stream illust' src={clawlogo}/>
            <div className='container__streambox__card__title'>
              Lorem ipsum dolor sit amet !
            </div>
          </div>
          <div className='container__streambox__card'>
            <img className='container__streambox__card__image' alt='stream illust' src={talent}/>
            <div className='container__streambox__card__title'>
              Lorem ipsum dolor sit amet !
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Streams;