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
      console.log(apiUrl);
      console.log(process.env.NODE_ENV);
      axios.get(`${apiUrl}/news`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getNewsSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
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
            const config2 = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Baerer ${token}`,
              } 
            };
            axios.post(`${apiUrl}/news/image/${response.data.data.id}`, formData, config2)
            .then((response) => {
              store.dispatch(newsContentSuccess(response.data, response.data.message));
            }).catch((error) => {
              console.log(error);
            });
          }
        }).catch((error) => {
          console.log(error);
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
          store.dispatch(imgNewsUploadSuccess(response.data.data, response.data.message));
        }).catch((error) => {
          console.log(error);
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
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(updateNewsSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
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
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'GET_NEWS_DETAILS': {
      axios.get(`${apiUrl}/news/${action.id}`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(newsDetailsSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
      }

      case 'GET_NEWS_DETAILS_BY_SLUG': {
        axios.get(`${apiUrl}/news/${action.slug}`)
          .then((response) => {
            if (response.status !== 200) {
              throw response.error;
            } else {
              store.dispatch(newsDetailsSuccess(response.data));
            }
          }).catch((error) => {
            console.log(error);
          });
          break;
        }

    default: 
      next(action);
  }

};

export default News;