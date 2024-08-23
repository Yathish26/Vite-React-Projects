import React, { useState } from 'react'
import './RegisterService.css'
import { ListofService } from './Services';

export default function RegisterService() {

  let listOfWork = [
    "Accounting",
    "Administration",
    "Customer Service",
    "Data Entry",
    "Design",
    "Education",
    "Engineering",
    "Finance",
    "Healthcare",
    "Human Resources",
    "IT and Software Development",
    "Legal",
    "Management",
    "Marketing",
    "Project Management",
    "Quality Assurance",
    "Research and Development",
    "Sales",
    "Supply Chain and Logistics",
    "Technical Support",
    "Writing and Content Creation",
    "Other"
  ];

  let [fullname, setFullname] = useState('');
  let [number, setNumber] = useState('');
  let [workcatergory, setWorkCategory] = useState('');
  let [submit, setSubmit] = useState('Submit')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      full_name: fullname,
      mobile_number: number,
      work_category: workcatergory,
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/registerservice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form Submitted Successfully');
        setSubmit('Submitted')
        setTimeout(() => {
          setSubmit('Submit')
        }, 1000)
      } else {
        console.log('Form Submission Failed');
        setSubmit("Failed")
        setTimeout(() => {
          setSubmit('Submit')
        }, 1000)
      }
    } catch (error) {
      console.error('Error', error);
    }
  }


  return (
    <>
      <ListofService />
      <form onSubmit={handleSubmit} className="loginform">

        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder='Full Name'
          className="input-field"
        />

        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder='Mobile Number'
          className="input-field"
        />

        <select
          className="input-field"
          name="work-category"
          id="work-category"
          value={workcatergory}
          onChange={(e) => setWorkCategory(e.target.value)}
        >
          <option value="" disabled hidden>
            Work category
          </option>
          {listOfWork.map((work, index) => {
            return (
              <option key={index} value={work}>
                {work}
              </option>
            )
          })}
        </select>

        <button type='submit' >{submit}</button>

      </form>

    </>
  )
}
