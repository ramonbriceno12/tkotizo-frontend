
import { FaHome, FaBox, FaInfoCircle, FaPhone, FaSignInAlt, FaUser, FaUserCircle, FaSignOutAlt, FaTimes, FaBars, FaPlus, FaList } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import Image from 'next/image';

interface User {
    userId: string;
    name: string;
    email: string;
    token: string;
}

const Navbar = () => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem('name') || '');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

    const showAlert = (message: string, type: string) => {
        setAlert({ visible: true, message, type });
        setTimeout(() => {
            setAlert({ visible: false, message: "", type: "" });
        }, 3000); // Hide alert after 3 seconds
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
        setIsRegister(false);
    };

    const handleLoginSuccess = (user: User) => {
        console.log('Pasamos por aqui')
        setUserName(user.name);
        closeModal();
    };

    const handleRegisterSuccess = (user: User) => {
        setUserName(user.name);
        closeModal();
    };

    const toggleForm = () => setIsRegister(!isRegister);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        setUserName('');
        setIsDropdownOpen(false);
    };

    const openPurchaseOrderModal = () => {
        setIsPurchaseModalOpen(true);
    };

    const closePurchaseOrderModal = () => {
        setIsPurchaseModalOpen(false);
    };

    const handlePurchaseOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        formData.append('name', localStorage.getItem('name') || '');
        formData.append('email', localStorage.getItem('email') || '');

        try {

            const response = await fetch('http://localhost:8000/purchase-orders/clients/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Agregar el token Bearer en el encabezado
                },
                body: formData,
            });
            console.log(response)
            if (response.ok) {

                showAlert('Purchase order created successfully!', 'success');
                setTimeout(() => {
                    closePurchaseOrderModal();

                }, 1500);
            } else {
                showAlert('Failed to create purchase order.', 'error');
            }
        } catch (error) {
            console.error('Error creating purchase order:', error);
            showAlert('An error occurred while creating the purchase order.', 'error');
        }
    };


    return (
        <div>
            {alert.visible && (
                <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${alert.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {alert.message}
                </div>
            )}
            <nav className="flex justify-between items-center py-4 bg-white shadow-md p-8">
                <div className="text-2xl font-bold">
                    <Image src="/images/logos/logoazul.png" alt="Logo" width={150} height={150} />
                </div>
                <button
                    className="md:hidden p-4 focus:outline-none"
                    onClick={toggleNavbar}
                >
                    {isOpen ? <FaTimes className="text-gray-700" /> : <FaBars className="text-gray-700" />}
                </button>
                <ul className="hidden md:flex space-x-8">
                    <li className="flex items-center space-x-2">
                        <FaHome className="text-gray-700" />
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaBox className="text-gray-700" />
                        <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
                    </li>
                    <li className="flex items-center space-x-2">

                        <div className="flex items-center">
                            {userName ? (
                                <>
                                    <FaUser className="text-gray-700 mr-2" />
                                    <div className="text-gray-700 mr-4">{userName}</div>
                                    <a
                                        className="text-gray-700 cursor-pointer flex items-center mr-4"
                                        href="/purchase-orders"
                                    >
                                        <FaList className="text-gray-700 mr-2" />

                                        Mis cotizaciones
                                    </a>
                                    <button
                                        className="text-gray-700 cursor-pointer flex items-center mr-4"
                                        onClick={() => setIsPurchaseModalOpen(true)}
                                    >
                                        <FaPlus className="text-gray-700 mr-2" />

                                        Cotizar
                                    </button>
                                    <button
                                        className="text-gray-700 cursor-pointer flex items-center"
                                        onClick={handleLogout}
                                    >
                                        <FaSignOutAlt className="mr-2" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="text-gray-700 cursor-pointer flex items-center"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <FaUser className="text-gray-700 mr-2" />
                                    Login
                                </button>
                            )}
                        </div>

                    </li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <div className={`fixed inset-0 z-50 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center p-4 bg-white shadow-md">
                    <div className="text-2xl font-bold">
                        <Image src="/images/logos/logoazul.png" alt="Logo" width={50} height={50} />
                    </div>

                </div>
                <ul className="flex flex-col space-y-4 p-4">
                    <li className="flex items-center space-x-2">
                        <FaHome className="text-gray-700" />
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaBox className="text-gray-700" />
                        <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
                    </li>
                    <li className="relative">
                        {userName ? (
                            <div>
                                <div className="flex items-center space-x-2 cursor-pointer mb-4" onClick={toggleDropdown}>
                                    <FaUser className="text-gray-700" />
                                    <span className="text-gray-700">{userName}</span>
                                </div>
                                <a
                                    className="text-gray-700 cursor-pointer flex items-center mb-4"
                                    href="/purchase-orders"
                                >
                                    <FaList className="text-gray-700 mr-2" />

                                    Mis cotizaciones
                                </a>
                                <button
                                    className="text-gray-700 cursor-pointer flex items-center mb-4"
                                    onClick={() => setIsPurchaseModalOpen(true)}
                                >
                                    <FaPlus className="text-gray-700 mr-2" />

                                    Cotizar
                                </button>
                            </div>



                        ) : (
                            <div className="flex items-center space-x-2">
                                <FaSignInAlt className="text-gray-700" />
                                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={openModal}>Login</a>
                            </div>
                        )}
                        {isDropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute z-50 profile-dropdown right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg md:mt-2.5 md:mr-1.5"
                            >
                                <a
                                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    href="/purchase-orders"
                                >
                                    <FaList className="text-gray-700 mr-2" />

                                    Mis cotizaciones
                                </a>
                                <button
                                    className="text-gray-700 cursor-pointer flex items-center mr-4"
                                    onClick={() => setIsPurchaseModalOpen(true)}
                                >
                                    <FaPlus className="text-gray-700 mr-2" />

                                    Cotizar
                                </button>
                                <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    <FaSignOutAlt className="mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer space-x-2 mt-1.5 md:mt-0" onClick={toggleNavbar}>
                        <FaTimes className="text-gray-700" />
                        <span className="text-black-700 hover:text-black-900">Close</span>
                    </li>
                </ul>
            </div>
            {isModalOpen && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-12 w-1/2 max-w-3xl shadow-lg">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
                        <div>
                            {isRegister ? (
                                <>
                                    <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                                    <button onClick={toggleForm} className="mt-4 text-gray-500 hover:text-gray-700">Back to Login</button>
                                </>
                            ) : (
                                <>
                                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                                    <div className="flex justify-center items-center h-full mt-2">
                                        <a href="#" onClick={toggleForm} className="text-center text-gray-500 hover:text-gray-700">Don't have an account? Register</a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isPurchaseModalOpen && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-12 w-1/2 max-w-3xl shadow-lg">
                        <button onClick={closePurchaseOrderModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Crear orden de compra</h2>
                        <form onSubmit={handlePurchaseOrderSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                                    Archivo
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                                <span className="text-gray-500 text-sm">Solo JPG, PNG, Excel and PDF*</span>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Navbar;