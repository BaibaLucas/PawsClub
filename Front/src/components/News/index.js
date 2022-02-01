/* Package imports */
import React from 'react';

/* Local imports */
import talent from '../../assets/images/talent.png';
import addon from '../../assets/images/addon.png';
import dogs from '../../assets/images/dogs1.png';
import down from '../../assets/images/down.jpg';
// Components

const News = () => {
  return(
    <div className='news'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>news</h1>
          </div>
          <div className='container__presentation__nav'>
            <div className='container__presentation__nav__item'>
              WoW
            </div>
            <div className='container__presentation__nav__item'>
              LoL
            </div>
            <div className='container__presentation__nav__item'>
              diablo3
            </div>
            <div className='container__presentation__nav__item'>
              RL
            </div>
          </div>
          <div className='container__news'>
            <div className='container__news__box'>
              <div className='container__news__box__card'>
                <img className='container__news__box__card__image' alt='news illust' src={talent}/>
                <div className='container__news__box__card__title'>
                  Lorem ipsum dolor sit amet !
                </div>
                <div className='container__news__box__card__date'>
                21 january 2022
                </div>
              </div>
              <div className='container__news__box__card'>
                <img className='container__news__box__card__image' alt='news illust' src={addon}/>
                <div className='container__news__box__card__title'>
                  Lorem ipsum dolor sit amet !
                </div>
                <div className='container__news__box__card__date'>
                21 january 2022
                </div>
              </div>
              <div className='container__news__box__card'>
                <img className='container__news__box__card__image' alt='news illust' src={dogs}/>
                <div className='container__news__box__card__title'>
                  Lorem ipsum dolor sit amet !
                </div>
                <div className='container__news__box__card__date'>
                21 january 2022
                </div>
              </div>
              <div className='container__news__box__card'>
                <img className='container__news__box__card__image' alt='news illust' src={down}/>
                <div className='container__news__box__card__title'>
                  Lorem ipsum dolor sit amet !
                </div>
                <div className='container__news__box__card__date'>
                21 january 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default News;