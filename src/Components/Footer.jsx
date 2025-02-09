import React from "react";
import { FaFacebookF, FaTwitter, FaTripadvisor, FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";

const Footer = () => {
    const galleryImages = [
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-02.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-03.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-04.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-05.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-06.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-07.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-08.jpg",
        "https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-09.jpg"
    ];

    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">CONTACT US</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <IoLocation /> 8th floor, 379 Hudson St, New York, NY 10018
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> (+1) 96 716 6879
                        </li>
                        <li className="flex items-center gap-2">
                            <IoMail /> contact@site.com
                        </li>
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-white text-lg font-bold mb-4">OPENING TIMES</h3>
                        <p>09:30 AM - 11:00 PM</p>
                        <p>Every Day</p>
                    </div>
                </div>


                <div>
                    <h3 className="text-white text-lg font-bold mb-4">LATEST TWITTER</h3>
                    <ul className="space-y-4">
                        {[1, 2].map((_, i) => (
                            <li key={i}>
                                <div className="flex items-center gap-2">
                                    <FaTwitter className="text-blue-400" />
                                    <a href="#" className="text-blue-400">@colorlib</a>
                                </div>
                                <p>Activello is a good option. It has a slider built-in that displays the featured image.</p>
                                <p className="text-gray-400 text-sm mt-2">21 Dec 2017</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-bold mb-4">GALLERY</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-20 object-cover rounded-md" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-center">
                <div className="flex gap-6 text-white text-lg">
                    <FaTripadvisor />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
                <p className="text-gray-400 mt-4 md:mt-0">© 2017 Colorlib. <a href="#" className="hover:text-gray-200">Get The Theme</a></p>
            </div>
        </footer>
    );
};

export default Footer;
