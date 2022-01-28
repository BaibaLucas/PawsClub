/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import diablo3 from '../../assets/images/diablo3.png';
import lol from '../../assets/images/leagueOf.jpeg';
import wow from '../../assets/images/shadowlandsWoW.png';

// Components

const LinesUp = () => {
  return(
    <div className='linesup'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>LINES UP</h1>
          </div>
          <div className='container__presentation__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ipsum finibus, tempor neque a, imperdiet lorem. Donec interdum est consectetur magna fermentum tristique. Aliquam et dignissim leo. Donec mollis commodo sollicitudin.
          </div>
        </div>
        <div className='container__box'>
          <NavLink to='/section'>
            <div className='container__box__card'>
              <img className='container__box__card__image' src={wow} alt='wow illustration' />
              <div className='container__box__card__title'>
                WoW
              </div>
              <div className='container__box__card__status'>
                Open
              </div>
            </div>
          </NavLink>
          <NavLink to='/section'>
            <div className='container__box__card'>
              <img className='container__box__card__image' src={lol} alt='lol illustration' />
              <div className='container__box__card__title'>
                LoL
              </div>
              <div className='container__box__card__status'>
                Open
              </div>
            </div>
          </NavLink>
          <NavLink to='/section'>
            <div className='container__box__card'>
              <img className='container__box__card__image' src={diablo3} alt='d3 illustration' />
              <div className='container__box__card__title'>
                Diablo 3
              </div>
              <div className='container__box__card__status'>
                SOON
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default LinesUp;