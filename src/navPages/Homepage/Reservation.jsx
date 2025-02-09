import React, { useState } from "react";

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        people: "",
        name: "",
        phone: "",
        email: "",
    });

    const timeOptions = [
        "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
    ];

    const peopleOptions = ["1 person", "2 people", "3 people", "4 people", "5 people"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="flex bg-gray-50 items-center justify-center pt-10">
            <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-mono italic ital text-red-500">Reservation</span> 
                <h1 className="text-grey-800 font-bold text-4xl uppercase">Book Table</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-transparent p-8 rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Time</label>
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        >
                            <option value="">Select Time</option>
                            {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">People</label>
                        <select
                            name="people"
                            value={formData.people}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        >
                            {peopleOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition"
                        >
                            Book Table
                        </button>
                    </div>
                </form>
            </div>
            <div className="relative  md:block hidden items-center overflow-hidden justify-center p-8 transition duration-300">
                <img
                    src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg"
                    alt="Restaurant"
                    className="rounded-xl shadow-lg object-cover w-full max-w-sm group-hover:scale-110 transition duration-300"
                />
            </div>
        </div>
    );
};

export default ReservationForm;
