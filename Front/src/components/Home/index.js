/* Package imports */
import React from 'react';

/* Local imports */
import illust from '../../assets/images/pawspaper.jpg';
import newsimg from '../../assets/images/paws_black_logo.png';
// Components

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='container__presentation'>
          <img className='container__presentation__image' src={illust} alt='illust'/>
        <span className='container__presentation__title'> PAWS </span>
        <div className='container__presentation__content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum nisi tortor, porta ornare turpis placerat sit amet.
        </div>
        </div>
        <div className='container__news'>
          <div className='container__news__title'>
            Latest news
          </div>
          <div className='container__news__box'>
            <div className='container__news__box__card'>
              <img className='container__news__box__card__image' src={newsimg} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__news__box__card'>
              <img className='container__news__box__card__image' src={newsimg} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__news__box__card'>
              <img className='container__news__box__card__image' src={newsimg} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
          </div>

          
        </div>
        <div className='container_linesup'>
          LINESUP
        </div>
        <div className='container_stream'>
          STREAM
        </div>
      </div>
    </div>
  )
};

export default Home;