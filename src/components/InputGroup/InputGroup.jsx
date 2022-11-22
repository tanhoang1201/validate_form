function InputGroup({
    label,
    register,
    elementType = "input",
    noLabel,
    noError,
    ...rest
}) {
    let Com = elementType;
    return (
        <div className="flex flex-col gap-[2px]">
            {noLabel ?? (
                <label
                    className="font-semibold cursor-pointer"
                    htmlFor={rest.id}
                >
                    {label}
                </label>
            )}
            <Com
                {...rest}
                {...register(rest.id)}
                className=" outline-none p-3 rounded-md border focus:border-blue-500 transition-colors"
            ></Com>
            {noError ?? (
                <p className="text-red-500 text-sm">{"error messages"}</p>
            )}
        </div>
    );
}

export default InputGroup;
