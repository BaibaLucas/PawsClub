/* Package imports */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import moment from 'moment';

/* Local imports */
import illust from '../../assets/images/pawspaper.jpg';
import { buildSectionUrl, buildNewsUrl } from '../../utils';



// Components


const Home = ({ loadStreamersData, news, sections, streams, getSectionDetails, selectedSection, selectedNews }) => {
  
  useEffect(() => {
    loadStreamersData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectNews = (id, title, subtitle, content, newsurl) => {
    console.log(id, title, subtitle, content, newsurl);
    selectedNews(id, title, subtitle, content, newsurl);
  };

  return (
    <div className='home'>
      <div className='container'>
        <div className='container__presentation'>
          <img className='container__presentation__image' src={illust} alt='illust'/>
        <div className='container__presentation__content'>
          PAWS CLUB PLATFORME
        </div>
        </div>
        <div className='container__news'>
          <div className='container__news__title'>
            Latest news
          </div>
          <div className='container__news__box'>
            {!news && (
              <>
              Aucune news actuellement disponible
              </>
            )}
            {news && (
              news.map((news => {
                return (
                  <NavLink key={news.id} to={buildNewsUrl(news.title)} >
                    <div 
                    className='container__news__box__card'
                    onClick={() => selectNews(news.id, news.title, news.subtitle, news.content, news.newsurl)}>
                    <img className='container__news__box__card__image' src={news.newsurl} alt='news illustration' />
                    <div className='container__news__box__card__text'>
                    <div className='container__news__box__card__text__title'>
                      {news.title}
                    </div>
                    <div className='container__news__box__card__text__section'>
                      {news.section_name} : {moment.utc(news.date).format("MM/DD/YY")}
                    </div>
                    </div>
                    </div>
                  </NavLink>
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
              Aucune sections actuellement disponible
              </>
            )}
            {sections && (
              sections.map((section => {
                return (
                  <NavLink 
                    key={section.id} 
                    className='container__linesup__box__card'
                    onClick={() => {selectedSection(section.id, section.name, section.title, section.sectionurl, section.desc, section.content)}}
                    to={buildSectionUrl(section.name)}
                    >
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
              Aucun stream actuellement disponible
              </>
            )}
            {streams && (
              streams.map((stream => {
                return (
                  <div key={stream.id}className='container__stream__box__card'>
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