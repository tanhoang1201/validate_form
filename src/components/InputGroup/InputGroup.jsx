function InputGroup({ label, ...rest }) {
    return (
        <div className="flex flex-col gap-[2px]">
            <label className="font-semibold cursor-pointer" htmlFor={rest.id}>
                {label}
            </label>
            <input
                type="text"
                {...rest}
                className=" outline-none p-3 rounded-md border focus:border-blue-500 transition-colors"
            />
            <p className="text-red-500 text-sm">{"error messages"}</p>
        </div>
    );
}

export default InputGroup;
