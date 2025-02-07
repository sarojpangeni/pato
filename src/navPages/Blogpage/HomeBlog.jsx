import React from 'react'
import { IoSearch } from "react-icons/io5";


function HomeBlog() {
    const blogs = [
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-05.jpg",
            date: { day: "28", month: "Dec", year: "2018" },
            title: "Cooking recipe Delicious",
            author: "Admin",
            category: "Cooking, Food",
            comments: "8",
            discription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
            link: "#"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-06.jpg",
            date: { day: "10", month: "Dec", year: "2018" },
            title: "Pizza is prepared fresh",
            author: "Admin ",
            category: "Cooking, Food",
            comments: "8",
            discription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
            link: "#"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-04.jpg",
            date: { day: "16", month: "Dec", year: "2018" },
            title: "Style the Wedding Party",
            author: "Admin",
            category: "Cooking, Food ",
            comments: "8",
            discription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
            link: "#"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-07.jpg",
            date: { day: "15", month: "Dec", year: "2018" },
            title: "Best Places for Wine",
            author: "Admin",
            category: "Cooking, Food",
            comments: "8",
            discription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
            link: "#"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-10.jpg",
            date: { day: "12", month: "Dec", year: "2018" },
            title: "Best Places for Wine",
            author: "Admin",
            category: "Cooking, Food",
            comments: "8",
            discription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
            link: "#"
        }
    ]

    const popular = [
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-11.jpg",
            title: "Best Places for Wine",
            date: "3 days ago"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-12.jpg",
            title: "Eggs and Cheese",
            date: "July 2, 2017"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-13.jpg",
            title: "Style the Wedding Party",
            date: "May 28, 2017"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-14.jpg",
            title: "Cooking recipe Delicious",
            date: "May 25, 2017"
        },
        {
            image: "https://preview.colorlib.com/theme/pato/images/blog-15.jpg",
            title: "Pizza is prepared fresh",
            date: "May 2, 2017"
        }
    ]
    const archive = [
        {
            date: "July 2018",
            number: "9"
        },
        {
            date: "june 2018",
            number: "389"
        },
        {
            date: "may 2018",
            number: "2"
        },
        {
            date: "april 2018",
            number: "35"
        },
        {
            date: "march 2018",
            number: "22"
        },
        {
            date: "february 2018",
            number: "32"
        },
        {
            date: "january 2018",
            number: "21"
        },
        {
            date: "december 2017",
            number: "26"
        }
    ]

    return (
        <div>
            <div className='p-4 font-thin border-b-2'>
                <div className='items-center justify-center mx-60'>
                    <a href="#" className='cursor-pointer hover:text-rose-400'>HOME</a>
                    <span className='mx-5'>/</span>
                    <span>BLOG</span></div>
            </div>
            <div className='flex justify-center p-4'>
                <div className='w-1/6'></div>
                <div className='w-3/6 gap-5 p-9 pr-16 border-r-2'>
                    {blogs.map((recipe, index) => (
                        <div
                            key={index}
                            className=' overflow-hidden'>
                            <div className='relative'
                            >
                                <img
                                    src={recipe.image}
                                    alt="image"
                                    className='w-2/3 h-60 object-cover border rounded-lg shadow-lg' />
                                <div className='absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold py-1 px-2 rounded'>
                                    <p>{recipe.date.day}</p>
                                    <p>{recipe.date.month}, {recipe.date.year}</p>
                                </div>
                            </div>
                            <div className='p-4'>
                                <h2 className="text-2xl uppercase text-gray-800 mb-2 hover:text-red-500 cursor-pointer">{recipe.title}</h2>
                                <p className="text-sm text-gray-600 mb-4">by {recipe.author} | {recipe.category} | {recipe.comments} Comments</p>
                                <p className="text-gray-700 text-sm mb-4">{recipe.discription}</p>
                                <a
                                    href={recipe.link}
                                    className=" hover:text-red-500 cursor-pointer font-medium text-sm">Continue Reading → </a>
                            </div>
                        </div>
                    ))}
                    <div className='m-5'>
                        <button className='border rounded-full h-7 w-7 bg-gray-800 text-white mr-3'>1</button>
                        <button className='border rounded-full h-7 w-7 hover:bg-gray-800 hover:text-white'>2</button>
                    </div>
                </div>
                <div className='w-1/6 pt-9  px-2'>
                    <div className='flex h-fit'>
                        <input type="text"
                            placeholder='Search'
                            className="w-full p-2 text-gray-700 focus:outline-none border" />
                        <button className="bg-gray-800 text-white p-2 hover:bg-gray-700"><IoSearch /></button>
                    </div>
                    <div className=' uppercase'>
                        <h1 className=' tracking-widest py-9 items-center justify-center border-b-2 border-gray-300 text-xl font-thin'>categories</h1>
                        <div className='flex flex-col '>
                            <a className='text-xs border-b-2 border-gray-300 p-2'>Cooking recipe</a>
                            <a className='text-xs border-b-2 border-gray-300 p-2'>Delicious foods</a>
                            <a className='text-xs border-b-2 border-gray-300 p-2'>Events Design</a>
                            <a className='text-xs border-b-2 border-gray-300 p-2'>Restaurant Place</a>
                            <a className='text-xs border-b-2 border-gray-300 p-2'>WordPress</a>
                        </div>
                    </div>
                    <div>
                        <h1 className=' tracking-widest py-9 items-center justify-center border-b-2 border-gray-300 text-xl font-thin uppercase'>most popular</h1>
                        {popular.map((most, index) => (
                            <div key={index}
                                className='flex items-center py-4 border-b border-gray-300 last:border-none'>
                                <img src={most.image} alt="popular"
                                    className='w-12 h-12 rounded object-cover mr-4' />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{most.title}</p>
                                    <p className="text-xs text-gray-500">{most.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='uppercase'>
                        <h1 className='tracking-widest py-9 items-center justify-center text-xl font-thin uppercase'>archive</h1>
                        {archive.map((ar, index) => (
                            <div key={index}
                                className='flex justify-between items-center py-2 text-gray-800 text-sm'>
                                <p className="font-medium">{ar.date}</p>
                                <p className="text-gray-500">({ar.number})</p>
                            </div>
                        ))}
                    </div>
                </div>




                <div className='w-1/6'>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog