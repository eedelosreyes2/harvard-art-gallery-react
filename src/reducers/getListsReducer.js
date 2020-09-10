const getListsReducer = (state = [], action) => {
    switch (action.type) {
        case "GETLISTS":
            return []; // get lists from api
        default:
            return state;
    }
};

export default getListsReducer;
