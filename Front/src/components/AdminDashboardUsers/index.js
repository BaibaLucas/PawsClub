/* Package imports */
import React, {useState, useEffect} from 'react';


/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';

// Components

const AdminDashboardUsers = ({ loadUsers, users, handleChange, submitRole, selectedUser, user_id, username, submitDelete }) => {

  // Loading Users
  useEffect(() => {
    loadUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user_id);
  const usrImg = (imgprofil) => {
    if (imgprofil === null) {
      return defaultPic
    } else {
      return imgprofil;
    }
  }

  // Return role as string by Id
  const memberRole = (role) => {
    if (role === 1) {
      return 'membre';
    } else if (role === 2){
      return 'moderator'
    } else {
      return 'admin';
    }
  }

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleSubmitRole = (event) => {
    event.preventDefault();
    setOpenUpdate(!openUpdate);
    submitRole();
  };

  const handleSubmitDelete = (event) => {
    event.preventDefault();
    setOpenDelete(!openDelete);
    submitDelete();
  }

  const selectUser = (id, username) => {
    selectedUser(id, username);
  };

  

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



  return(
    <div className='admindashboardusers'>
      <div className='container'>
        <div className='container__title'>
          <h1> USERS DASHBOARD </h1>
        </div>
        {user_id.length !== 0 && (
          <div className='container__choice'>
          <div className='container__choice__item' onClick={openModalUpdate}>
            UPDATE
          </div>
          <div className='container__choice__item' onClick={openModalDelete}>
            DELETE
          </div>
        </div>
        )}
        <div className='container__box'>
        {users.map((user => {
              return (
                <div key={user.id}
                className='container__box__card'
                onClick={() => selectUser(user.id, user.username)}  
                >
                  <img className='container__box__card__image' alt='user profil' src={usrImg(user.profilurl)}/>
                  <div className='container__box__card__username'>
                    {user.username}
                  </div>
                  <div className='container__box__card__role'>
                    {memberRole(user.role_id)}
                  </div>
                </div>
              )
            }))}
        </div>
        {openUpdate && (
          <div className='container__modal'>
            <div className='container__modal__update'>
              <div className='container__modal__update__title'>
                MODAL UPDATE
              </div>
              <div className='container__modal__update__user'>
                {username}
              </div>
              <form className='container__modal__update__form'>
                <select name='role_id'
                className="container__modal__update__form__select" 
                onChange={onChange}
                >
                  <option value=''>Role</option>
                  <option value='3'>Admin</option>
                  <option value='2'>Moderator</option>
                  <option value='1'>Member</option>
                </select>
                <div className='container__modal__update__button'>
                  <button onClick={handleSubmitRole}>
                    Valider
                  </button>
                  <button onClick={openModalUpdate}>
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
                {username}
              </div>
                <div className='container__modal__update__button'>
                  <button onClick={handleSubmitDelete}>
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