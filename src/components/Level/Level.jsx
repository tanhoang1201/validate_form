function Level({ label }) {
    const color =
        label === 'High'
            ? ' border-blue-500  text-blue-500 bg-[#e6f7ff]'
            : label === 'Medium'
            ? ' border-red-500  text-red-500 bg-[#fff1f0]'
            : label === 'Low'
            ? 'border-green-500  text-white bg-slate-400'
            : ''

    const styles = ``
    return <div className={`${color} rounded px-1 border inline-block`}>{label}</div>
}

export default Level
