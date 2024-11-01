import React from 'react';
import { Link } from 'react-router-dom';
import services from './Editable Tool/categories';
import Subcatslider from './Components/Subcatslider';
import Mediumposter from './Components/Mediumposter';
import subslider from './Editable Tool/subslider';
import Carousel from './Components/Carousel';
import HomeSearch from './Components/HomeSearch';

export default function Home() {

  return (
    <>

    <HomeSearch/>
      
          {/* Categories and Home Section (Shown when there's no search) */ }
          <>

            <div className='flex mo:px-2 mo:justify-start justify-center items-center gap-7 mo:py-2 my-8 mo:gap-2 mo:overflow-y-auto mo:scrollbar-hide mo:flex-nowrap'>
              <Carousel title="GYMS" description="NEAR YOU" image="gym" bgcolor="#00BF63" link="/gym" />
              <Carousel title="DOCTORS" description="NEAR YOU" image="doc" bgcolor="#FF3131" link='/doctors' />
              <Carousel title="YOGA INSTRUCTORS" description="NEAR YOU" image="yoga" bgcolor="orange" link='/yoga-meditation' />
              <Carousel title="CONTRACTORS" description="NEAR YOU" image="cont" bgcolor="#004AAD" link='/contractors' />
            </div>




            <h1 className='text-2xl text-center font-spartan font-semibold m-4 mb-8'>Top Categories</h1>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
              {Object.keys(services).map((service, index) => (
                services[service].display !== "none" && (
                  <Link to={services[service].location} key={index}>
                    <div className="p-4 flex flex-col justify-center items-center bg-gray-50 mo:bg-transparent rounded-lg shadow-md mo:shadow-none hover:bg-gray-100 cursor-pointer transition duration-200">
                      <img
                        src={services[service].icon}
                        alt={service}
                        className="w-16 h-16 mx-auto mb-2"
                      />
                      <h3 className="text-lg font-spartan text-purple-700 text-center hidden md:block">
                        {service}
                      </h3>
                      {/* Mobile view */}
                      <h3 className="text-sm font-semibold text-purple-700 text-center md:hidden">
                        {service}
                      </h3>
                    </div>
                  </Link>
                )
              ))}
            </div>

            <Subcatslider head={"Doctors"} title={Object.keys(subslider.Doctors)} />
            <div className='flex justify-center mo:flex-col'>
              <Link to={'/bridal-makeup'}>
                <Mediumposter img={"/images/bridal.png"} />
              </Link>
              <Link to={'/skincare'}>
                <Mediumposter img={"/images/skin.png"} />
              </Link>

            </div>
            <Subcatslider head={"Popular Services"} title={Object.keys(subslider.MoreCategory)} />
          </>
        
    </>
  );
}