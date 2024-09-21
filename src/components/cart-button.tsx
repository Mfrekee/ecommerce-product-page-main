import { useState } from "react";
import blackCartIcon from "../images/icon-cart-2.svg";

interface CartButtonProps {
    productQuantity: number;
}

function CartButton({ productQuantity }: CartButtonProps) {
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleCartClick = () => {
        if (productQuantity > 0) {
            setStatusMessage("Product successfully added to cart.");
        } else {
            setStatusMessage("Please select a quantity before adding to cart.");
        }
    };

    return (
        <div>
            <button
                onClick={handleCartClick}
                className="cart-button m-auto flex justify-center gap-x-2 bg-orange-500 hover:bg-orange-400 rounded-lg font-semibold py-2 lg:py-3 space-x-3 w-4/5 lg:w-60"
            >
                <img src={blackCartIcon} alt="" /> Add to cart
            </button>
            <p className={`text-sm mt-2 text-center ${productQuantity > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
            </p>
        </div>
    );
}

export default CartButton;
