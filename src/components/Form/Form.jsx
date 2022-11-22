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
            <h1 className="text-blue-600 text-xl font-bold text-center mb-5">
                Sign Up
            </h1>
            <form
                className="flex flex-col gap-[6px]"
                onSubmit={handleSubmit(submitHandle)}
            >
                <InputGroup
                    placeholder="Enter your username..."
                    label="Username"
                    id="username"
                    register={register}
                />

                <InputGroup
                    placeholder="Enter your password..."
                    label="Password"
                    id="password"
                    register={register}
                />

                <InputGroup
                    type="email"
                    placeholder="Enter your email address..."
                    label="Email address"
                    id="email"
                    register={register}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold text-lg rounded-md py-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
