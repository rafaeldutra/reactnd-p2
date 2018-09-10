import{
    GET_ALL_CATEGORIES,
    ADD_POST,
    REMOVE_POST,
} from '../actions'

const initialState = {
    //categories: [],
        posts: {},
       // comments: [],
    //     post:{
    //         id: null,
    //         timestamp: null,
    //         title: null,
    //         body: null,
    //         author: null,
    //         category: null,
    //         voteScore: 1,
    //         deleted: false,

    //     },
    // comments: [
    //     {
    //         id: null,
    //         parentId: null,
    //         timestamp: null,
    //         body: null,
    //         author: null,
    //         voteScore: 1,
    //         deleted: false,
    //         parentDeleted: false
    //     }
    //]

}

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



export default posts