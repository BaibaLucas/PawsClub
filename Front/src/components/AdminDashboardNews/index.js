/* Package imports */
import React, {useState, useEffect} from 'react';


/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';
import addon from '../../assets/images/addon.png';

// Components

const AdminDashboardNews = ({ loadNews, news, handleChange, submitCreate, submitUpdate, selectedNews, title, subtitle, content, tag, id, submitDelete }) => {

  // Loading Users
  useEffect(() => {
    loadNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newsImg = (newsurl) => {
    if (newsurl.length === 0 || newsurl === 'blabla' || newsurl === 'http://myphotourlnews.fr') {
      return addon
    } else {
      return newsurl;
    }
  };

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    setOpenCreate(!openCreate);
    submitCreate();
  };


  const selectNews = (id, title, subtitle, content) => {
    console.log(id, title, subtitle, content)
    selectedNews(id, title, subtitle, content);
  };


  const handleUpdate = (event) => {
    event.preventDefault();
    setOpenUpdate(!openUpdate);
    submitUpdate();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setOpenDelete(!openDelete);
    submitDelete();
  }

  

  
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openModalCreate = () => {
    setOpenCreate(!openCreate);
    console.log(openCreate);
  };
  const openModalUpdate = () => {
    setOpenUpdate(!openUpdate);
    console.log(openUpdate);
  };
  const openModalDelete = () => {
    setOpenDelete(!openDelete);
    console.log('click')
  };



  return(
    <div className='admindashboardnews'>
      <div className='container'>
        <div className='container__title'>
          <h1> NEWS DASHBOARD </h1>
        </div>
          <div className='container__choice'>
          <div className='container__choice__item' onClick={openModalCreate}>
            CREATE
          </div>
          {id.length !== 0 && (
            <>
            <div className='container__choice__item' onClick={openModalUpdate}>
            UPDATE
          </div>
          <div className='container__choice__item' onClick={openModalDelete}>
            DELETE
          </div>
            </>
          )}
        </div>
        <div className='container__box'>
        {news.map((news => {
              return (
                <div key={news.id} className='container__box__card'
                onClick={() => selectNews(news.id, news.title, news.subtitle, news.content)}>
                  <img className='container__box__card__image' src={newsImg(news.newsurl)} alt='news illustration' />
                  <div className='containers__box__card__title'>
                    {news.title}
                  </div>
                  <div className='container__box__card__date'>
                    {news.date}
                  </div>
                </div>
              )
            }))}
        </div>
        {openCreate && (
          <div className='container__modal'>
            <div className='container__modal__create'>
              <div className='container__modal__create__title'>
                MODAL Create
              </div>
              <form className='container__modal__create__form'>
                <label>Title</label>
                <input
                name='title'
                onChange={onChange}
                placeholder='title' 
                />
                <label>SubTitle</label>
                <input
                name='subtitle'
                onChange={onChange}
                placeholder='subtitle' 
                />
                <label>Content</label>
                <input
                name='content'
                onChange={onChange}
                placeholder='content' 
                />
                <label>tag</label>
                <input
                name='tag'
                onChange={onChange}
                placeholder='tag' 
                />
                <div className='container__modal__create__button'>
                  <button onClick={handleCreate}>
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
        {openUpdate && (
          <div className='container__modal'>
            <div className='container__modal__update'>
              <div className='container__modal__update__title'>
                MODAL UPDATE
              </div>
              <div className='container__modal__update__user'>
                {title}
              </div>
              <form className='container__modal__update__form'>
              <label>title</label>
                <input
                value={title}
                name='title'
                onChange={onChange}
                placeholder='title' 
                />
                <label>subTitle</label>
                <input
                value={subtitle}
                name='subtitle'
                onChange={onChange}
                placeholder='subtitle' 
                />
                <label>content</label>
                <textarea
                value={content}
                name='content'
                onChange={onChange}
                placeholder='content' 
                />
                <label>Content</label>
                <input
                value={tag}
                name='tag'
                onChange={onChange}
                placeholder='tag' 
                />
                <div className='container__modal__update__button'>
                  <button onClick={handleUpdate}>
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
                {title}
              </div>
                <div className='container__modal__update__button'>
                  <button onClick={handleDelete}>
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

export default AdminDashboardNews;