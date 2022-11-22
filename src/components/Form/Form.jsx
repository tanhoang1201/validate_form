import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import InputGroup from "../InputGroup";

function Form() {
	const { register, handleSubmit } = useForm();

	const submitHandle = (values) => {
		console.log(values);
	};

	return (
		<div className="w-[300px] mx-auto mt-10">
			<h1 className="text-blue-600 text-xl font-bold text-center mb-5">Sign Up</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandle)}>
				<InputGroup
					placeholder="Enter your username..."
					label="Username"
					id="username"
					name="username"
					register={register}
				/>

				<InputGroup
					type="password"
					placeholder="Enter your password..."
					label="Password"
					id="password"
					name="password"
					register={register}
				/>

				<InputGroup
					placeholder="Enter your email address..."
					label="Email address"
					type="email"
					id="email"
					name="email"
					register={register}
				/>

				<div>
					<label className="font-semibold">Gender</label>
					<div className="flex justify-evenly">
						<div className="flex items-center gap-1">
							<InputGroup
								type="radio"
								name="gender"
								register={register}
								className="cursor-pointer"
								value="male"
							/>
							<span>Male</span>
						</div>
						<div className="flex items-center gap-1">
							<InputGroup
								type="radio"
								name="gender"
								register={register}
								className="cursor-pointer"
								value="female"
							/>
							<span>Female</span>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2 mt-4">
					<InputGroup type="checkbox" name="terms" register={register} className="cursor-pointer" />
					<span className="text-sm">I accept the terms and conditions</span>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white font-semibold text-lg rounded-md py-2 mt-4"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
