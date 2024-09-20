import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
function Quantity({ count, setCount, reset, setReset }) {
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    // Reset quantity when product is deleted
    useEffect(() => {
        if (reset) {
            setCount(0);
            setReset(false); // Reset the reset state to avoid triggering again
        }
    }, [reset, setReset, setCount]);
    return (_jsxs("div", { className: "flex bg-neutral-100 rounded-lg justify-between items-center mx-8 my-4 lg:items-end lg:w-36 lg:py-2", children: [_jsx("button", { onClick: handleDecrement, className: "text-orange-500 font-bold text-2xl pl-4", children: "-" }), _jsx("p", { className: "font-bold text-lg", children: count }), _jsx("button", { onClick: handleIncrement, className: "text-orange-500 font-bold text-2xl pr-4", children: "+" })] }));
}
export default Quantity;
