/* Package imports */
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


/* Local imports */
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';
import { getSectionsSuccess } from '../../store/action';

// Components

const AdminDashboardNews = ({ loadNews, news, handleChange, submitCreate, submitUpdate, selectedNews, title, subtitle, content, tag, id, submitDelete, success, msg, refreshNewsStatus, newsurl, news_sectionId, news_section, sections }) => {

  // Loading Users
  useEffect(() => {
    loadNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [image, setImage] = useState(null);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    const canvas = await getCanvasImage(image);
    const canvasDataUrl = canvas.toDataURL('image/jpeg');
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'section-picture.jpeg');
    submitCreate(convertedUrlToFile);
  };

  const onSelectFile = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    };
  };


  const selectNews = (id, title, subtitle, content, newsurl) => {
    console.log(id, title, subtitle, content, newsurl)
    selectedNews(id, title, subtitle, content, newsurl);
  };


  const handleUpdate = (event) => {
    event.preventDefault();
    submitUpdate();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    submitDelete();
  };

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

  const backToNews = () => {
    loadNews();
    refreshNewsStatus();
    setImage('');
    setOpenCreate(false);
    setOpenUpdate(false);
    setOpenDelete(false);
  };



  return(
    <div className='admindashboardnews'>
      <div className='container'>
        <div className='container__title'>
          <h1> NEWS DASHBOARD </h1>
        </div>
        <div className='container__back'>
            <NavLink to='/admin/dashboard'>
              Back to Dashboard
            </NavLink>
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
        {!news && (
            <h1>Aucune news actuellement disponible</h1>
          )}
        {news && (
          news.map((news => {
            console.log(news);
            return (
              <div key={news.id} className='container__box__card'
              onClick={() => selectNews(news.id, news.title, news.subtitle, news.content, news.newsurl)}>
                <img className='container__box__card__image' src={news.newsurl} alt='news illustration' />
                <div className='containers__box__card__title'>
                  {news.title}
                </div>
                <div className='container__box__card__date'>
                  {moment.utc(news.date).format("MM/DD/YY")}
                </div>
                <div className='container__box__card__username'>
                  {news.username}
                </div>
              </div>
            )
          })))}
        </div>
        {openCreate && (
          <div className='container__modal'>
            <div className='container__modal__create'>
              <div className='container__modal__create__title'>
                MODAL Create
              </div>
              <form className='container__modal__create__form' encType='multipart/form-data'>
              {image && (
                <div className='container__modal__create__form__image'>
                <img src={image} alt='section img' />
              </div>
               )}
               {!success && (
                 <>
                 <label className='container__modal__create__form__label' htmlFor='upload__photo'>Select File</label>
                <input
                id='upload__photo'
                onChange={onSelectFile}
                className='container__modal__create__form__input'
                type='file'
                name='imgsection'
                accept="image/*"
                />
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
                <textarea
                name='content'
                onChange={onChange}
                placeholder='content' 
                />
                <label>Section</label>
                <select 
                  name='news_sectionId'
                  className='container__modal__create__form__select'
                  onChange={onChange}
                  >
                  <option value=''>Section</option>
                  {sections.map(s => {
                    return <option key={s.id} value={s.id}>{s.name}</option>
                  })}
                  </select>
                <div className='container__modal__create__button'>
                  <button onClick={handleCreate}>
                    Valider
                  </button>
                  <button onClick={openModalCreate}>
                    Annuler
                  </button>
                </div>
                 </>
               )}
               {success && (
                  <>
                  <div className='container__modal__create_msg'>
                    {msg}
                  </div>
                  <div className='container__modal__create__button'>
                  <button onClick={backToNews}>
                    Back to News
                  </button>
                  </div>
                  </>
                )}
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
                {!success && (
                  <>
                <div className='container__modal__update__form__image'>
                  <img src={newsurl} alt='section img' />
                </div>
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
                {/* <label>Section</label>
                <input
                value={section}
                name='tag'
                onChange={onChange}
                placeholder='tag' 
                /> */}
                <div className='container__modal__update__button'>
                  <button onClick={handleUpdate}>
                    Valider
                  </button>
                  <button onClick={openModalUpdate}>
                    Annuler
                  </button>
                </div>
                  </>
                )}
                {success && (
                  <>
                  <div className='container__modal__update__msg'>
                    {msg}
                  </div>
                  <div className='container__modal__update__button'>
                  <button onClick={backToNews}>
                    Back to News
                  </button>
                  </div>
                  </>
                )}
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
              {!success && (
                <>
                <div className='container__modal__delete__news'>
                Êtes vous sur de vouloir supprimer cette news : {title} ?
                </div>
                <div className='container__modal__delete__button'>
                  <button onClick={handleDelete}>
                    Valider
                  </button>
                  <button onClick={openModalDelete}>
                    Annuler
                  </button>
                </div>
                </>
              )}
              {success && (
                  <>
                  <div className='container__modal__delete__msg'>
                    {msg}
                  </div>
                  <div className='container__modal__delete__button'>
                  <button onClick={backToNews}>
                    Back to News
                  </button>
                  </div>
                  </>
                )}
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default AdminDashboardNews;