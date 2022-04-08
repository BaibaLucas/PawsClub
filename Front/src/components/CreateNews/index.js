/* Package imports */
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/* Local imports */
import newsDefault from '../../assets/images/newsDefault.png';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';

// Components

const CreateNews = ({ title, handleChange, handleSubmit, handleImgSubmit, subtitle, content, tag, next, logged, msg, success, handleSuccess }) => {


  /** Redirect to /login if user is not logged */
  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) {
      return navigate("/login");
    }
  });

  /* Handle Change */
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name)
  };


  // Set imgNews
  const [image, setImage] = useState(null);

  /**  NewsImg
  - If user select picture return this
  - else user havn't select picture and havn't imgnews upload return default pic.
  */
  const newsImg = () => {
    if (image !== null) {
      return image
    } else {
      return newsDefault;
    }
  };

  // Handle Value file image
  const onSelectFile = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    };
  };

  // Handle submit image
  const onImgSubmit = async (event) => {
    event.preventDefault();
    const canvas = await getCanvasImage(image);
    const canvasDataUrl = canvas.toDataURL('image/jpeg');
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'news-picture.jpeg');
    handleImgSubmit(convertedUrlToFile);
  };

  // Handle submit
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  // Refresh Success statue for reset message
  const refreshStatus = () => {
    handleSuccess();
  };

  return(
    <div className='createnews'>
      <div className='container'>
        <div className='container__title'>
         <h1> Create news </h1>
        </div>
        {!next && (
          <form className='container__form' onSubmit={onSubmit}>
            <label className='container__form__label'>
              Title
            </label>
            <input
            className='container__form__input'
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
            />
            <label className='container__form__label'>
              SubTitle
            </label>
            <input
            className='container__form__input'
            type='text'
            name='subtitle'
            id='subtitle'
            placeholder='Subtitle'
            value={subtitle}
            onChange={onChange}
            />
            <label className='container__form__label'>
              Tag
            </label>
            <input
            className='container__form__input'
            type='text'
            name='tag'
            id='tag'
            placeholder='Tag'
            value={tag}
            onChange={onChange}
            />
            <label className='container__form__label'>
              Content
            </label>
            <textarea
            className='container__form__textarea'
            type='text'
            name='content'
            id='content'
            placeholder='Content'
            value={content}
            onChange={onChange}
            />
            <button className='container__form__button' type='submit'>
              Valider
            </button>
          </form>
        )}
        {next && (
          <form className='container__form' onSubmit={onImgSubmit}>
            <div className='container__form__image'>
              <img src={newsImg()} alt='user profile img' />
            </div>
            {!success && (
              <>
              <label className='container__form__label__img' htmlFor='upload__photo'>Select Img</label>
              <input
              id='upload__photo'
              onChange={onSelectFile}
              className='container__form__input__img'
              type='file'
              name='imgprof'
              accept="image/*"
              />
           <button className='container__form__button' type='submit'>
            Valider
           </button>
            </>
            )}
           {success && (
          <>
          <div className='imgprofil__container__form__msg'>{msg}</div>
          <NavLink to='/news' >
          <button onClick={refreshStatus}> News </button>
          </NavLink>
          </>
         )}
          </form>
        )}
      </div>
      
    </div>
  )
};

export default CreateNews;