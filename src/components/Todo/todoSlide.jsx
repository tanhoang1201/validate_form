const initialState = [
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
]

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]

        default:
            return state
    }
}

export default todoReducer
