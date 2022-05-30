import { AXIOS_LISTS, ACTION_DELETE_LIST, ACTION_DELETE_CARD, actionSetLists, filteredList, filteredCard, actionAxiosLists } from '../Actions/ListsActions'
import { requestLists, axiosDeleteLists, axiosDeleteCards } from '../Requests/Requests';

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
                // console.log('store', store.list)
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
        case ACTION_DELETE_CARD:
            // console.log(action);
            try {
                const responseAxiosDeleteCards = await axiosDeleteCards(action.payload.id);
                // console.log('store', store.card)
                if (responseAxiosDeleteCards) {
                    store.dispatch(
                        filteredCard(action.payload.id, action.payload.list_id)
                        // actionAxiosLists()
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