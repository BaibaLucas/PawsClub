/* Package imports */
import React, { useEffect } from 'react';

/* Local imports */
import { NavLink } from 'react-router-dom';
// Components
import NewsDetails from '../Newsdetails';

const News = ({ news, loadNewsData, loadSectionsData, sections }) => {


  // Loading News - Sections - Streamers
  useEffect(() => {
    loadNewsData();
    loadSectionsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
           {sections && (
              sections.map((section => {
                return (
                  <div key={section.id} className='container__presentation__nav__item'>
                    {section.name}
                  </div>
                )
              }))
           )}
          </div>
          <div className='container__news'>
            <div className='container__news__box'>
            {!news && (
              <div className='container__news__box__card'>
                NULL
              </div>
            )}
            {news && (
              news.map((news) => {
                return (
                  <NavLink key={news.id} to='#'>
                    <NewsDetails news={news} />
                  </NavLink>
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