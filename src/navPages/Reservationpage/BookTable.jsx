import React, { useState } from 'react'

function BookTable() {
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
        <div>
            <div className="flex flex-col items-center justify-center m-6 md:m-9">
                <span className="text-3xl font-mono text-red-500 mt-10 italic">Reservation</span>
                <h1 className="text-black font-bold text-6xl uppercase tracking-wider">Book Table</h1>
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
            <div className='flex flex-col mx-6 md:flex-row md:mx-32 my-12 md:my-24 p-9 gap-8 justify-center'>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h1 className=" text-3xl mb-5">Reserve by Phone</h1>
                    <p className='font-thin text-gray-400 text-lg'>Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate ,
                        lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <span className='text-red-500'>(001) 345 6889</span></p>
                </div>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h1 className=" text-3xl mb-5">For Event Booking</h1>
                    <p className='font-thin text-gray-400 text-lg'>Donec feugiat ligula rhoncus: <span className='text-red-500'>(001) 345 6889</span> , varius nisl sed, tinci-dunt lectus sodales sem.</p>
                </div>
            </div>
        </div>
    )
}

export default BookTable