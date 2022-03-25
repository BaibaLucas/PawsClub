/* Package imports */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

/* Local imports */
import illust from '../../assets/images/pawspaper.jpg';



// Components


const Home = ({ loadStreamersData, news, sections, streams }) => {
  
  useEffect(() => {
    loadStreamersData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(streams);

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
            {!news && (
              <>
              NULL
              </>
            )}
            {news && (
              news.map((news => {
                return (
                  <div key={news.id} className='container__news__box__card'>
                    <img className='container__news__box__card__image' src={news.newsurl} alt='news illustration' />
                    <div className='container__news__box__card__title'>
                      {news.title}
                    </div>
                    <div className='container__news__box__card__date'>
                      {news.date}
                    </div>
                  </div>
                )
              }))
            )}
          </div>
          <div className='container__news__more'>
              <NavLink className='container__news__more__link' to='/news'>
                More news
              </NavLink>
            </div>
        </div>
        <div className='container__linesup'>
          <div className='container__linesup__title'>
            Lines-up
          </div>
          <div className='container__linesup__box'>
            {!sections && (
              <>
              NULL
              </>
            )}
            {sections && (
              sections.map((section => {
                return (
                  <NavLink key={section.id} className='container__linesup__box__card' to='/section'>
                    <img className='container__linesup__box__card__image' src={section.sectionurl} alt='linesup illustration' />
                  </NavLink>
                )
              }))
            )}
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
            {!streams && (
              <>
              NULL
              </>
            )}
            {streams && (
              streams.map((stream => {
                return (
                  <div className='container__stream__box__card'>
                    <ReactPlayer 
                      url={stream.stream}
                      height='100%'
                      width='100%'
                    />
                  </div>
                )
              }))
            )}
          </div>
          <div className='container__stream__more'>
              <NavLink className='container__stream__more__link' to='/streams'>
                More Streams
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;