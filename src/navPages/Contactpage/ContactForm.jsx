import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const ContactForm = () => {
    const formFields = [
        { name: "name", type: "text", placeholder: "Name", label: "Name" },
        { name: "email", type: "email", placeholder: "Email", label: "Email" },
        { name: "phone", type: "text", placeholder: "Phone", label: "Phone" },
    ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full  h-lvh  p-4  mb-6 pt-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.066820415796!2d83.45986781108773!3d27.69053937609299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685bb45101c0b%3A0x6f093136e0e2cb10!2sAbhyam%20Robotics%20Institution%20of%20Business%20and%20Technology%20(ARIBT)!5e1!3m2!1sen!2snp!4v1738920206624!5m2!1sen!2snp"  
            className='h-full w-full' 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-full max-w-3xl p-8  rounded-lg">
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                    SEND US A MESSAGE
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {formFields.map((field, index) => (
                            <div key={index}>
                                <label className="block text-gray-700">{field.label}</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg "
                                    placeholder={field.placeholder}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg  "
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:justify-center md:grid-cols-3 gap-8 text-center md:text-left p-9">
                <div className="flex items-center gap-4">
                    <FaLocationDot className="text-2xl text-gray-700" />
                    <div>
                        <span className="block text-xl font-semibold uppercase tracking-wider">Location</span>
                        <span className="block text-gray-600 leading-relaxed">
                            8th floor, 379 Hudson St, New York, NY 10018
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-2xl text-gray-700" />
                    <div>
                        <span className="block text-xl font-semibold uppercase tracking-wider">Call Us</span>
                        <span className="block text-gray-600">
                            (+1) 96 716 6879
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IoTime className="text-2xl text-gray-700" />
                    <div>
                        <span className="block text-xl font-semibold uppercase tracking-wider">Opening Hours</span>
                        <span className="block text-gray-600">
                            09:30 AM - 11:00 PM <br /> Every Day
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
