import LoginForm from "@/components/auth/LoginForm";
import { NextPage } from "next";


const Login: NextPage = () => {
    return (
        <div className="text-center flex flex-col gap-8">
            <div>
                <h3 className="text-h3">Welcome back</h3>
                <p className="text-small text-text-secondary">
                    Sign in to your account to continue shopping
                </p>
            </div>

            <LoginForm />

            <p className="text-small text-text-secondary">
                This is a demo application using the FakeStore API.
                Your data is not stored permanently.
            </p>
        </div>
    )
}

export default Login;