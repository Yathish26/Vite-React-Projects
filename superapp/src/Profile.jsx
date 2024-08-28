import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

export default function Profile() {
  const [isContactVisible, setContactVisible] = useState(false);
  const [isDOBVisible, setDOBVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pin, setPin] = useState('');

  // User Details
  const skills = [
    { name: 'React JS', logo: 'react' },
    { name: 'Django', logo: 'django' },
    { name: 'Django REST', logo: 'djangorest' },
    { name: 'Express JS', logo: 'react' },
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
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-500 text-white flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src="https://pbs.twimg.com/profile_images/1494891133717024771/ew66fh4n_400x400.jpg" // Profile Photo Place
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4"
            />
            <button
              onClick={() => setModalIsOpen(true)}
              className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full"
            >
              <img src="tempicons/visibility.svg" alt="Reveal" className="w-4 h-4" />
            </button>
          </div>
          <h1 className="text-4xl font-bold mb-2">Profile of this Developer</h1>
          <Link to={'/profile/journey'}><button className='py-2 px-4 bg-yellow-300 rounded-lg text-black hover:bg-yellow-500 transition-colors ease-in-out duration-300'>Journey</button></Link>
        </div>

        <div className="text-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p><strong>Name:</strong> Yathish</p>
          <p><strong>Contact:</strong> {isContactVisible ? '+918073215402' : '****'}</p>
          <p><strong>Email:</strong> yathishkumar2013@gmail.com</p>
          <p><strong>Date of Birth:</strong> {isDOBVisible ? '26th March 2000' : '****'}</p>
          <p><strong>Nationality:</strong> Indian</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={`skillcon/${skill.logo}.svg`} alt={skill.name} className="w-6 h-6 mr-2" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        closeTimeoutMS={200} // closing transition
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Enter PIN to Reveal Information</h2>
          <h2 className='italic mb-2 text-xs text-gray-400'>(Contact Number is hidden for privacy concerns)</h2>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="border p-2 w-full mb-4"
              placeholder="Enter PIN"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
