import { Button } from "@/components/ui/button";
import { NextPage } from "next";

const Login: NextPage = () => {
    return (
        <div>
            <h2>Welcome back</h2>
            <p>Sign in to your account to continue shopping</p>

            <form>
                <h3>Sign In</h3>
                <p>Enter your credentials to access your account</p>

                <div>
                    <label>Username</label>
                    <input
                    type="text"
                    placeholder="Enter your username"
                    />

                    <label>Password</label>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    />
                                    <Button>
                    Sign In
                </Button>
                </div>

                <div>
                    <p>Don't have an account? Try our demo:</p>
                    <Button>
                        Use Demo Account
                    </Button>
                    <p>Username: mor_2314 | Password: 83r5^_</p>

                    <div>
                        <Button>Go To Home</Button>
                    </div>
                </div>
            </form>
            <p>
                This is a demo application using the FakeStore API.
                Your data is not stored permanently.
            </p>
        </div>
    )
}

export default Login;