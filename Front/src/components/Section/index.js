/* Package imports */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/* Local imports */
import { NavLink } from 'react-router-dom';
import defaultPic from '../../assets/images/defaultPic.jpeg';
import { buildNewsUrl } from '../../utils';

// Components



const Section = ({ sections, section, getSectionDetails, section_id, newsSection, roster, selectedNews }) => {


  useEffect(() => {
    getSectionDetails(section.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('section_id', section_id);
  console.log('sections',sections);
  console.log('section', section);
  console.log('newsSection', newsSection)
  console.log('Roster', roster);

  const [openNews, setOpenNews] = useState(true);
  const [openRoster, setOpenRoster] = useState(false);

  const handleNews = () => {
    setOpenRoster(false);
    setOpenNews(true);
  };
  const handleRoster = () => {
    setOpenNews(false);
    setOpenRoster(!openRoster);
  };

  const selectNews = (id, title, subtitle, content, newsurl) => {
    console.log(id, title, subtitle, content, newsurl);
    selectedNews(id, title, subtitle, content, newsurl);
  };

  const userImg = (url) => {
    if (url === null || url.length === 0) {
      return defaultPic;
    } else {
      return url;
    }
  };

  const memberRole = (role) => {
    if (role === 1) {
      return 'membre';
    } else if (role === 2){
      return 'moderator'
    } else {
      return 'admin';
    }
  }


  
  return(
    <div className='section'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>{section.name}</h1>
          </div>
          <div className='container__presentation__desc'>
            {section.description}
          </div>
          <div className='container__presentation__desc'>
            {section.content}
          </div>
        </div>
        <div className='container__content'>
          <div className='container__content__nav'>
            <div className='container__content__nav__item' onClick={handleNews}>
              news
            </div>
            <div className='container__content__nav__item' onClick={handleRoster}>
              roster
            </div>
          </div>
          <div className='container__content__box'>
            {openNews && (
              <div className='container__content__box__news'>
                {!newsSection && (
              <>
              Aucune news actuellement disponible
              </>
            )}
            {newsSection && (
              newsSection.map((news => {
                return (
                  <NavLink className='container__content__box__news__card' key={news.id} to={buildNewsUrl(news.title)} >
                  <div 
                  className='container__content__box__news__card__detail'
                  onClick={() => selectNews(news.id, news.title, news.subtitle, news.content, news.newsurl)}>
                  <img className='container__content__box__news__card__detail__image' src={news.newsurl} alt='news illustration' />
                  <div className='container__content__box__news__card__detail__text'>
                  <div className='container__content__box__news__card__detail__text__title'>
                    {news.title}
                  </div>
                  <div className='container__content__box__news__card__detail__text__section'>
                    {news.section_name} : {moment.utc(news.date).format("MM/DD/YY")}
                  </div>
                  </div>
                  </div>
                </NavLink>
                )
              }))
            )}
              </div>
            )}
            {openRoster && (
              <div className='container__content__box__roster'>
              {!roster && (
            <>
            Aucun roster actuellement disponible
            </>
          )}
          {roster && (
            roster.map((member => {
              return (
                <div key={member.id} className='container__content__box__roster__card'>
                  <img 
                  className='container__content__box__roster__card__image'
                  src={userImg(member.profilurl)}
                  alt='userprofil illustration'
                  />
                <div className='container__content__box__roster__card__username'>
                  {member.username}
                </div>
                <div className='container__content__box__roster__card__role'>
                  {memberRole(member.role_id)}
                </div>
                </div>
              )
            }))
          )}
            </div>
            )}
        </div>
        </div>
      </div>
    </div>
  )
};

export default Section;