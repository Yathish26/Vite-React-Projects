import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

export default function Profile() {
  const [isContactVisible, setContactVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pin, setPin] = useState('');

  // Logo Sets
  const skills = [
    { name: 'React JS', logo: 'react' },
    { name: 'Django', logo: 'django' },
    { name: 'Django REST', logo: 'djangorest' },
    { name: 'Node JS', logo: 'nodejs' },
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
        <div className="flex flex-col items-center mb-8 relative">
          <div className="relative">
            <img
              src="https://pbs.twimg.com/profile_images/1494891133717024771/ew66fh4n_400x400.jpg" // Profile Photo Place
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4 border-4 border-white shadow-lg"
            />
          </div>
          <img src="/icons/india.svg" alt="IND" />
          <h1 className="text-3xl font-bona mb-2">Yathish Acharya</h1>
          <div className='flex gap-2 cursor-pointer items-center'>
            <a href={'https://github.com/Yathish26'} target="_blank" rel="noopener noreferrer"><img src="/icons/github.svg" alt="Github" /></a>
            <a href={'https://www.linkedin.com/in/iamyathz/'} target="_blank" rel="noopener noreferrer"><img src="/socials/linkedin.svg" alt="Linkedin" /></a>
            <a href={'https://x.com/iamyathz'} target="_blank" rel="noopener noreferrer"><img className='w-9' src="/socials/x.svg" alt="X" /></a>
            <Link to={'mailto:yathishkumar2013@gmail.com'}><img src="/socials/mail.svg" alt="Mail" /></Link>
            <a href={'https://www.instagram.com/iam.yathz/'} target="_blank" rel="noopener noreferrer"><img src="/socials/instagram.svg" alt="Instagram" /></a>
          </div>
          <Link to={'/profile/journey'}>
            <img className='absolute top-0 right-0 border-2 border-white rounded-full gap-1' src="icons/journey.svg" alt="Journey" />
          </Link>
          <button
            className="absolute top-0 left-0 flex items-center space-x-3 px-4 py-2 rounded-lg bg-yellow-400 text-gray-800 transition-colors duration-300 hover:bg-green-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={setModalIsOpen}
          >
            <img src="/icons/call.svg" alt="Call" className="w-6 h-6" />
            <span className="font-semibold text-sm">{isContactVisible ? '+918073215402' : '****'}</span>
          </button>
        </div>

        <div className="text-lg space-y-4 flex flex-col ">





          <div>
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
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}  // This ensures that clicking on the overlay will close the modal
        closeTimeoutMS={200} // Optional: Adds a transition effect when closing
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
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
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
          <img className='absolute top-1 right-1 cursor-pointer' src="/icons/close.svg" alt="Close" onClick={() => setModalIsOpen(false)} />
        </div>
      </Modal>
    </div>
  );
}
