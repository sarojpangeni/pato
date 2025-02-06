// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const reviews = [
//     {
//         id: 1,
//         name: "MARIE SIMMONS",
//         location: "NEW YORK",
//         review: "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pretium nec, fermentum viverra dui.",
//         rating: 5,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 2,
//         name: "JOHN DOE",
//         location: "CALIFORNIA",
//         review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur cursus, nisi lacus bibendum.",
//         rating: 4,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 3,
//         name: "JANE SMITH",
//         location: "TEXAS",
//         review: "Curabitur vel sem sit amet dolor tincidunt blandit. Sed vel arcu vel justo fermentum pretium id nec quam.",
//         rating: 5,
//         image: "https://via.placeholder.com/150",
//     },
// ];

// const CustomerReview = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const currentReview = reviews[currentIndex];

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//             <div className=" items-center justify-center">
//                 <h2 className="text-2xl font-semibold text-red-500">Customers Say</h2>
//                 <h1 className="text-4xl font-bold mt-2">REVIEW</h1>
//             </div>

//             <div className="relative mt-8 w-4/5 md:w-2/3 lg:w-1/2 p-6 rounded-2xl bg-white">
//                 <div className="flex flex-col items-center text-center">
//                     <div className="w-24 h-24 rounded-full border-4 border-red-500 overflow-hidden">
//                         <img
//                             src={currentReview.image}
//                             alt={currentReview.name}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <p className="text-lg italic text-gray-700 mt-6">
//                         "{currentReview.review}"
//                     </p>
//                     <div className="mt-4 flex">
//                         <span className="text-red-500 text-lg">
//                             {"★".repeat(currentReview.rating)}
//                         </span>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-4">
//                         {currentReview.name} - {currentReview.location}
//                     </p>
//                 </div>
//                 <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
//                     <button
//                         className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                         onClick={handlePrev}
//                     >
//                         <ChevronLeft size={20} />
//                     </button>
//                 </div>
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                     <button
//                         className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                         onClick={handleNext}
//                     >
//                         <ChevronRight size={20} />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerReview;
