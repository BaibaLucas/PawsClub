/* Package imports */
import React, { useEffect, useState } from 'react';

/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';
// Components

const Roster = ({ loadRoster, roster, loadUsers, users, sections, loadSectionsData, getSectionDetails }) => {

  useEffect(() => {
    loadUsers();
    loadSectionsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openAllUsers, setOpenAllUsers] = useState(true);
  const [openUsersBySection, setOpenUsersBySection] = useState(false);

  const handleAllUsers = () => {
    setOpenUsersBySection(false);
    setOpenAllUsers(true);
  };

  const handleUsersBySection = () => {
    setOpenAllUsers(false);
    setOpenUsersBySection(true);
  };

  const getUsersSection = (id) => {
    getSectionDetails(id);
  };

  const userImg = (url) => {
    if (url === null || url.length === 0) {
      return defaultPic;
    } else {
      return url;
    }
  };

  return(
    <div className='roster'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>ROSTER</h1>
          </div>
          <div className='container__presentation__nav'>
            {!sections && (
              <div className='container__presentation__nav__item'>
                NULL
              </div>
            )}
            <div className='container__presentation__nav__item'
            onClick={() => handleAllUsers()}>
                Membres
            </div>
           {sections && (
              sections.map((section => {
                return (
                  <div key={section.id} className='container__presentation__nav__item'
                  onClick={() => [getUsersSection(section.id), handleUsersBySection()]}>
                    {section.name}
                  </div>
                )
              }))
           )}
          </div>
          <div className='container__roster'>
            <div className='container__roster__box'>
            {openAllUsers && (
              <>
              {!users && (
              <div className='container__roster__box__card'>
                Aucun membre ne fait partie de la section
              </div>
            )}
            {users && (
              users.map((user => {
                return (
                    <div
                    key={user.id} 
                    className='container__roster__box__card'
                    >
                    <img className='container__roster__box__card__image' src={userImg(user.profilurl)} alt='user illustration' />
                    <div className='container__roster__box__card__text'>
                    <div className='container__roster__box__card__text__username'>
                      {user.username}
                    </div>
                    </div>
                    </div>
                )
              }))
            )}
              </>
            )}
            {openUsersBySection && (
              <>
              {!roster && (
              <div className='container__roster__box__card'>
                Aucun membre ne fait partie de la section
              </div>
            )}
            {roster && (
              roster.map((user => {
                return (
                  <div
                  key={user.id} 
                  className='container__roster__box__card'
                  >
                  <img className='container__roster__box__card__image' src={userImg(user.profilurl)} alt='user illustration' />
                  <div className='container__roster__box__card__text'>
                  <div className='container__roster__box__card__text__username'>
                    {user.username}
                  </div>
                  </div>
                  </div>
                )
              }))
            )}
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Roster;