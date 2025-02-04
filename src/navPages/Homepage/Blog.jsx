import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "21 Dec 2017",
      title: "Best Places for Wine",
      description: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.",
      image: "https://preview.colorlib.com/theme/pato/images/blog-01.jpg",
    },
    {
      id: 2,
      date: "15 Dec 2017",
      title: "Eggs and Cheese",
      description: "Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat.",
      image: "https://preview.colorlib.com/theme/pato/images/blog-02.jpg",
    },
    {
      id: 3,
      date: "12 Dec 2017",
      title: "Style the Wedding Party",
      description: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
      image: "https://preview.colorlib.com/theme/pato/images/blog-03.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-red-500 text-lg font-semibold italic">Latest News</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">THE BLOG</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                {blog.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="text-red-500 font-semibold text-sm hover:underline">
                CONTINUE READING <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
