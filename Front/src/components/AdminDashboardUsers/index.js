/* Package imports */
import React, {useState} from 'react';


/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';

// Components

const AdminDashboardUsers = () => {

  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openModalUpdate = () => {
    setOpenUpdate(!openUpdate);
    console.log(openUpdate);
  };
  const openModalDelete = () => {
    setOpenDelete(!openDelete);
    console.log('click')
  };

  const close = () => {
    setOpenUpdate(false);
  }


  return(
    <div className='admindashboardusers'>
      <div className='container'>
        <div className='container__title'>
          <h1> USERS DASHBOARD </h1>
        </div>
        <div className='container__choice'>
          <div className='container__choice__item' onClick={openModalUpdate}>
            UPDATE
          </div>
          <div className='container__choice__item' onClick={openModalDelete}>
            DELETE
          </div>
        </div>
        <div className='container__box'>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
          <div className='container__box__card'>
            <img className='container__box__card__img' alt='avatar' src={defaultPic}/>
            <div className='container__box__card__username'>
              Reape
            </div>
            <div className='container__box__card__role'>
              membre
            </div>
          </div>
        </div>
        {openUpdate && (
          <div className='container__modal'>
            <div className='container__modal__update'>
              <div className='container__modal__update__title'>
                MODAL UPDATE
              </div>
              <div className='container__modal__update__user'>
                user
              </div>
              <form className='container__modal__update__form'>
                <select name="role" id ='role_select' className="container__modal__update__form__select">
                  <option value=''>Choose a Role</option>
                  <option value='Moderator'>moderator</option>
                  <option value="Member">member</option>
                </select>
                <div className='container__modal__update__button'>
                  <button onClick={close}>
                    Valider
                  </button>
                  <button>
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
          )}
          {openDelete && (
          <div className='container__modal'>
            <div className='container__modal__delete'>
              <div className='container__modal__delete__title'>
                MODAL DELETE
              </div>
              <div className='container__modal__delete__user'>
                User
              </div>
                <div className='container__modal__update__button'>
                  <button onClick={openModalDelete}>
                    Valider
                  </button>
                  <button onClick={openModalDelete}>
                    Annuler
                  </button>
                </div>
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default AdminDashboardUsers;