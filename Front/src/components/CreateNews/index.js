/* Package imports */
import React, { useState } from 'react';

/* Local imports */
import newsDefault from '../../assets/images/newsDefault.png';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';

// Components

const CreateNews = ({ title, handleChange, handleSubmit, subtitle, content }) => {

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
  }

  // Handle Value file image
  const onSelectFile = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    };
  }

  // Handle submit image
  const onSubmit = async (event) => {
    event.preventDefault();
    const canvas = await getCanvasImage(image);
    const canvasDataUrl = canvas.toDataURL('image/jpeg');
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'news-picture.jpeg');
    handleSubmit(convertedUrlToFile);
  }

  return(
    <div className='createnews'>
      <div className='container'>
        <div className='container__title'>
         <h1> Create news </h1>
        </div>
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
        <div className='container__form__image'>
            <img src={newsImg()} alt='user profile img' />
        </div>
        <label className='container__form__label__img' htmlFor='upload__photo'>Select Img</label>
          <input
          id='upload__photo'
          onChange={onSelectFile}
          className='container__form__input__img'
          type='file'
          name='imgprof'
          accept="image/*"
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
        <button className='container__form__button'>
          Valider
        </button>
      </form>
      </div>
      
    </div>
  )
};

export default CreateNews;