export const AXIOS_LISTS = () => ({ type: AXIOS_LISTS });

/**
 * Action pour demander aux reducers de sauvegarder le tableau de recette
 * @param {Array<Object>} axiosLists tableau de recette
 * @returns {Action}
 */
export const actionSetLists = (axiosLists) => ({
    type: AXIOS_LISTS,
    payload: axiosLists,
});