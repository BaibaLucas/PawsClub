/* Package imports */
import React, { useState } from 'react';

/* Local imports */
import addon from '../../assets/images/addon.png';
import dogs from '../../assets/images/dogs1.png';
import down from '../../assets/images/down.jpg';
import avatar from '../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';

// Components

const Section = ({ sections, section }) => {

  console.log(sections);
  console.log(section);

  const [openNews, setOpenNews] = useState(true);
  const [openRoster, setOpenRoster] = useState(false);

  const handleNews = () => {
    setOpenRoster(false);
    setOpenNews(!openNews);
  };
  const handleRoster = () => {
    setOpenNews(false);
    setOpenRoster(!openRoster);
  };

  
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
              <div> NEWS </div>
            )}
            {openRoster && (
              <div> ROSTER </div>
            )}
        </div>
        </div>
      </div>
    </div>
  )
};

export default Section;