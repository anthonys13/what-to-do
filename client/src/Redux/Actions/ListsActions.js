export const AXIOS_LISTS = 'AXIOS_LISTS'
export const SET_LISTS = 'SET_LISTS'
export const ACTION_DELETE_LIST = 'DELETE_LIST'

export const actionAxiosLists = () => ({ type: AXIOS_LISTS })
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