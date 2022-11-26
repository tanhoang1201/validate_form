const initialState = {
    search: '',
    status: 'All',
    priority: [],
}

function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filter/searchChange':
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}

export default filtersReducer
