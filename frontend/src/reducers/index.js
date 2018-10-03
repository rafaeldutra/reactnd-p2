import { combineReducers } from 'redux'

import{
    GET_CATEGORIES,
    ADD_POST,
    REMOVE_POST,
    ADD_COMMENT
} from '../actions'


const initialState = []

function categories (state = initialState, action){
    switch(action.type){
        case GET_CATEGORIES : 
            return action.categories
        default : 
            return state
    }
}

function comments (state = {}, action) {
    switch(action.type) {
        case ADD_COMMENT : 
            return {
                ...state,
                ...action.comment,
            }
        default :
            return state
    }
}



// {
//     //categories: [],
//         posts: [
           
//            { post1: {
//            title: null
//         }},
//         ],
// }

function posts(state = initialState, action){
    switch (action.type){
        case ADD_POST :
            return {
                posts: {
                    ...state.posts,
                    ...action.post,
                }
            }
        // case REMOVE_POST :
        //     return {
        //         ...state,
        //         [posts]: {
        //             ...state[post],
        //             [post.deleted]: true,
        //         },
                // [comments]: {
                //     ...state[comment],
                //     [comment.parentDeleted]: true,
                // }
            //}
        default :
            return state
    }
}



export default combineReducers({
    categories,
    comments,
    posts,
})