export const AXIOS_LISTS = 'AXIOS_LISTS'
export const SET_LISTS = 'SET_LISTS'
export const ACTION_DELETE_LIST = 'DELETE_LIST'
export const ACTION_DELETE_CARD = 'ACTION_DELETE_CARD'
export const FILTERED_LIST = 'FILTERED_LIST'
export const FILTERED_CARD = 'FILTERED_CARD'

export const actionAxiosLists = () => ({ type: AXIOS_LISTS })

export const actionSetLists = (axiosLists) => ({
    type: SET_LISTS,
    payload: {
        list: axiosLists,
    },
});

export const filteredList = (id) => ({
    type: FILTERED_LIST,
    id
})

export const filteredCard = (id, list_id) => ({
    type: FILTERED_CARD,
    payload: {
        id,
        list_id
    }
})

export const actionDeleteLists = (id) => ({
    type: ACTION_DELETE_LIST,
    payload: {
        id
    }
})

export const actionDeleteCards = (id, list_id) => ({
    type: ACTION_DELETE_CARD,
    payload: {
        id,
        list_id
    }
})