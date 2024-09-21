import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import productThumbnail from '../images/image-product-3-thumbnail.jpg';
import logo from "../images/logo.svg";

type NavbarProps = {
    productQuantity: number;
    setProductQuantity: React.Dispatch<React.SetStateAction<number>>; // Allows updating quantity from outside
};

const Navbar: React.FC<NavbarProps> = ({ productQuantity, setProductQuantity }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [productName] = useState<string>('Fall Limited Edition Sneakers');
    const productPrice = 125; // Example price for each product
    const productImage = "https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0";

    // Function to handle product removal (set quantity to 0)
    const handleRemoveProduct = () => {
        setProductQuantity(0);
    };

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <nav className="bg-gray-100 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black mt-1 md:hidden">
                        ☰
                    </button>
                    <img src={logo} alt="" />
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-black">Collections</a>
                    <a href="#" className="text-black">Men</a>
                    <a href="#" className="text-black">Women</a>
                    <a href="#" className="text-black">About Us</a>
                    <a href="#" className="text-black">Contact</a>
                </div>
                <div className="flex items-center relative">
                    <div className="relative">
                        <img
                            src="../images/icon-cart.svg"
                            alt="Cart Icon"
                            className="mr-2 cursor-pointer"
                            onClick={handleCartClick}
                        />
                        {productQuantity > 0 && (
                            <span className="absolute top-3 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {productQuantity}
                            </span>
                        )}
                    </div>
                    {isCartOpen && (
                        <div className="absolute right-0 top-8 lg:top-6 rounded-lg z-10 bg-white shadow-md p-4 mt-4" style={{ width: '345px', height: 'auto' }}>
                            <h2 className="text-lg font-bold mb-2">Cart</h2>
                            <hr />
                            {productQuantity > 0 ? (
                                <div className="cartbox-content text-gray-500 font-semibold">
                                    <div className="flex justify-between items-center">
                                        {/* Product Image */}
                                        <img src={productImage} alt="Product" className="w-12 h-12 rounded" />
                                        <div className="flex-grow px-4">
                                            {/* Product Name and Quantity */}
                                            <p className="font-bold">{productName}</p>
                                            <p className="text-sm text-gray-600">${productPrice.toFixed(2)} x {productQuantity} <span className="font-bold text-black">${(productPrice * productQuantity).toFixed(2)}</span></p>
                                        </div>
                                        {/* Delete Icon Button */}
                                        <button onClick={handleRemoveProduct} className="text-red-600 hover:text-red-800">
                                            🗑️
                                        </button>
                                    </div>
                                    {/* Checkout Button */}
                                    <a href="https://animated-selkie-9bbe19.netlify.app/" className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 w-full rounded-lg block text-center">
                                        Checkout
                                    </a>
                                </div>
                            ) : (
                                <p className="cartbox-content text-gray-500 font-semibold">Your cart is empty</p>
                            )}
                        </div>
                    )}
                    {/* User Avatar Image */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt="User Avatar"
                                    src="../images/image-avatar.png"
                                    className="h-8 w-8 rounded-full cursor-pointer"
                                />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <MenuItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                    Your Profile
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                    Settings
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                    Sign out
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>

                </div>
            </div>
            <div className={`fixed z-10 top-0 left-0 h-full w-64 bg-neutral-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 p-4">✕</button>
                <a href="#" className="block text-black font-bold p-4">Collections</a>
                <a href="#" className="block text-black p-4">Men</a>
                <a href="#" className="block text-black p-4">Women</a>
                <a href="#" className="block text-black p-4">About Us</a>
                <a href="#" className="block text-black p-4">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
