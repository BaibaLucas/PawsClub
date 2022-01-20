/* Package imports */
import React from 'react';

/* Local imports */
import illust from '../../assets/images/paws_black_logo.png';
// Components

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__image'>
            <img src={illust} alt='illustration homepage' />
            <div className='container__presentation__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lacus mattis, consequat odio non, dictum ligula. Quisque molestie diam in tempus posuere. Nunc hendrerit tellus ac justo varius, vehicula rhoncus dui fermentum. Nullam vel nunc commodo, sollicitudin tellus eget, mattis metus.
          </div>
          </div>
        </div>
        <div className='container__news'>
          NEWS
        </div>
        <div className='container_linesup'>
          LINESUP
        </div>
        <div className='container_stream'>
          STREAM
        </div>
      </div>
    </div>
  )
};

export default Home;