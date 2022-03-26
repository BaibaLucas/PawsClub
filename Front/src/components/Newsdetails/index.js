/* Package imports */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

/* Local imports */
import sylvanas from '../../assets/images/sylvanas.jpg';
// Components

const Newsdetails = ({ news }) => {
  return(
    <div className='newsdetails'>
      <div className='container'>
        <div className='container__details'>
          <div className='container__details__back'>
            <div className='container__details__back__logo'><BiArrowBack size={30} /></div>
            <div className='container__details__back__content'>Back</div>
          </div>
          <img className='container__details__image' alt='news illust' src={news.newsurl} />
          <div className='container__details__date'> {news.date}</div>
          <div className='container__details__title'>
            <h1>{news.title}</h1>
          </div>
          <div className='container__details__content'>
            {news.content}
          </div>
          <div className='container__details__author'>
            {news.user_id}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsdetails;