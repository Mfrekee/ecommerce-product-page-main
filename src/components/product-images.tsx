import React, { useState } from 'react';
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'

const images: string[] = [
    product1,
    product2,
    product3,
    product4,
];

const Slideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    const openLightbox = (): void => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = (): void => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            {/* Slideshow Container */}
            <div className="relative w-full lg:max-w-lg mx-auto">
                {/* Main Slide */}
                <div className="relative w-full lg:h-full ">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover md:rounded-lg shadow-lg cursor-pointer"
                        onClick={openLightbox}
                    />

                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500"
                    >
                        &#10094;
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500"
                    >
                        &#10095;
                    </button>
                </div>

                {/* Thumbnail Images */}
                <div className="flex justify-evenly mt-4 space-x-2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => goToSlide(index)}
                            className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform transform ${index === currentIndex ? 'scale-110 border-2 border-blue-500' : 'scale-100'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-2xl mx-auto p-4 md:max-w-lg lg:max-w-2xl">
                        {/* Full-size Image */}
                        <img
                            src={images[currentIndex]}
                            alt={`Lightbox Slide ${currentIndex + 1}`}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />

                        {/* Thumbnails in Lightbox */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => goToSlide(index)}
                                    className={`w-12 h-12 object-cover rounded-lg cursor-pointer transition-transform transform ${index === currentIndex ? 'scale-110 border-2 border-blue-500' : 'scale-100'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 focus:outline-none active:text-black"
                        >
                            &times;
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500"
                        >
                            &#10094;
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 focus:outline-none active:text-orange-500"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Slideshow;
