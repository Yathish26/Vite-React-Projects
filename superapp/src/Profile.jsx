import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

export default function Profile() {
  const [isContactVisible, setContactVisible] = useState(false);
  const [isDOBVisible, setDOBVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pin, setPin] = useState('');

  // Logo Sets
  const skills = [
    { name: 'React JS', logo: 'react' },
    { name: 'Django', logo: 'django' },
    { name: 'Django REST', logo: 'djangorest' },
    { name: 'Express JS', logo: 'expressjs' },
    { name: 'JavaScript', logo: 'javascript' },
    { name: 'Python', logo: 'python' },
    { name: 'HTML', logo: 'html' },
    { name: 'CSS', logo: 'css' },
    { name: 'MongoDB', logo: 'mongodb' },
    { name: 'PostgreSQL', logo: 'postgresql' },
    { name: 'Git', logo: 'git' },
    { name: 'Tailwind CSS', logo: 'tailwind' },
    { name: 'Bootstrap', logo: 'bootstrap' },
    { name: 'Illustrator', logo: 'illustrator' },
  ];

  const handlePinSubmit = (event) => {
    event.preventDefault();
    if (pin === '2603') {
      setContactVisible(true);
      setDOBVisible(true);
      setModalIsOpen(false);
    } else {
      alert('Incorrect PIN');
    }
  };

  return (
    <div className="min-h-screen animated-gradient text-white flex flex-col items-center py-12 px-4">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-2xl w-full max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src="https://pbs.twimg.com/profile_images/1494891133717024771/ew66fh4n_400x400.jpg" // Profile Photo Place
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4 border-4 border-white shadow-lg"
            />
            <button
              onClick={() => setModalIsOpen(true)}
              className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="tempicons/visibility.svg" alt="Reveal" className="w-4 h-4" />
            </button>
          </div>
          <h1 className="text-3xl font-semibold mb-2">Profile of Yathish</h1>
          <Link to={'/profile/journey'}>
            <button className='py-2 px-4 bg-yellow-400 rounded-lg text-black hover:bg-yellow-500 transition-colors duration-300'>
              Journey
            </button>
          </Link>
        </div>

        <div className="text-lg space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
          <p><strong>Name:</strong> Yathish</p>
          <p><strong>Contact:</strong> {isContactVisible ? '+918073215402' : '****'}</p>
          <p><strong>Email:</strong> yathishkumar2013@gmail.com</p>
          <p><strong>Date of Birth:</strong> {isDOBVisible ? '26th March 2000' : '****'}</p>
          <p><strong>Nationality:</strong> Indian</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <img src={`skillcon/${skill.logo}.svg`} alt={skill.name} className="w-8 h-8 mr-3" />
                <span className="font-semibold text-lg">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        closeTimeoutMS={200} // closing transition
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Enter PIN to Reveal Information</h2>
          <h2 className='italic mb-4 text-sm text-gray-500'>(Contact Number is hidden for privacy concerns)</h2>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter PIN"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
