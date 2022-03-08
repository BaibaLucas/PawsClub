/* Package imports */
import React, { useEffect } from 'react';

/* Local imports */
import addon from '../../assets/images/addon.png';
import { NavLink } from 'react-router-dom';
// Components

const News = ({ news, loadNewsData, sections }) => {

  /**  NewsImg
  - If user select picture return this
  - else user havn't select picture and havn't imgnews upload return default pic.
  */

  // Loading News - Sections - Streamers
  useEffect(() => {
    loadNewsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const newsImg = (newsurl) => {
    if (newsurl.length === 0 || newsurl === 'blabla' || newsurl === 'http://myphotourlnews.fr') {
      return addon
    } else {
      return newsurl;
    }
  };

  console.log(news);
  console.log(sections);
  return(
    <div className='news'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>news</h1>
          </div>
          <div className='container__presentation__nav'>
            {sections.map((section => {
              return (
                <div key={section.id} className='container__presentation__nav__item'>
                  {section.name}
                </div>
              )
            }))}
          </div>
          <div className='container__news'>
            <div className='container__news__box'>
            {news.map((news => {
              return (
                <div key={news.id} className='container__news__box__card'>
                  <img className='container__news__box__card__image' src={newsImg(news.newsurl)} alt='news illustration' />
                  <div className='container__news__box__card__title'>
                    {news.title}
                  </div>
                  <div className='container__news__box__card__date'>
                    {news.date}
                  </div>
                </div>
              )
            }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default News;