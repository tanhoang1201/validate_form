import { createSelector } from 'reselect'

const filterSearch = (state) => state.filters.search
const todoSelector = (state) => state.todoList

const todoRemainingSelector = createSelector(todoSelector, filterSearch, (todoList, search) => {
    return todoList.filter((todo) => todo.name.includes(search))
})

export { todoRemainingSelector }
