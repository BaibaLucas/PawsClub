/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getNewsSuccess,
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
            store.dispatch(getNewsSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
      }
    case 'CREATE_NEWS': {
      const { 
        news: { title, subtitle, content },
        auth: { id, token }
      } = store.getState();
      const formData = new FormData();
      formData.append(`myImage`, action.formData);
      const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Baerer ${token}`,
      },
      data: {
        title,
        subtitle,
        content,
        user_id: id,
      },
      };
      axios.post(`${apiUrl}/news`, formData, config)
        .then((response) => {
          console.log('The file is successfully uploaded');
          console.log('response.data --->', response.data);
          console.log("imgProfile---->", response.data.data.profilurl);
          console.log('message', response.data.message);
          // store.dispatch(imgUploadSuccess(response.data.data, response.data.message));
        }).catch((error) => {
          console.log('Oups', error);
        });
      break;
    };

    default: 
      next(action);
  }

};

export default News;