import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

interface User {
    userId: string;
    name: string;
    email: string;
    token: string;
}

interface LoginFormProps {
    onLoginSuccess: (user: User) => void; // Define the type of the onLoginSuccess prop
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

    const [loading, setLoading] = useState(false);

    const showAlert = (message: string, type: string) => {
        setAlert({ visible: true, message, type });
        setTimeout(() => {
            setAlert({ visible: false, message: "", type: "" });
        }, 3000); // Hide alert after 3 seconds
    };

    const handleLogin = async (email: string, password: string) => {

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/auth/login-users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 401) {
                showAlert('Invalid Credentials', 'error');
                setLoading(false);
                return;
            }

            if (!response.ok) {
                showAlert('Internal Server Error, try later', 'error');
                setLoading(false);
                return;
            }

            const data = await response.json();

            const user: User = {
                userId: data.userId,
                name: data.name,
                email: data.email,
                token: data.token,
            };

            console.log(user)

            localStorage.setItem('token', user.token);
            localStorage.setItem('userId', JSON.stringify(user.userId));
            localStorage.setItem('email', user.email);
            localStorage.setItem('name', user.name);

            showAlert('Welcome!', 'success');

            setTimeout(() => {
                setLoading(false);
                onLoginSuccess(user);
            }, 1500);

        } catch (error) {
            console.error('There was a problem with the login request:', error);
            showAlert('There was a problem with the login request', 'error');
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!email || !password) {
            showAlert('Email and password are required', 'warning');
            return;
        }

        handleLogin(email, password);
    }

    return (
        <div>
            {alert.visible && (
                <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${alert.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {alert.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        style={{ border: "1px solid rgb(196, 196, 196)" }}
                        type="email"
                        className="w-full p-2 mt-1"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        style={{ border: "1px solid rgb(196, 196, 196)" }}
                        type="password"
                        className="w-full p-2 mt-1"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    style={{ border: "1px solid rgb(77, 77, 77)" }}
                    className="w-full bg-white text-black p-2 flex items-center justify-center space-x-2"
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <FaSignInAlt className="text-gray-700" />
                            <span>Login</span>
                        </div>
                    )}

                </button>
            </form>
        </div>

    )

}

export default LoginForm;