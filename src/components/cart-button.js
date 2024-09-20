import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
function CartButton({ productQuantity }) {
    const [statusMessage, setStatusMessage] = useState("");
    const handleCartClick = () => {
        if (productQuantity > 0) {
            setStatusMessage("Product successfully added to cart.");
        }
        else {
            setStatusMessage("Please select a quantity before adding to cart.");
        }
    };
    return (_jsxs("div", { children: [_jsxs("button", { onClick: handleCartClick, className: "cart-button m-auto flex justify-center gap-x-2 bg-orange-500 hover:bg-orange-400 rounded-lg font-semibold py-2 lg:py-3 space-x-3 w-4/5 lg:w-60", children: [_jsx("img", { src: "/src/images/icon-cart-2.svg", alt: "" }), " Add to cart"] }), _jsx("p", { className: `text-sm mt-2 text-center ${productQuantity > 0 ? 'text-green-500' : 'text-red-500'}`, children: statusMessage })] }));
}
export default CartButton;
