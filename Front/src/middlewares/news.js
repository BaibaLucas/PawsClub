/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getNewsSuccess,
  newsContentSuccess,
  imgNewsUploadSuccess,
  deleteNewsSuccess,
  updateNewsSuccess,
  newsDetailsSuccess
} from '../store/action';


/* Paws API News MiddleWare */
const News = (store) => (next) => (action) => {

  switch (action.type) {

    case 'GET_NEWS': {
      axios.get(`${apiUrl}/news`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log('allnews MW', response.data);
            store.dispatch(getNewsSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
      }
    case 'CREATE_NEWS': {
      const { 
        news: { title, subtitle, content, news_sectionId },
        auth: { id, token }
      } = store.getState();
      const formData = new FormData();
      formData.append('myImage', action.formData);
      const config = {
        method: 'post',
        url: `${apiUrl}/news`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
        data: {
          title,
          subtitle,
          content,
          news_sectionId,
          user_id: id,
        }
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log('OK ICI');
            const config2 = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Baerer ${token}`,
              } 
            };
            axios.post(`${apiUrl}/news/image/${response.data.data.id}`, formData, config2)
            .then((response) => {
              console.log('response after create', response.data);
              store.dispatch(newsContentSuccess(response.data, response.data.message));
            }).catch((error) => {
              console.log('Oups', error);
            });
          }
        }).catch((error) => {
          console.log(error, 'ERROR');
        });
      break;
    };

    case 'UPDATE_IMG_NEWS': {
      const { 
        news: { id },
        auth: { token }
      } = store.getState();
      const formData = new FormData();
      formData.append(`myImage`, action.formData);
      const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Baerer ${token}`,
      }
      };
      axios.post(`${apiUrl}/news/image/${id}`, formData, config)
        .then((response) => {
          console.log('The file is successfully uploaded');
          console.log('response.data --->', response.data);
          console.log("imgProfile---->", response.data.data.profilurl);
          console.log('message', response.data.message);
          store.dispatch(imgNewsUploadSuccess(response.data.data, response.data.message));
        }).catch((error) => {
          console.log('Oups', error);
        });
      break;
    };

    case 'UPDATE_NEWS': {
      const { news: { id, title, subtitle, content },
      auth : { token }
    } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/news/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`
        },
        data: {
          title,
          subtitle,
          content,
        },
      };
      axios(config)
        .then((response) => {
          console.log('ICI');
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(updateNewsSuccess(response.data));
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    case 'DELETE_NEWS': {
      const { news: { id },
      auth : { token }
     } = store.getState();
      const config = {
        method: 'delete',
        url: `${apiUrl}/news/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !==200) {
            throw response.error;
          } else {
            store.dispatch(deleteNewsSuccess(response.data));
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    case 'GET_NEWS_DETAILS': {
      axios.get(`${apiUrl}/news/${action.id}`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log('GET NEWS DETAILS', response.data);
            store.dispatch(newsDetailsSuccess(response.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
      }

    default: 
      next(action);
  }

};

export default News;