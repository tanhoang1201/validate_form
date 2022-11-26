const initialState = {
    filters: {
        search: '',
        status: 'All',
        priority: [],
    },
    todoList: [
        {
            id: 1,
            name: 'Learn React',
            completed: false,
            priority: 'Medium',
        },
        {
            id: 2,
            name: 'Learn Redux',
            completed: false,
            priority: 'High',
        },
        {
            id: 3,
            name: 'Learn Typescript',
            completed: false,
            priority: 'Low',
        },
    ],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            }
        case 'filter/searchChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload,
                },
            }
        default:
            return state
    }
}

export default reducer
