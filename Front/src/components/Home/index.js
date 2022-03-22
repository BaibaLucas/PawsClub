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


const Home = ({ news, sections }) => {
  

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
            {news.map((news => {
              return (
                <div key={news.id} className='container__news__box__card'>
                  <img className='container__news__box__card__image' src={addon} alt='news illustration' />
                  <div className='container__news__box__card__title'>
                    {news.title}
                  </div>
                  <div className='container__news__box__card__date'>
                    {news.date}
                  </div>
                </div>
              )
            }))}
            <div className='container__news__more'>
              <NavLink className='container__news__more__link' to='/news'>
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
            {sections.map((section => {
              return (
                <NavLink key={section.id} className='container__linesup__box__card' to='/section'>
                  <img className='container__linesup__box__card__image' src={diablo3} alt='linesup illustration' />
                </NavLink>
              )
            }))}
          </div>
          <div className='container__linesup__more'>
              <NavLink className='container__linesup__more__link' to='/linesup'>
                More lines-up
              </NavLink>
          </div>
        </div>
        <div className='container__stream'>
        <div className='container__stream__title'>
            Stream
          </div>
          <div className='container__stream__box'>
            <NavLink className='container__stream__box__card' to='/streams'>
              <img className='container__stream__box__card__image' src={talent} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </NavLink>
            <NavLink className='container__stream__box__card' to='/streams'>
              <img className='container__stream__box__card__image' src={sylvanas} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </NavLink>
            <NavLink className='container__stream__box__card' to='/streams'>
              <img className='container__stream__box__card__image' src={clawlogo} alt='stream illustration' />
              <div className='container__stream__box__card__title'>
                Aenean interdum nisi tortor
              </div>
            </NavLink>
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