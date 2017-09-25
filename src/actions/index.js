export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const KEY = 'test_key_123'

export function fetchPosts() {
  const request = fetch(`${ROOT_URL}/posts?key=${KEY}`)
    .then(response => response.json())
    .catch(error => console.log('ERROR', error))

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPost(id) {
  const request = fetch(`${ROOT_URL}/posts/${id}?key=${KEY}`)
    .then(response => response.json())
    .catch(error => console.log('ERROR', error))

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = fetch(`${ROOT_URL}/posts?key=${KEY}`,
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(() => callback())
    .catch(error => console.log('ERROR', error))

  return {
    type: CREATE_POST,
    payload: request
  }
}
