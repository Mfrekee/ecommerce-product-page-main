import { useState, useEffect } from "react";

interface QuantityProps {
    count: number;
    setCount: (count: number) => void;
    reset: boolean;
    setReset: (reset: boolean) => void;
}

function Quantity({ count, setCount, reset, setReset }: QuantityProps) {
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

    return (
        <div className="flex bg-neutral-100 rounded-lg justify-between items-center mx-8 my-4 lg:items-end lg:w-36 lg:py-2">
            <button onClick={handleDecrement} className="text-orange-500 font-bold text-2xl pl-4">-</button>
            <p className="font-bold text-lg">{count}</p>
            <button onClick={handleIncrement} className="text-orange-500 font-bold text-2xl pr-4">+</button>
        </div>
    );
}

export default Quantity;
