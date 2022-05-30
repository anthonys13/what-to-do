import { SET_LISTS } from "../Actions/ListsActions";

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
        default:
            return state;
    }
};

export default reducer;
