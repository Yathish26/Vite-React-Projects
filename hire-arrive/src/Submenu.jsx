import React, { useEffect } from 'react';
import subMenus from './Editable Tool/subMenus';
import { Link, useLocation } from 'react-router-dom';

export default function Submenu() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const getSubmenuTitleAndItems = () => {
    switch (location.pathname) {
      case '/homeservices':
        return { title: 'Home Services', items: subMenus['Home Services'] };
      case '/healthwellness':
        return { title: 'Health & Wellness', items: subMenus['Health & Wellness'] };
      case '/automotive-services':
        return { title: 'Automotive Services', items: subMenus['Automotive Services'] };
      case '/professional-services':
        return { title: 'Professional Services', items: subMenus['Professional Services'] };
      case '/education':
        return { title: 'Education', items: subMenus['Education'] };
      case '/events-entertainment':
        return { title: 'Events & Entertainment', items: subMenus['Events & Entertainment'] };
      case '/personal-services':
        return { title: 'Personal Services', items: subMenus['Personal Services'] };
      case '/technology-repair':
        return { title: 'Technology & Repair', items: subMenus['Technology Repair'] };
      case '/home-interior':
        return { title: 'Home & Interior', items: subMenus['Home & Interior'] };
      case '/delivery-services':
        return { title: 'Delivery Services', items: subMenus['Delivery Services'] };
      default:
        return { title: 'Service', items: [] };
    }
  };

  const { title, items } = getSubmenuTitleAndItems();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-200 via-gray-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-8 ">
        {title}
      </h1>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {items && items.length > 0 ? (
            items.map((serviceObj, index) => {
              // Extract service name and details
              const serviceName = Object.keys(serviceObj)[0];
              const serviceDetails = serviceObj[serviceName];
  
              return (
                <Link to={serviceDetails.location} key={index}>
                  <li className="p-4 flex items-center justify-between hover:bg-purple-600 rounded-lg hover:text-white transition-all duration-300 cursor-pointer text-gray-700">
                    <span className="text-lg font-semibold">{serviceName}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-transform transform hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                </Link>
              );
            })
          ) : (
            <li className="p-4 text-gray-500 text-center font-medium">No services available.</li>
          )}
        </ul>
      </div>
    </div>
  );
  
}
