/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getTagsSuccess,
  createTagSuccess,
  deleteTagSuccess,
} from '../store/action';


/* Paws API Tags MiddleWare */
const Tags = (store) => (next) => (action) => {

  switch (action.type) {

    case 'GET_TAGS': {
      axios.get(`${apiUrl}/tag`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getTagsSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }
    case 'SUBMIT_TAG': {
      const { tags: { tag_name } } = store.getState();
      const config = {
        method: 'post',
        url: `${apiUrl}/tag`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          tag_name
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(createTagSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'DELETE_TAG': {
      const { tags: { tag_id } } = store.getState();
      const config = {
        method: 'delete',
        url: `${apiUrl}/tag/${tag_id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !==200) {
            throw response.error;
          } else {
            store.dispatch(deleteTagSuccess(response.data));
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

export default Tags;