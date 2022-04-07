/* Package imports */
import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';


/* Local imports */

// Components

const Newsdetails = ({ loadNewsData, news, getNewsDetails, getNewsDetailsBySlug, newsId, allNews }) => {

  const {slug} = useParams();

  useEffect(() => {
    loadNewsData();
    getNewsDetailsBySlug(slug);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('newsId', newsId);
    console.log('all news', allNews);
    console.log('news', news);
  console.log('slug', slug);
  

  // https://blog.openreplay.com/data-fetching-techniques-with-react 

  
  
  // DEMAIN VA VOIR CA CHECK ASYNC // OR GET NEWS BY SLUG BACK END WITH router.get('/news/:slug', MW, controller);




  // const result = allNews.find( ({ title }) => title === slug );

  // console.log('result', result.id);
  



  const navigate = useNavigate();


  return(
    <div className='newsdetails'>
      <div className='container'>
        <div className='container__details'>
          <div 
          onClick={() => navigate(-1)}
          className='container__details__back'>
            <div className='container__details__back__logo'><BiArrowBack size={30} /></div>
            <div className='container__details__back__content'>Back</div>
          </div>
          <img className='container__details__image' alt='news illust' src={news.newsurl} />
          <div className='container__details__date'> {moment.utc(news.date).format("MM/DD/YY")}</div>
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