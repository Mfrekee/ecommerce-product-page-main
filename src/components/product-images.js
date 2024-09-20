import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const images = [
    'src/images/image-product-1.jpg',
    'src/images/image-product-2.jpg',
    'src/images/image-product-3.jpg',
    'src/images/image-product-4.jpg',
];
const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const openLightbox = () => {
        setIsLightboxOpen(true);
    };
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "relative w-full lg:max-w-lg mx-auto", children: [_jsxs("div", { className: "relative w-full lg:h-full ", children: [_jsx("img", { src: images[currentIndex], alt: `Slide ${currentIndex + 1}`, className: "w-full h-full object-cover md:rounded-lg shadow-lg cursor-pointer", onClick: openLightbox }), _jsx("button", { onClick: prevSlide, className: "absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500", children: "\u276E" }), _jsx("button", { onClick: nextSlide, className: "absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500", children: "\u276F" })] }), _jsx("div", { className: "flex justify-evenly mt-4 space-x-2", children: images.map((image, index) => (_jsx("img", { src: image, alt: `Thumbnail ${index + 1}`, onClick: () => goToSlide(index), className: `w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform transform ${index === currentIndex ? 'scale-110 border-2 border-blue-500' : 'scale-100'}` }, index))) })] }), isLightboxOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50", children: _jsxs("div", { className: "relative w-full max-w-2xl mx-auto p-4 md:max-w-lg lg:max-w-2xl", children: [_jsx("img", { src: images[currentIndex], alt: `Lightbox Slide ${currentIndex + 1}`, className: "w-full h-auto object-cover rounded-lg shadow-lg" }), _jsx("div", { className: "flex justify-center mt-4 space-x-2", children: images.map((image, index) => (_jsx("img", { src: image, alt: `Thumbnail ${index + 1}`, onClick: () => goToSlide(index), className: `w-12 h-12 object-cover rounded-lg cursor-pointer transition-transform transform ${index === currentIndex ? 'scale-110 border-2 border-blue-500' : 'scale-100'}` }, index))) }), _jsx("button", { onClick: closeLightbox, className: "absolute top-4 right-4 text-white text-3xl hover:text-gray-400 focus:outline-none active:text-black", children: "\u00D7" }), _jsx("button", { onClick: prevSlide, className: "absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500", children: "\u276E" }), _jsx("button", { onClick: nextSlide, className: "absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500", children: "\u276F" })] }) }))] }));
};
export default Slideshow;
