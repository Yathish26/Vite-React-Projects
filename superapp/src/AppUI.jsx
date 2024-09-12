import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AppUI() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', age: '' });

  useEffect(() => {
    // Fetch users on component mount
    axios.get('http://localhost:3000/api/data')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3000/api/data', newUser)
  //     .then(res => setUsers(res.data))  // Update the state with new user list
  //     .catch(err => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/data', newUser)
      .then(res => {
        setUsers(res.data); 
        setNewUser({ name: '', age: '' }); 
      })
      .catch(err => console.log(err));
  };
  

  return (
    <>
      <div className='bg-gradient-to-tr from-[#09203F] to-[#537895] h-screen w-screen'>
        <h1 className='text-white text-3xl font-bold text-center'>Welcome to the Apps Section</h1>
        <p className='text-red-950 text-center text-xl'>This page is under Maintenance, please go through other apps</p>

        <form onSubmit={handleSubmit}>
          <input className='border p-2 m-2 rounded' 
                 type="text" 
                 placeholder="Enter Your Name" 
                 value={newUser.name} 
                 onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <input className='border p-2 m-2 rounded' 
                 type="text" 
                 placeholder="Enter Your Age" 
                 value={newUser.age} 
                 onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
          <button className='bg-white p-2 rounded' type="submit">Submit</button>
        </form>

        <h1 className='text-3xl font-semibold text-white'>List of People</h1>
        {users.length > 0 ? (
          users.map((user, id) => (
            <div key={id}>
              <p className='text-white'>Name: {user.name}</p>
              <p className='text-white'>Age: {user.age}</p>
            </div>
          ))
        ) : (
          <p className='text-white'>No users available</p>
        )}
      </div>
    </>
  );
}
