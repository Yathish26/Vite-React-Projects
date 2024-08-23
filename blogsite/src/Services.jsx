import { Link } from 'react-router-dom'
import styles from './Services.module.css'
import Allservices from './Allservices'

export default function Services() {
  return (
    <>
      <ListofService/>
      <Allservices />
    </>
  )
}

export const ListofService = () => {
  let serviceContents = ['All Services', 'Register for Service']
  return (
    <>
      <div className={styles.listofservice}>
        {serviceContents.map((ser, index) => {
          return (
            <div key={index} className={styles.title}>
              {ser === 'Register for Service' ? (<Link to={'/services/register'}>{ser}</Link>)
                :ser === 'All Services' ? (<Link to={'/services'} >{ser}</Link>) : (ser)}

            </div>
          )
        })}
      </div>

    </>
  )
}

