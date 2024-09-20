import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '/src/index.css';
function Price() {
    return (_jsxs("div", { className: 'flex justify-between mx-5 lg:block', children: [_jsxs("div", { className: "discount-price flex justify-between items-center gap-2 font-bold lg:justify-normal", children: [_jsx("h2", { className: 'text-2xl', children: "$125.00" }), _jsx("p", { className: "bg-black text-white rounded-lg px-2 ", children: "50%" })] }), _jsx("div", { className: "font-semibold original-price line-through text-gray-500", children: "$250.00" })] }));
}
export default Price;
