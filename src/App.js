import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import Attribution from './components/attribution';
import CartButton from './components/cart-button';
import Navbar from './components/navbar';
import Slideshow from './components/product-images';
import Description from './components/description';
import Price from './components/price';
import Quantity from './components/quantity';
const App = () => {
    const [productQuantity, setProductQuantity] = useState(0);
    const [resetQuantity, setResetQuantity] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { productQuantity: productQuantity, setProductQuantity: setProductQuantity }), _jsxs("div", { className: "lg:flex items-center", children: [_jsx(Slideshow, {}), _jsxs("div", { className: 'lg:w-5/12 mx-5', children: [_jsx(Description, {}), _jsx(Price, {}), _jsxs("div", { className: "block lg:flex items-baseline", children: [_jsx(Quantity, { count: productQuantity, setCount: setProductQuantity, reset: resetQuantity, setReset: setResetQuantity }), _jsx(CartButton, { productQuantity: productQuantity })] })] })] }), _jsx("p", { children: "Heyyyyy" }), _jsx(Attribution, {})] }));
};
export default App;
