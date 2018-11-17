import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING} from '../actions/types';

const initialState = {
    items: [],
    loading: false,
    message: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload,
                loading: false
            };
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload),
                message: 'Successfully deleted item from list ... !!!'

            };
        case ADD_ITEMS:
            return {
                ...state,
                items: [payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}