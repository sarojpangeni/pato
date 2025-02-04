import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



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
        <footer className="bg-gray-800 pt-7">
            <div className=" text-gray-300 py-1 px-9 text-left ml-9 mr-9">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-9">
                    <div className="flex flex-col space-y-5 ml-9">
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4 ">CONTACT US</h3>
                            <ul className="space-y-2 ">
                                <li>
                                    <p className="flex items-center">
                                        <i className="fas fa-map-marker-alt mr-2"><IoLocation /></i>
                                        8th floor, 379 Hudson St, New York, NY 10018
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center">
                                        <i className="fas fa-phone-alt mr-2"><FaPhoneAlt /></i>
                                        (+1) 96 716 6879
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center">
                                        <i className="fas fa-envelope mr-2"><IoMail /></i>
                                        contact@site.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">OPENING TIMES</h3>
                            <p>09:30 AM - 11:00 PM</p>
                            <p>Every Day</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-white text-lg font-bold mb-4">LATEST TWITTER</h3>
                        <ul className="space-y-4">
                            <li>
                                <p className="space-y-5 text-left">
                                    <div className="flex items-center gap-2">
                                        <i className="fab fa-twitter"><FaTwitter /></i>
                                        <a href="#" className="text-blue-400">@colorlib</a></div>

                                    <a href="#" className="">Activello is
                                        a good option. It has a slider built into that displays the
                                        featured image in the slider.</a>
                                </p>
                                <p className="text-gray-400 text-sm mt-3">21 Dec 2017</p>
                            </li>
                            <li>
                                <p className="justify-start text-left">
                                    <div className="flex items-center gap-2">
                                        <i className="fab fa-twitter"><FaTwitter /></i>
                                        <a href="#" className="text-blue-400">@colorlib</a>
                                    </div>
                                    <a href="#" className="justify-">Activello is
                                        a good option. It has a slider built into that displays the
                                        featured image in the slider.</a>
                                </p>
                                <p className="text-gray-400 text-sm mt-3">21 Dec 2017</p>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="text-white text-lg font-bold mb-4 mr-9">GALLERY</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {galleryImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-20 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center border-t border-gray-700 mt-8 text-center bg-black">
                <div className='flex w-1/2 gap-6 py-4 ml-5 text-white h-auto'>
                    <div><FaTripadvisor /></div>
                    <div><FaFacebookF /></div>
                    <div><FaTwitter /></div>
                </div>
                <div className='flex w-1/2 items-center justify-center py-4 ml-5 text-white h-auto'>
                    © 2017 Colorlib.{" "}
                    <a href="#" className="text-gray-400 hover:text-gray-200">
                        Get The Theme
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
