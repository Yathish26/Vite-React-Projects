import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="body">
        <div className="card">
          <h2>
            Hire Arrive
            <br />
            Made for Love
          </h2>
          <div className='contactbtn'>
            <a href="#footer">Scroll</a>
          </div>
        </div>
        <footer id="footer">
          <div className="col">
            <h3>Hire Arrive</h3>
            <p>
              Made with <span style={{ color: "#BA6573" }}>❤</span> by Yathish
            </p>
            <div className="social">
              <a
                href="https://codepen.io/iamyathz"
                target="_blank"
                className="link"
              >
                <img className='imgg' src="https://assets.codepen.io/9051928/codepen_1.png" alt="" />
              </a>
              <a
                href="https://x.com/iamyathz"
                target="_blank"
                className="link"
              >
                <img className='imgg' src="https://assets.codepen.io/9051928/x.png" alt="" />
              </a>
              <a
                href="https://www.youtube.com/@iamyathz"
                target="_blank"
                className="link"
              >
                <img className='imgg' src="https://assets.codepen.io/9051928/youtube_1.png" alt="" />
              </a>
            </div>
            <p style={{ color: "#818181", fontSize: "smaller" }}>
              2024 © All Rights Not Yet Reserved
            </p>
          </div>
          <div className="backdrop" />
        </footer>
      </div>
    </>

  )
}
