const getWorksReducer = (state = [], action) => {
    switch (action.type) {
        case "GETWORKS":
            return []; // get data from api
        default:
            return state;
    }
};

export default getWorksReducer;
