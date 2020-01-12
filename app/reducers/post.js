// @flow
import {
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  LOAD_SUBREDDITS,
  SELECT_POST
} from '../actions/posts';

const initialState = {
  posts: [],
  subreddits: [],
  loading: true
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      };
    case SELECT_POST:
      return {
        ...state,
        title: state.posts[action.id].title,
        karma: state.posts[action.id].ups
      };
    case LOAD_POST_START:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUBREDDITS:
      return {
        ...state,
        subreddits: action.subreddits,
        loading: false
      };
    default:
      return state;
  }
}
