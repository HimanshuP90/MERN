import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from '../actions/types';
import { type } from 'os';

const initialState = {
    items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milks'},
        {id: uuid(), name: 'Chocolate'},
        {id: uuid(), name: 'Biscuits'},
        {id: uuid(), name: 'Namkeen'}
    ] 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default: 
            return state;
    }
}