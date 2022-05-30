import { SET_LISTS, FILTERED_LIST } from "../Actions/ListsActions";

export const initialState = {
    list: []
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LISTS:
            // console.log('JE SUIS DANS SET_LISTS');
            return {
                ...state,
                list: action.payload
            }
        case FILTERED_LIST:
            // console.log('JE SUIS DANS SET_LISTS');
            const fileredList = state.list.filter(filterList => filterList.id !== action.id)
            return {
                ...state,
                list: fileredList
            }
        default:
            return state;
    }
};

export default reducer;
