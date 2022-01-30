/* Package imports */
import React from 'react';

/* Local imports */
import addon from '../../assets/images/addon.png';
import dogs from '../../assets/images/dogs1.png';
import down from '../../assets/images/down.jpg';
import avatar from '../../assets/images/avatar.jpg';

// Components

const Section = () => {
  return(
    <div className='section'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>Section</h1>
          </div>
          <div className='container__presentation__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ipsum finibus, tempor neque a, imperdiet lorem. Donec interdum est consectetur magna fermentum tristique. Aliquam et dignissim leo. Donec mollis commodo sollicitudin.
          </div>
        </div>
        <div className='container__content'>
          <div className='container__content__nav'>
            <div className='container__content__nav__item'>
              news
            </div>
            <div className='container__content__nav__item'>
              roster
            </div>
            <div className='container__content__nav__item'>
              event
            </div>
          </div>
          <div className='container__content__box'>
            <div className='container__content__box__title'>
              <h1>News</h1>
            </div>
            <div className='container__content__box__card'>
              <img className='container__content__box__card__image' alt='news illustration' src={down} />
              <div className='container__content__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__content__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__content__box__card'>
              <img className='container__content__box__card__image' alt='news illustration' src={addon}/>
              <div className='container__content__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__content__box__card__date'>
                21 january 2022
              </div>
            </div>
            <div className='container__content__box__card'>
              <img className='container__content__box__card__image' alt='news illustration' src={dogs}/>
              <div className='container__content__box__card__title'>
                Lorem ipsum dolor sit amet !
              </div>
              <div className='container__content__box__card__date'>
                21 january 2022
              </div>
            </div>
          </div>
          <div className='container__content__roster'>
            <div className='container__content__roster__title'>
              <h1>Roster</h1>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
            <div className='container__content__roster__card'>
              <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
              <div className='container__content__roster__card__name'>
                Name
              </div>
            </div>
          </div>
          <div className='container__content__info'>
            <div className='container__content__info__title'>
              <h1>INFORMATIONS</h1>
            </div>
            <div className='container__content__info__desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt dui. Ut dolor arcu, molestie ac iaculis nec, sodales lobortis nibh. Fusce finibus vestibulum ante, et hendrerit ligula dictum et. Curabitur lacus justo, ultrices quis est a, varius molestie ligula. Duis consectetur justo id orci consectetur congue vel sed eros.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Section;