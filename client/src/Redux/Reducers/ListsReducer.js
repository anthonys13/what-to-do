import { SET_LISTS, FILTERED_LIST, FILTERED_CARD } from "../Actions/ListsActions";

export const initialState = {
    list: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LISTS:
            // console.log('JE SUIS DANS SET_LISTS');
            // console.log(action.payload.list);
            return {
                ...state,
                list: action.payload.list,
            }
        case FILTERED_LIST:
            // console.log('JE SUIS DANS FILTERED_LIST');
            const fileredList = state.list.filter(filterList => filterList.id !== action.id)
            // console.log('fileredList= ', fileredList);
            return {
                ...state,
                list: fileredList
            }
        case FILTERED_CARD:
            console.log('JE SUIS DANS FILTERED_CARD')
            // console.log(state.list);

            const oneList = state.list.find(findedList => findedList.id === action.payload.list_id)
            
            const index = (state.list.findIndex(listIndex => listIndex.id === action.payload.list_id))

            const filteredCardOnOneList = oneList.cardsList.filter(filterCardsList => filterCardsList.id !== action.payload.id)
            oneList.cardsList = filteredCardOnOneList

            const newState = state.list
            newState[index] = oneList

            return {
                ...state,
                list: newState
            }
        default:
            return state;
    }
};


export default reducer;
