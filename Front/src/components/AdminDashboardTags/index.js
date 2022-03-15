/* Package imports */
import React, { useEffect, useState } from 'react';

/* Local imports */


// Components

const AdminDashboardTags = ({ loadTags, tags, handleChange, submitTag, submitDelete, selectedTag, tagname, tag_id }) => {

  // Loading Users
  useEffect(() => {
    loadTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openCreate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openModalCreate = () => {
    setOpenUpdate(!openCreate);
    console.log(openCreate);
  };
  const openModalDelete = () => {
    setOpenDelete(!openDelete);
    console.log('click')
  };

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleSubmitTag = (event) => {
    event.preventDefault();
    setOpenUpdate(!openCreate);
    submitTag();
  };

  const handleSubmitDelete = (event) => {
    event.preventDefault();
    setOpenDelete(!openDelete);
    submitDelete();
  };

  const selectTag = (id, name) => {
    console.log(id, name);
    selectedTag(id, name);
  };

  return(
    <div className='admindashboardtags'>
      <div className='container'>
        <div className='container__title'>
          <h1>TAGS DASHBOARD</h1>
        </div>
        {tag_id.length !== 0 && (
          <div className='container__choice'>
          <div className='container__choice__item' onClick={openModalCreate}>
            CREATE
          </div>
          <div className='container__choice__item' onClick={openModalDelete}>
            DELETE
          </div>
        </div>
        )}
        <div className='container__box'>
        {tags.map((tag => {
              return (
                <div key={tag.id}
                className='container__box__card'
                onClick={() => selectTag(tag.id, tag.name)} 
                >
                  <div className='container__box__card__name'>
                    {tag.name}
                  </div>
                </div>
              )
            }))}
        </div>
        {openCreate && (
          <div className='container__modal'>
            <div className='container__modal__update'>
              <div className='container__modal__update__title'>
                MODAL Create
              </div>
              <form className='container__modal__update__form'>
                <label> NAME </label>
                <input
                className='container__modal__update__form__input'
                onChange={onChange}
                name='tag_name'
                 />
                <div className='container__modal__update__button'>
                  <button onClick={handleSubmitTag}>
                    Valider
                  </button>
                  <button onClick={openModalCreate}>
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
              <div className='container__modal__delete__tag'>
                {tagname}
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

export default AdminDashboardTags;