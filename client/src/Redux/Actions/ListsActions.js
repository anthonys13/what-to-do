export const AXIOS_LISTS = 'AXIOS_LISTS'
export const SET_LISTS = 'SET_LISTS'
export const ACTION_DELETE_LIST = 'DELETE_LIST'
export const FILTERED_LIST = 'FILTERED_LIST'

export const actionAxiosLists = () => ({ type: AXIOS_LISTS })

export const filteredList = (id) => ({
    type: FILTERED_LIST,
    id: id
})

export const actionDeleteLists = (id) => ({
    type: ACTION_DELETE_LIST,
    payload: {
        id: id
    }
})

export const actionSetLists = (axiosLists) => ({
    type: SET_LISTS,
    payload: axiosLists,
});