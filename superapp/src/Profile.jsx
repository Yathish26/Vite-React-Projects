import React from 'react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-500 text-white flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://pbs.twimg.com/profile_images/1494891133717024771/ew66fh4n_400x400.jpg" // Replace with the actual profile photo URL
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">Profile of this Developer</h1>
        </div>

        <div className="text-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p><strong>Name:</strong> Yathish Acharya</p>
          <p><strong>Contact:</strong> +918073215402</p>
          <p><strong>Email:</strong> yathishkumar2013@gmail.com</p>
          <p><strong>Date of Birth:</strong> 26/03/2000</p>
          <p><strong>Nationality:</strong> Indian</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React JS</li>
            <li>Django</li>
            <li>Django REST Framework</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Experience</h2>
          <p><strong>Frontend Developer at Tech Solutions</strong></p>
          <p>Jan 2022 - Present</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Developed and maintained responsive web applications using React JS.</li>
            <li>Collaborated with backend teams to integrate RESTful APIs using Django.</li>
            <li>Improved user experience and interface designs, leading to a 20% increase in user engagement.</li>
          </ul>

          <p><strong>Backend Developer Intern at CodeCrafters</strong></p>
          <p>Jun 2021 - Dec 2021</p>
          <ul className="list-disc list-inside ml-4">
            <li>Worked on building RESTful APIs using Django REST Framework.</li>
            <li>Implemented authentication and authorization systems.</li>
            <li>Contributed to the development of internal tools to automate tasks, improving efficiency by 15%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
