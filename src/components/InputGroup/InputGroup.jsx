function InputGroup({ label, ...rest }) {
    return (
        <div className='pretty p-default p-round p-has-focus p-pulse'>
            <input type='radio' {...rest} />
            <div className='state p-primary-o'>
                <label>{label}</label>
            </div>
        </div>
    )
}

export default InputGroup
