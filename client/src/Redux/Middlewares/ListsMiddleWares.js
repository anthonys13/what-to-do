import { AXIOS_LISTS, ACTION_DELETE_LIST, actionSetLists, filteredList } from '../Actions/ListsActions'
import { requestLists, axiosDeleteLists } from '../Requests/Requests';

const ListsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case AXIOS_LISTS:

            try {
                const responseList = await requestLists();
                // console.log('responseList =', responseList)
                store.dispatch(
                    actionSetLists(responseList),
                );
            }
            catch (err) {
                console.error(err);
            }

            break;
        case ACTION_DELETE_LIST:
            // console.log(action.payload.id);
            try {
                const responseAxiosDeleteLists = await axiosDeleteLists(action.payload.id);
                console.log('store', store.list)
                if (responseAxiosDeleteLists) {
                    store.dispatch(
                        filteredList(action.payload.id)
                    );
                }
            }
            catch (err) {
                console.error(err);
            }

            break;
        default:
            next(action);
    }
};

export default ListsMiddleware;