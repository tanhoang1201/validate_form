import { useDispatch, useSelector } from 'react-redux'
import makeAnimated from 'react-select/animated'
import { v4 as uuid } from 'uuid'
import Select from 'react-select'

import { Controller, useForm } from 'react-hook-form'
import { todoRemainingSelector } from '../../redux/selector'
import { AddTodo } from '../../redux/actions'
import options from '../../data'
import TodoItem from '../TodoItem'
const animatedComponents = makeAnimated()

const handleStyles = {
    control: (styles) => ({ ...styles, borderRadius: 'none' }),
    option: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValue: (styles, { data }) => ({
        ...styles,
        color: 'white',
        backgroundColor: data.color,
    }),
    indicatorSeparator: (styles) => ({ ...styles, width: '0' }),
}

function Todo() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: { search: '' } })

    const dispatch = useDispatch()

    const todoList = useSelector(todoRemainingSelector)
    console.log(todoList)

    const handleValidate = (values) => {
        dispatch(
            AddTodo({
                id: uuid(),
                name: values.search,
                priority: values.priority.value,
                completed: false,
            })
        )
        reset({
            search: '',
            priority: options[1],
        })
    }
    return (
        <div className='flex flex-col flex-1'>
            <div className='flex flex-col gap-1 flex-1'>
                {todoList.map((item, index) => (
                    <TodoItem key={item.id} nameTodo={item.name} priority={item.priority} />
                ))}
            </div>
            <form onSubmit={handleSubmit(handleValidate)} className='flex items-center '>
                <input
                    placeholder='Enter Todo...'
                    className='p-1 border-gray-300ra border flex-1 outline-none focus:border-blue-500 focus:shadow-[0_0_0_2px_rgb(24,144,255,0.2)] h-full hover:border-[#40a9ff] transition-colors'
                    {...register('search', {
                        required: true,
                    })}
                />

                <div className='h-full'>
                    <Controller
                        name='priority'
                        render={({ field }) => {
                            return (
                                <Select
                                    {...field}
                                    components={animatedComponents}
                                    styles={handleStyles}
                                    options={options}
                                    menuPlacement={'auto'}
                                    onChange={(event) => field.onChange(event)}
                                />
                            )
                        }}
                        defaultValue={options[1]}
                        control={control}
                    />
                </div>
                <button
                    className='border-gray-300ra border px-4 text-white bg-blue-500 h-full hover:bg-blue-400'
                    type='submit'
                >
                    Add
                </button>
            </form>
            <p className='text-red-500'>{errors.search?.type && 'Please enter Todo...'}</p>
        </div>
    )
}

export default Todo
