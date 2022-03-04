/* Package imports */
import React, { useState } from 'react';
import { MdNextPlan } from 'react-icons/md';

/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';

// Components

const ImgProfil = ({ handleSubmit }) => {

  // Set Avatar
  const [image, setImage] = useState(null);


  // If user haven't profile picture return default pic
  const usrImg = () => {
    if (image === null) {
      return defaultPic
    } else {
      return image;
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
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'profil-picture.jpeg');
    handleSubmit(convertedUrlToFile);
  }

  return(
    <div className='imgprofil'>
      <div className='imgprofil__container'>
        <div className='imgprofil__container__title'>
          Upload Profil Pic
        </div>
        <form className='imgprofil__container__form' encType='multipart/form-data' onSubmit={onSubmit}>
          {/* display profil picture when user select files */}
          <div className='imgprofil__container__form__image'>
            <img src={usrImg()} alt='user profile img' />
          </div>
        <label className='imgprofil__container__form__label' htmlFor='upload__photo'>Select File</label>
          <input
          id='upload__photo'
          onChange={onSelectFile}
          className='imgprofil__container__form__input'
          type='file'
          name='imgprof'
          accept="image/*"
          />
          <button className='imgprofil__container__form__button' type='submit'>
            Valider
          </button>
        </form>
      </div>
    </div>
  )
}

export default ImgProfil;