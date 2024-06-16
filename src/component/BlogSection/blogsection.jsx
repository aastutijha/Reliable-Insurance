// BlogSection.js
import {} from 'react';
import image1 from '../../assets/blogsection/1.jpg';
import image2 from '../../assets/blogsection/2.jpg';
import image3 from '../../assets/blogsection/3.jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      image: image1,
      date: '10 September 2020',
      author: 'Admin',
      title: '2020 Insurance Trends And Possible Challenges',
    },
    {
      image: image2,
      date: '11 September 2020',
      author: 'Admin',
      title: 'Global Trends In The Life Insurance Industry',
    },
    {
      image: image3,
      date: '13 September 2020',
      author: 'Admin',
      title: 'Where And How To Watch Live Stream Today',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Blog</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Reliable Life Updates
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Reliable Endowment and Insurance policy is an insurance plan which returns twice the insured amount plus bonus. It can be purchased for a fixed period of time by paying the regular...
            Reliable Higher Education Plan...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  <span>{post.date}</span> <span className="mx-2">|</span> <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{post.title}</h3>
                {/* <a href="https://www.reliable.prabidhienterprises.com/blog-details.html" className="text-blue-600 hover:text-blue-800 font-medium">
        Read More +
      </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;