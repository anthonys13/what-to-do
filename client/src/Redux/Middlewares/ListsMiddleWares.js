import { AXIOS_LISTS, actionSetLists } from '../Actions/ListsActions'

const ListsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case AXIOS_LISTS:


            break;
        default:
            next(action);
    }
};

export default ListsMiddleware;