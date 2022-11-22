import InputGroup from "../InputGroup";

function Form() {
    return (
        <div className="w-[300px] mx-auto mt-10">
            <h1 className="text-blue-600 text-xl font-bold text-center mb-5">
                Sign Up
            </h1>
            <form className="flex flex-col gap-[6px]">
                <InputGroup
                    placeholder="Enter your username..."
                    label="Username"
                    id="username"
                />

                <InputGroup
                    placeholder="Enter your password..."
                    label="Password"
                    id="password"
                />

                <InputGroup
                    placeholder="Enter your email address..."
                    label="Email address"
                    id="email"
                />
            </form>
        </div>
    );
}

export default Form;
