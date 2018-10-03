
import * as API from '../utils/api'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'


export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch =>
    API.getCategories().then(categories =>
        dispatch(getCategories(categories))
    )

export function addPost ({post} ){
    return {
        type: ADD_POST,
        post,
    }
}

export function removePost ({ post} ){
    return {
        type: REMOVE_POST,
        post,
    }
}

export function addComment ({comment} ){
    return {
        type: ADD_COMMENT,
        comment,
    }
}