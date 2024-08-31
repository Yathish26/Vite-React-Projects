import React from 'react';

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Search Bar Section */}
        <div className="bg-gray-900 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Find What You Need</h1>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="w-full max-w-lg p-3 rounded-l-lg text-black focus:outline-none"
                placeholder="Search for services, businesses, and more..."
              />
              <button className="bg-white font-semibold text-purple-500 p-3 rounded-r-lg hover:bg-gray-200">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-10 m-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <CategoryCard title="Restaurants" image="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" />
            <CategoryCard title="Hotels" image="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" />
            <CategoryCard title="Doctors" image="https://lh4.googleusercontent.com/proxy/GXRctodMWYneuN9crdVCnJxB8DxNyeN4RU8L3nEP7FQ5QrqyJyvSnWajtbuGKf-ZXfy6Mj9HSkA06mEKOR8YPrI1ETey0a6Xc8IGTSOYv1R6Zfa93p2sZLiXyTPlbd4QdWk" />
            <CategoryCard title="Gyms" image="https://i.ytimg.com/vi/gey73xiS8F4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpkC50rWBy9eRhk8v1BOkKNx0LmA" />
            <CategoryCard title="Salons" image="https://imgmedia.lbb.in/media/2023/09/650409657e815e41a169159f_1694763365222.jpg" />
            <CategoryCard title="Car Services" image="https://lh6.googleusercontent.com/proxy/wsZ6Ghs6DMbtFNbyfKseB4Q7UfmLo8MPOBAeXnpRv48hEiMiSxVu1UmHl7-fBMQpkpd_nSTpaziwSOdP9t-ZMIGCFeSM9CCZy_c_UYvGSugDi4LmR0X-feGD-sWFi9Th2U6xQhct8SNGHcGu_VHWIgacZpC2yF-lmgg-3vA4nXLjxqRBmgQTYRXjCcw_" />
            <CategoryCard title="Shopping" image="https://media.product.which.co.uk/prod/images/original/c7cd417b2102-clothing-store.jpg" />
            <CategoryCard title="Real Estate" image="https://img.indiafilings.com/learn/wp-content/uploads/2015/10/12011006/Real-Estate-Agent-Business-India.jpg" />
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="bg-white py-10 m-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Popular Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Plumbing Services" description="Experienced and reliable plumbers." image="https://5.imimg.com/data5/SELLER/Default/2020/8/LW/CW/IX/67975614/plumber-service.jpg" />
              <ServiceCard title="House Cleaning" description="Top-rated cleaning services." image="https://www.doforms.com/wp-content/uploads/2023/10/professional-house-cleaning-checklist.jpeg%E2%80%8B.jpg" />
              <ServiceCard title="Electricians" description="Expert electrical repairs and installations." image="https://www.neit.edu/wp-content/uploads/2021/08/Electrician-at-work-e1643101212741.jpg" />
              {/* Add more services as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryCard({ title, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-32 sm:h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 sm:h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
