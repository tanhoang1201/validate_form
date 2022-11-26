import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import 'pretty-checkbox/src/pretty-checkbox.scss'
import { useDispatch } from 'react-redux'

import options from '../../data'
import { SearchChange } from '../../redux/actions'
import * as Icon from '../Icon'
import InputGroup from '../InputGroup'

const animatedComponents = makeAnimated()

const handleStyles = {
    option: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValue: (styles, { data }) => ({
        ...styles,
        color: 'white',
        backgroundColor: data.color,
    }),
}
function Filters() {
    const dispatch = useDispatch()
    const handleSearchChange = (e) => {
        dispatch(SearchChange(e.target.value))
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <label className='font-semibold'>Search</label>
                <div className='flex bg-white'>
                    <input
                        placeholder='Input search text...'
                        className='p-[5px]  border border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgb(24,144,255,0.2)] outline-none transition-colors hover:border-[#40a9ff] flex-1 bg-transparent'
                        onChange={handleSearchChange}
                    />
                    <button className='border border-gray-300 border-l-transparent p-2 hover:border-[#40a9ff] transition-colors text-[#666] hover:border-l-transparent'>
                        <Icon.SearchIcon />
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold'>Filter By Status</h2>
                <div className='flex justify-start gap-4'>
                    <InputGroup name='filter' label='All' />
                    <InputGroup name='filter' label='Completed' />
                    <InputGroup name='filter' label='To do' />
                </div>
            </div>
            <div>
                <Select
                    styles={handleStyles}
                    isSearchable
                    options={options}
                    isMulti
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                />
            </div>
        </div>
    )
}

export default Filters
