/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import illust from '../../assets/images/pawspaper.jpg';
import diablo3 from '../../assets/images/diablo3.png';
import lol from '../../assets/images/leagueOf.jpeg';
import wow from '../../assets/images/shadowlandsWoW.png';
import sylvanas from '../../assets/images/sylvanas.jpg';
import clawlogo from '../../assets/images/clawlogo.jpg';
import talent from '../../assets/images/talent.png';
import addon from '../../assets/images/addon.png';
import dogs from '../../assets/images/dogs1.png';
import down from '../../assets/images/down.jpg';


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
              <img className='container__news__box__card__image' src={addon} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__news__box__card'>
              <img className='container__news__box__card__image' src={dogs} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__news__box__card'>
              <img className='container__news__box__card__image' src={down} alt='news illustration' />
              <div className='container__news__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__news__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__news__more'>
              <NavLink className='container__news__more__link' to='#'>
                More news
              </NavLink>
            </div>
          </div>

        </div>
        <div className='container__linesup'>
          <div className='container__linesup__title'>
            Lines-up
          </div>
          <div className='container__linesup__box'>
            <NavLink className='container__linesup__box__card' to='/section'>
              <img className='container__linesup__box__card__image' src={diablo3} alt='linesup illustration' />
            </NavLink>
            <NavLink className='container__linesup__box__card' to='/section'>
              <img className='container__linesup__box__card__image' src={lol} alt='linesup illustration' />
            </NavLink>
            <NavLink className='container__linesup__box__card' to='/section'>
              <img className='container__linesup__box__card__image' src={wow} alt='linesup illustration' />
            </NavLink>
          </div>
          <div className='container__linesup__more'>
              <NavLink className='container__linesup__more__link' to='#'>
                More lines-up
              </NavLink>
          </div>
        </div>
        <div className='container__stream'>
        <div className='container__stream__title'>
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
          <div className='container__stream__more'>
            <NavLink className='container__stream__more__link' to='#'>
              More Stream
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;