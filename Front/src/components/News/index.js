/* Package imports */
import React, { useEffect, useState } from 'react';
import moment from 'moment';

/* Local imports */
import { NavLink } from 'react-router-dom';
import { buildNewsUrl } from '../../utils';
// Components


const News = ({ news, loadNewsData, loadSectionsData, sections, selectedNews, getNewsBySection, newsSection}) => {


  // Loading News - Sections - Streamers
  useEffect(() => {
    loadNewsData();
    loadSectionsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openAllNews, setOpenAllNews] = useState(true);
  const [openNewsBySection, setOpenNewsBySection] = useState(false);

  
  const handleAllNews = () => {
    setOpenNewsBySection(false);
    setOpenAllNews(!openAllNews);
  };

  const handleNewsBySection = () => {
    setOpenAllNews(false);
    setOpenNewsBySection(true);
  }

  const selectNews = (id, title, subtitle, content, newsurl) => {
    selectedNews(id, title, subtitle, content, newsurl);
  };

  const getNewsSection = (id) => {
    getNewsBySection(id);
  };


  return(
    <div className='news'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>news</h1>
          </div>
          <div className='container__presentation__nav'>
            {!sections && (
              <div className='container__presentation__nav__item'>
                NULL
              </div>
            )}
            <div className='container__presentation__nav__item'
            onClick={() => handleAllNews()}>
                All News
            </div>
           {sections && (
              sections.map((section => {
                return (
                  <div key={section.id} className='container__presentation__nav__item'
                  onClick={() => [getNewsSection(section.id), handleNewsBySection()]}>
                    {section.name}
                  </div>
                )
              }))
           )}
          </div>
          <div className='container__news'>
            <div className='container__news__box'>
            {openAllNews && (
              <>
              {!news && (
              <div className='container__news__box__card'>
                NULL
              </div>
            )}
            {news && (
              news.map((news => {
                return (
                  <NavLink className='container__news__box__card' key={news.id} to={buildNewsUrl(news.title)} >
                    <div 
                    className='container__news__box__card__content'
                    onClick={() => selectNews(news.id, news.title, news.subtitle, news.content, news.newsurl)}>
                    <img className='container__news__box__card__content__image' src={news.newsurl} alt='news illustration' />
                    <div className='container__news__box__card__content__text'>
                    <div className='container__news__box__card__content__text__title'>
                      {news.title}
                    </div>
                    <div className='container__news__box__card__content__text__section'>
                      {news.section_name} : {moment.utc(news.date).format("MM/DD/YY")}
                    </div>
                    </div>
                    </div>
                  </NavLink>
                )
              }))
            )}
              </>
            )}
            {openNewsBySection && (
              <>
              {!newsSection && (
              <div className='container__news__box__card'>
                NULL
              </div>
            )}
            {newsSection && (
              newsSection.map((news => {
                return (
                  <NavLink className='container__news__box__card' key={news.id} to={buildNewsUrl(news.title)} >
                    <div 
                    className='container__news__box__card__content'
                    onClick={() => selectNews(news.id, news.title, news.subtitle, news.content, news.newsurl)}>
                    <img className='container__news__box__card__content__image' src={news.newsurl} alt='news illustration' />
                    <div className='container__news__box__card__content__text'>
                    <div className='container__news__box__card__content__text__title'>
                      {news.title}
                    </div>
                    <div className='container__news__box__card__content__text__section'>
                      {news.section_name} : {moment.utc(news.date).format("MM/DD/YY")}
                    </div>
                    </div>
                    </div>
                  </NavLink>
                )
              }))
            )}
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default News;