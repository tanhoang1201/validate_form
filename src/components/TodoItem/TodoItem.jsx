import Level from '../Level'

function TodoItem({ nameTodo, priority }) {
    return (
        <div className='flex items-center'>
            <div className='pretty p-svg p-curve p-smooth'>
                <input type='checkbox' />
                <div className='state p-primary'>
                    <svg className='svg svg-icon' viewBox='0 0 20 20' stroke='white' fill='white'>
                        <path d='M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z'></path>
                    </svg>
                    <label>{nameTodo}</label>
                </div>
            </div>
            <div className='ml-auto'>
                <Level label={priority} />
            </div>
        </div>
    )
}

export default TodoItem
