/* Package imports */
import React, { useEffect } from 'react';

/* Local imports */
import avatar from '../../assets/images/avatar.jpg';
// Components

const Roster = ({ loadRoster, roster }) => {

  useEffect(() => {
    loadRoster();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(roster);
  return(
    <div className='roster'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>Roster</h1>
          </div>
          <div className='container__presentation__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ipsum finibus, tempor neque a, imperdiet lorem. Donec interdum est consectetur magna fermentum tristique. Aliquam et dignissim leo. Donec mollis commodo sollicitudin.
          </div>
          <div className='container__content'>
            <div className='container__content__nav'>
              <div className='container__content__nav__item'>
                Community
              </div>
              <div className='container__content__nav__item'>
                LoL
              </div>
              <div className='container__content__nav__item'>
                WoW
              </div>
              <div className='container__content__nav__item'>
                Community
              </div>
            </div>
            <div className='container__content__roster'>
            <div className='container__content__roster__title'>
              <h1>Roster</h1>
            </div>
            {roster.map((member => {
              return (
                <div key={member.id} className='container__content__roster__card'>
                  <img className='container__content__roster__card__image' alt='user profil' src={avatar}/>
                  <div className='container__content__roster__card__name'>
                    {member.username}
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
}

export default Roster;