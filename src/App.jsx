import TodoItem from './components/TodoItem'
import Todo from './components/Todo'
import Filters from './components/Filters'
import Demo from './components/Demo/Demo'
function App() {
    return (
        <div className='bg-[blue] h-screen pt-8'>
            <div className='w-[500px] mx-auto shadow-lg p-5 h-[90vh] rounded-lg bg-white flex flex-col'>
                <h1 className='text-center font-bold text-2xl text-blue-500 mb-8'>
                    TODO APP with REDUX
                </h1>
                <Filters />
                <hr className='my-6 border-t border-green-500 ' />
                <Todo />
            </div>
        </div>
    )
}

export default App
