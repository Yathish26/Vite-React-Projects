import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import services from './Editable Tool/categories';
import Subcatslider from './Components/Subcatslider';
import Mediumposter from './Components/Mediumposter';
import subslider from './Editable Tool/subslider';
import DB from './Data/sheet';
import Carousel from './Components/Carousel';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [csvData, setCsvData] = useState([]);
  const [clear, setClear] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Load CSV Data
  useEffect(() => {
    const googleSheet = DB;

    const fetchData = async () => {
      const response = await fetch(googleSheet);
      const data = await response.text();
      Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => setCsvData(result.data),
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setClear(e.target.value !== '');
  };

  const handleClear = useCallback(() => {
    setSearchTerm('');
    setDebouncedTerm('');
    setClear(false);
  }, []);

  const filteredResults = useMemo(() => {
    if (!debouncedTerm.trim()) return [];

    return csvData.filter(row =>
      row.Name?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Address?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Contact?.includes(debouncedTerm) ||
      row.Category?.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [debouncedTerm, csvData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
  };


  return (
    <>
      {/* Search Bar */}
      <div className="flex items-center justify-center my-4">
        <div className="flex w-2/3 items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-purple-700">
          <div className="px-3 mo:pr-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for services, e.g., plumber, electrician..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full p-4 py-4 focus:outline-none rounded-full"
          />
          {clear && (
            <div onClick={handleClear} className="px-3 cursor-pointer">
              <img className="w-6 h-6" src="/logos/cross.svg" alt="Clear" />
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm.trim() && filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
          {filteredResults.map((result, index) => (
            <Link to={`/${result.Category}/${createSlug(result.Name)}`} key={index}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
                <h2 className="text-2xl font-semibold text-purple-500 mb-2">{result.Name}</h2>
                <div className="flex items-center">
                  <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                  <p className="text-gray-300">{result.Address}</p>
                </div>
                <div className="flex items-center mt-2">
                  <img className="w-4 h-4 mr-2" src="/logos/call.svg" alt="Contact:" />
                  <p className="text-gray-400">{result.Contact}</p>
                </div>
                <div className='flex justify-between'>
                  <p className="mt-2 inline-block px-3 py-1 border border-purple-500 text-purple-500 rounded-full text-sm">
                    {result.Category}
                  </p>
                  <div className="mt-2 flex gap-1 justify-center items-center px-3 py-1 border border-green-500 text-green-500 rounded-full text-sm">
                    <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#3F9C6E"></path> </g></svg>
                    <p className='font-semibold'>{result.Location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : searchTerm.trim() && filteredResults.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12 p-8 shadow-lg">
          <svg className="w-16 h-16 mb-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4m0 0l4-4m-4 4h12m-4 4l4-4m0 0l-4-4"></path>
          </svg>
          <p className="text-2xl text-gray-300 font-semibold mb-2">No results found</p>
          <p className="text-gray-400">We couldn’t find any matches for "{searchTerm}". Please try again with a different keyword.</p>
        </div>
      ) : (
        /* Categories and Home Section (Shown when there's no search) */
        <>

          <div className='flex mo:px-2 mo:justify-start justify-center items-center gap-7 mo:py-2 my-8 mo:gap-2 mo:overflow-y-auto mo:scrollbar-hide mo:flex-nowrap'>
            <Carousel title="GYMS" description="NEAR YOU" image="gym" bgcolor="#00BF63" link="/gym" />
            <Carousel title="DOCTORS" description="NEAR YOU" image="doc" bgcolor="#FF3131" link='/doctors' />
            <Carousel title="YOGA INSTRUCTORS" description="NEAR YOU" image="yoga" bgcolor="orange" link='/yoga-meditation' />
            <Carousel title="CONTRACTORS" description="NEAR YOU" image="cont" bgcolor="#004AAD" link='/contractors' />
          </div>




          <h1 className='text-2xl text-center font-bold m-4 mb-8'>Top Categories</h1>
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
                    <h3 className="text-base font-semibold text-purple-700 text-center hidden md:block">
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
            <Mediumposter img={"/images/skin.png"} />
          </div>
          <Subcatslider head={"Popular Services"} title={Object.keys(subslider.MoreCategory)} />
        </>
      )}
    </>
  );
}
