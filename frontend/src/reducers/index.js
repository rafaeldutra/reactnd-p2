import{
    GET_ALL_CATEGORIES,
    ADD_POST,
    REMOVE_POST,
} from '../actions'

const initialCategorieState = {
    categories: null,
    posts: [
        {
            id: null,
            timestamp: null,
            title: null,
            body: null,
            author: null,
            category: null,
            voteScore: 1,
            deleted: false,

        },
    ],
    comments: [
        {
            id: null,
            parentId: null,
            timestamp: null,
            body: null,
            author: null,
            voteScore: 1,
            deleted: false,
            parentDeleted: false
        }
    ]

}

function posts(state = initialCategorieState, action){
    const { post } = action
    switch (action.type){
        case ADD_POST :
            return {
                ...state,
                [posts]: { post }
            }
        case REMOVE_POST :
            return {
                ...state,
                [posts]: {
                    ...state[post],
                    [post.deleted]: true,
                },
                [comments]: {
                    ...state[comment],
                    [comment.parentDeleted]: true,
                }
            }
        default :
            return state
    }
}



export default posts