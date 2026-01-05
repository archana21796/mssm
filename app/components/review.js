import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {

    const reviews = [
        { id: 1, name: "Arun", rating: 4, content: "good college" },
        { id: 2, name: "Sekar", rating: 5, content: "nice infrastructure" },
        { id: 3, name: "Jancy", rating: 4, content: "MSSM good mba college" },
        { id: 4, name: "Sakthi", rating: 4, content: "Best MBA college in chennai" },
        { id: 5, name: "Rohini", rating: 5, content: "Great college" },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="relative w-full max-w-xl overflow-hidden mx-auto bg-white shadow-2xl rounded-xl p-6">

            {/* Slider wrapper */}
            <h3 className="text-2xl font-semibold mb-6 text-center">Google Reviews</h3>
            <div
                className="flex items-center transition-transform duration-500 ease-out h-100"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {reviews.map((review) => (
                    <div 
                        key={review.id}
                        className="w-full flex-shrink-0 text-center px-5"
                    >
                        <div className="flex justify-center mb-2">
                            {Array.from({ length: review.rating }).map((_, index) => (
                                <FaStar key={index} className="text-yellow-500 text-3xl" />
                            ))}
                        </div>

                        <div className="font-bold text-mssmclr text-2xl">{review.name}</div>
                        <p className="text-gray-700 mt-1">{review.content}</p>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow"
            >
                ❯
            </button>
        </div>
    );
}
