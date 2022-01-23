/* Package imports */
import React from 'react';

/* Local imports */
import illust from '../../assets/images/pawspaper.jpg';
import newsimg from '../../assets/images/paws_black_logo.png';
import ow from '../../assets/images/owlogo.png';
import lol from '../../assets/images/leagueOf.jpeg';
import wow from '../../assets/images/shadowlandsWoW.png';
import sylvanas from '../../assets/images/sylvanas.jpg';
import clawlogo from '../../assets/images/clawlogo.jpg';
import talent from '../../assets/images/talent.png';


// Components

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='container__presentation'>
          <img className='container__presentation__image' src={illust} alt='illust'/>
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
          <div className='container__linesup__title'>
            Lines-up
          </div>
          <div className='container__linesup__box'>
            <a className='container__linesup__box__card' href='#'>
              <img className='container__linesup__box__card__image' src={ow} alt='linesup illustration' />
            </a>
            <a className='container__linesup__box__card' href='#'>
              <img className='container__linesup__box__card__image' src={lol} alt='linesup illustration' />
            </a>
            <a className='container__linesup__box__card' href='#'>
              <img className='container__linesup__box__card__image' src={wow} alt='linesup illustration' />
            </a>
          </div>
        </div>
        <div className='container_stream'>
        <div className='container__linesup__title'>
            Stream
          </div>
          <div className='container__stream__box'>
            <a className='container__stream__box__card' href='#'>
              <img className='container__stream__box__card__image' src={talent} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </a>
            <a className='container__stream__box__card' href='#'>
              <img className='container__stream__box__card__image' src={sylvanas} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </a>
            <a className='container__stream__box__card' href='#'>
              <img className='container__stream__box__card__image' src={clawlogo} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;