function InputGroup({ label, register, elementType = "input", error, name, className, ...rest }) {
	let Com = elementType;
	return (
		<div className="flex flex-col gap-[2px]">
			{label && (
				<label className="font-semibold cursor-pointer" htmlFor={rest.id}>
					{label}
				</label>
			)}
			<Com
				{...rest}
				{...register(name)}
				className={`outline-none p-3 rounded-md border focus:border-blue-500 transition-colors ${className}`}
			></Com>
			{error && <p className="text-red-500 text-sm">{"error messages"}</p>}
		</div>
	);
}

export default InputGroup;
