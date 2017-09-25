import _ from 'lodash'
import { FETCH_POST, FETCH_POSTS } from '../actions'


export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id')

    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload }

    default:
      return state
  }
}
